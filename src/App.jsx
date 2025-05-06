import { useRef, useState } from "react";
import useFetchGraph from "./hooks/useFetchGraph";
import { parseFraction, transformGraphData } from "./utils/dataTransformer";
import { apiService } from "./services/apiService";
import { PathForm, CalibrationForm } from "./components";
import { INITIAL_GRAPH_DATA, INITIAL_PAIR_WISE_MATRIX } from "./constants";
import ForceDirectedGraph from "./components/ForceDirectedGraph";

function App() {
  const [error, setError] = useState("");
  const [path, setPath] = useState([]);
  const [vehicleModel, setVehicleModel] = useState("");
  const [simulData, setSimulData] = useState(
    transformGraphData(INITIAL_GRAPH_DATA)
  );
  const { graph, loading } = useFetchGraph(INITIAL_GRAPH_DATA, setError);

  const formRef = useRef({
    to: "",
    from: "",
    fuel: "",
    matrix: INITIAL_PAIR_WISE_MATRIX.map((row) => [...row]),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if it's a matrix field
    const matrixMatch = name.match(/^matrix\[(\d+)\]\[(\d+)\]$/);

    if (matrixMatch) {
      const row = parseInt(matrixMatch[1], 10);
      const col = parseInt(matrixMatch[2], 10);
      formRef.current.matrix[row][col] = parseFraction(value) || 0;
    } else {
      formRef.current[name] = value;
    }
  };

  const handleSubmit = async (e) => {
    const { to, from, fuel, matrix } = formRef.current;

    console.log(to, from, fuel, matrix);

    console.log("Logging here");
    try {
      const response = await apiService.findShortestPath({
        to,
        from,
        fuel,
        matrix,
      });

      if (response?.second.length === 0) {
        setError("Insufficient fuel to traverse path!");
        setPath([]);
      } else {
        setError("");
        setPath(response?.second);
      }
    } catch (error) {
      setError("An error occurred while finding the path");
    }
  };

  const handleCaliberation = async () => {
    setPath([]);
    if (!vehicleModel) {
      setSimulData(transformGraphData(INITIAL_GRAPH_DATA));
      return;
    }

    try {
      const calibratedLinks = await apiService.calibrateVehicle(vehicleModel);

      setSimulData({
        ...simulData,
        links: calibratedLinks,
        unit: " KWH",
      });
    } catch (error) {
      console.err("Calibration Error: ", error);
      setError("Error while calibrating the Graph.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Force Directed Graph Section */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Graph Visualization
          </h2>
          <ForceDirectedGraph
            data={simulData}
            pathNodes={path}
            chargingStations={graph.chargingStations ?? []}
          />
        </div>

        {/* Error Alert */}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Calibration and Path Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Calibration
            </h2>
            <CalibrationForm
              vehicleModel={vehicleModel}
              setVehicleModel={setVehicleModel}
              handleCaliberation={handleCaliberation}
            />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Path Finder
            </h2>
            <PathForm
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              formRef={formRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

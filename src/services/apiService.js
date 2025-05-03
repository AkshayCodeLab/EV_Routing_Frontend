import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const apiService = {
  getGraph: async (graphData) => {
    try {
      const response = await axios.post(`${backendUrl}/getGraph`, graphData);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph:", error);
      throw error;
    }
  },
  findShortestPath: async (pathParams) => {
    try {
      const response = await axios.post(
        `${backendUrl}/shortestPath`,
        pathParams
      );
      return response.data;
    } catch (error) {
      console.error("Error finding shortest path:", error);
      throw error;
    }
  },
  calibrateVehicle: async (vehicleModel) => {
    try {
      const response = await axios.post(`${backendUrl}/calibrate`, {
        name: vehicleModel,
      });
      return response.data;
    } catch (error) {
      console.error("Error calibrating vehicle:", error);
      throw error;
    }
  },
};

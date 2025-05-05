import React from "react";
import { VEHICLE_OPTIONS } from "../constants";

const CalibrationForm = ({
  vehicleModel,
  setVehicleModel,
  handleCaliberation,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: 50,
          behavior: "smooth",
        });
        handleCaliberation();
      }}
      className="max-w-md w-full mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
        Vehicle Calibration
      </h3>

      <div className="space-y-5">
        <div className="mb-4">
          <label
            htmlFor="vehicle-select"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Vehicle Model
          </label>
          <select
            id="vehicle-select"
            name="select"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          >
            {VEHICLE_OPTIONS.map((vehicle) => (
              <option value={vehicle.value} key={vehicle.label}>
                {vehicle.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-400 hover:bg-gray-300 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors"
        >
          Calibrate Vehicle
        </button>
      </div>
    </form>
  );
};

export default CalibrationForm;

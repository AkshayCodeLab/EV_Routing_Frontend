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
        handleCaliberation();
      }}
      className="max-w-sm w-full mx-auto p-4 border border-gray-300 rounded-md bg-white"
    >
      <div className="mb-4">
        <label
          htmlFor="vehicle-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Vehicle Model
        </label>
        <select
          id="vehicle-select"
          name="select"
          value={vehicleModel}
          onChange={(e) => setVehicleModel(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none"
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
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-md"
      >
        Calibrate
      </button>
    </form>
  );
};

export default CalibrationForm;

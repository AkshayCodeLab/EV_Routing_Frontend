import React from "react";

const PathForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="max-w-sm w-full mx-auto p-4 border border-gray-300 rounded-md bg-white"
    >
      <div>
        <label
          htmlFor="from"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          From
        </label>
        <input
          id="from"
          name="from"
          placeholder="from"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="to"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          To
        </label>
        <input
          id="to"
          name="to"
          placeholder="to"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="fuel"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Fuel
        </label>
        <input
          id="fuel"
          name="fuel"
          placeholder="fuel"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pairwise Comparison Matrix
        </label>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, row) =>
            [...Array(4)].map((_, col) => (
              <input
                key={`${row}-${col}`}
                name={`matrix[${row}][${col}]`}
                onChange={handleInputChange}
                className="w-12 text-center border border-gray-300 rounded-sm text-sm py-1"
              />
            ))
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default PathForm;

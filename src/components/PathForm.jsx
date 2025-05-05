import React from "react";

const PathForm = ({ handleInputChange, handleSubmit, formRef }) => {
  const labels = ["Energy", "Detour", "Recharge", "Threshold"];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Scroll to top of the page
        window.scrollTo({
          top: 50,
          behavior: "smooth",
        });
        // Then handle form submission
        handleSubmit();
      }}
      className="max-w-md w-full mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
        Route Optimization Parameters
      </h3>

      <div className="space-y-5">
        <div className="mb-4">
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            From
          </label>
          <input
            id="from"
            name="from"
            placeholder="Starting location"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            To
          </label>
          <input
            id="to"
            name="to"
            placeholder="Destination location"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="fuel"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            State of Charge
          </label>
          <input
            id="fuel"
            name="fuel"
            placeholder="Current charge (kWh)"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pairwise Comparison Matrix
          </label>
          <div className="overflow-x-auto bg-white p-4 rounded-md border border-gray-300 shadow-sm">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="w-24 px-2 py-2"></th>
                  {labels.map((label, idx) => (
                    <th
                      key={`col-label-${idx}`}
                      className="text-xs font-medium bg-gray-50 text-gray-700 text-center px-2 py-2 border border-gray-200"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {labels.map((rowLabel, row) => (
                  <tr key={`row-${row}`}>
                    <td className="text-xs font-medium bg-gray-50 text-gray-700 px-3 py-2 text-right border border-gray-200">
                      {rowLabel}
                    </td>
                    {labels.map((_, col) => (
                      <td key={`cell-${row}-${col}`} className="p-1">
                        <input
                          name={`matrix[${row}][${col}]`}
                          defaultValue={formRef.current.matrix[row][col]}
                          onChange={handleInputChange}
                          className="w-16 h-10 text-center border border-gray-300 rounded-md text-sm py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors"
                          disabled={row === col}
                          style={
                            row === col ? { backgroundColor: "#f3f4f6" } : {}
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Note: Diagonal cells represent self-comparison and are automatically
            disabled.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-400 hover:bg-gray-300 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors"
        >
          Calculate Optimal Route
        </button>
      </div>
    </form>
  );
};

export default PathForm;

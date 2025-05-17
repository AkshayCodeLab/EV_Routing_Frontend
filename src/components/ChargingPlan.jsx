import { BatteryCharging } from "lucide-react";

function ChargingPlan({ rechargeAmounts, maxCharge = 20 }) {
  const entries = Object.entries(rechargeAmounts);
  if (!entries.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Charging Radials
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {entries.map(([station, amount]) => {
          const pct = Math.min((amount / maxCharge) * 100, 100);
          const strokeDasharray = 2 * Math.PI * 30; // circle r=30
          const dashOffset = ((100 - pct) / 100) * strokeDasharray;

          return (
            <div key={station} className="flex flex-col items-center">
              <svg width="70" height="70" className="rotate-[-90deg]">
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  stroke="#E5E7EB"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  stroke="#34D399"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-3 text-sm font-medium text-gray-700">
                Station {station}
              </p>
              <p className="text-xl font-bold text-gray-900">{amount} KWH</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChargingPlan;

// from = 1, to = 10, fuel = 6,7
export const INITIAL_GRAPH_DATA = {
  vertices: 11,
  edges: [
    // u, v, distanceKm
    [1, 2, 8], // ceil(8   / 7.33859) = 2 kWh
    [1, 3, 20], // ceil(20  / 7.33859) = 3 kWh
    [2, 4, 15], // ceil(15  / 7.33859) = 3 kWh
    [2, 5, 30], // ceil(30  / 7.33859) = 5 kWh
    [3, 6, 25], // ceil(25  / 7.33859) = 4 kWh
    [4, 5, 6], // ceil(6   / 7.33859) = 1 kWh
    [4, 7, 40], // ceil(40  / 7.33859) = 6 kWh
    [5, 8, 50], // ceil(50  / 7.33859) = 7 kWh
    [6, 8, 18], // ceil(18  / 7.33859) = 3 kWh
    [6, 9, 55], // ceil(55  / 7.33859) = 8 kWh
    [7, 8, 14], // ceil(14  / 7.33859) = 2 kWh
    [7, 10, 45], // ceil(45  / 7.33859) = 7 kWh
    [8, 9, 12], // ceil(12  / 7.33859) = 2 kWh
    [9, 10, 22], // ceil(22  / 7.33859) = 3 kWh
    // cross-links for detours
    [3, 5, 28], // ceil(28  / 7.33859) = 4 kWh
  ],
  // spread your charging stations at low-, mid-, and high-index nodes:
  chargingStations: [4, 6, 9],
};
// export const INITIAL_GRAPH_DATA = {
//   vertices: 7,
//   edges: [
//     // → Direct path: LOW kWh, but NO chargers
//     [1, 2, 5], // ceil( 5  / 7.34) = 1 kWh
//     [2, 3, 5], // 1 kWh
//     [3, 6, 5], // 1 kWh
//     // total = 3 kWh

//     // → Charging path: HIGHER kWh, but visits 4 & 5
//     [1, 4, 20], // ceil(20 / 7.34) = 3 kWh
//     [4, 5, 20], // 3 kWh
//     [5, 6, 20], // 3 kWh
//     // total = 9 kWh

//     // Optional cross-link (mid-choice)
//     [2, 5, 30], // 5 kWh
//   ],
//   chargingStations: [4, 5],
// };

// export const INITIAL_GRAPH_DATA = {
//   vertices: 8,
//   edges: [
//     [1, 2, 58],
//     [1, 7, 44],
//     [1, 3, 52],
//     [2, 7, 22],
//     [2, 4, 15],
//     [3, 7, 44],
//     [3, 6, 15],
//     [4, 5, 29],
//     [5, 6, 15],
//     [5, 7, 88],
//     [6, 7, 29],
//   ],
//   chargingStations: [1, 3, 4],
// };

export const VEHICLE_OPTIONS = [
  { value: "", label: "Select" },
  { value: "Tesla Model 3", label: "Tesla Model 3" },
  { value: "Tesla Model Y", label: "Tesla Model Y" },
  { value: "Hyundai Kona Electric", label: "Hyundai Kona Electric" },
];

// export const INITIAL_PAIR_WISE_MATRIX =
//   // even stronger threshold preference
//   [
//     /*E*/ [1, 1 / 3, 1 / 5, 1 / 11],
//     /*D*/ [3, 1, 1 / 3, 1 / 9],
//     /*R*/ [5, 3, 1, 1 / 7],
//     /*T*/ [11, 9, 7, 1],
//   ];

// Prioritise Energy
// to = 6, from = 1, fuel = 4
export const INITIAL_PAIR_WISE_MATRIX = [
  /*           Energy  Detour  Recharge  Threshold */
  /* Energy */ [1, 5, 7, 9],
  /* Detour */ [1 / 5, 1, 3, 5],
  /* Recharge */ [1 / 7, 1 / 3, 1, 3],
  /* Threshold*/ [1 / 9, 1 / 5, 1 / 3, 1],
];

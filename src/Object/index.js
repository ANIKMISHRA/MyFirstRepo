// Tree form Data of array
const Tree = [
  {
    label: 'Liberty Health',
    id: 1,
    level: 1,
    branches: [
      {
        label: 'Pacific Northwest',
        id: 2,
        level: 2,
        branches: [
          {
            label: 'East Portland Clinic',
            id: 3,
            level: 3,
            branches: [],
          },
          {
            label: 'Beaverton / Tigard',
            id: 4,
            level: 3,
            branches: [
              {
                label: 'Beaverton / Tigard',
                id: 4.1,
                level: 4,
                branches: [],
              },
            ],
          },
          {
            label: 'Lake Oswego Regency',
            id: 5,
            level: 3,
            branches: [
              {
                label: 'East India Clinic',
                id: 3.1,
                level: 4,
                branches: [],
              },
              {
                label: 'East America Clinic',
                id: 3.2,
                level: 4,
                branches: [],
              },
              {
                label: 'East Australia Clinic',
                id: 3.3,
                level: 4,
                branches: [],
              },
              {
                label: 'East Australia Clinic',
                id: 3.4,
                level: 4,
                branches: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export default Tree;

// Color palette constants

export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  brand: {
    blue: '#3568D7',
    blueDark: '#2557c4',
  },
  layers: {
    rtrw: {
      main: '#3b82f6',
      bg: '#eff6ff',
    },
    lp2b: {
      main: '#22c55e',
      bg: '#f0fdf4',
    },
    lcp2b: {
      main: '#eab308',
      bg: '#fefce8',
    },
    roe: {
      main: '#ef4444',
      bg: '#fef2f2',
    },
    rdtr: {
      main: '#a855f7',
      bg: '#faf5ff',
    },
  },
  status: {
    layak: {
      main: '#22c55e',
      bg: '#f0fdf4',
    },
    terbatas: {
      main: '#eab308',
      bg: '#fefce8',
    },
    tidakLayak: {
      main: '#ef4444',
      bg: '#fef2f2',
    },
  },
};

export const getLayerColor = (layer: string) => {
  switch (layer.toLowerCase()) {
    case 'rtrw':
      return colors.layers.rtrw;
    case 'lp2b':
      return colors.layers.lp2b;
    case 'lcp2b':
      return colors.layers.lcp2b;
    case 'roe':
      return colors.layers.roe;
    case 'rdtr':
      return colors.layers.rdtr;
    default:
      return colors.primary;
  }
};

export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'layak':
      return colors.status.layak;
    case 'terbatas':
      return colors.status.terbatas;
    case 'tidak layak':
    case 'tidaklayak':
      return colors.status.tidakLayak;
    default:
      return colors.primary;
  }
};

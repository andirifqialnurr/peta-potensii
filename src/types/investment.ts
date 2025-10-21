export interface InvestmentAnalysis {
  statusLahan: {
    selected?: string;
    score: number;
    weight: number;
  };
  komoditas: {
    selected?: string;
    score: number;
    weight: number;
  };
  zonaNilaiTanah: {
    selected?: string;
    score: number;
    weight: number;
  };
  faktorPendukung: {
    selected?: string;
    score: number;
    weight: number;
  };
  overallScore: number;
  recommendation: 'highly-recommended' | 'recommended' | 'fair' | 'not-recommended';
}

export interface ROECalculation {
  labaBersih: number;
  totalEkuitas: number;
  jumlahSaham: number;
  hargaPasar: number;
  roe: number;
  eps: number;
  marketCap: number;
  peRatio: number;
  category: 'poor' | 'fair' | 'good' | 'excellent';
}

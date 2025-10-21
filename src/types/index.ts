// General types for the application

export interface Location {
  lat: number;
  lng: number;
  name: string;
  address?: string;
}

export interface LayerData {
  type: 'rtrw' | 'lp2b' | 'lcp2b' | 'roe' | 'rdtr';
  name: string;
  color: string;
  data: unknown[];
  visible: boolean;
}

export interface Komoditas {
  id: string;
  nama: string;
  kategori: 'pertanian' | 'perkebunan' | 'perikanan' | 'kerajinan' | 'industri' | 'pariwisata';
  icon: string;
  produktivitas?: string;
  hargaJual?: number;
  kebutuhanModal?: number;
  roi?: number;
  periodeHari?: number;
}

export interface BEPCalculation {
  biayaTetap: number;
  biayaVariabel: number;
  hargaJual: number;
  bepUnit: number;
  bepRupiah: number;
}

export interface InfrastructureItem {
  id: string;
  name: string;
  checked: boolean;
  category: 'prasarana' | 'sarana';
}

export interface LandStatus {
  id: string;
  nama: string;
  status: 'clean' | 'process' | 'restricted' | 'unavailable';
  readiness: number;
  deskripsi: string;
  selected?: boolean;
}

export interface ZonaNilaiTanah {
  id: string;
  zona: string;
  lokasi: string;
  jenisLahan: string;
  nilaiMin: number;
  nilaiMax: number;
  nilaiRataRata: number;
  faktorPengali: number;
  selected?: boolean;
}

export interface FaktorPendukung {
  id: string;
  wilayah: string;
  ketersediaanBahanBaku: number;
  tenagaKerjaTerampil: number;
  aksesPasar: number;
  infrastrukturTransportasi: number;
  utilitas: number;
  konektivitasInternet: number;
  lembagaKeuangan: number;
  overallScore: number;
  selected?: boolean;
}

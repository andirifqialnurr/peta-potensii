import Image from 'next/image';
import Link from 'next/link';
import { Map, TrendingUp, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';
import { Button, Badge, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#3568D7] to-[#2557c4] text-white py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="glass" size="lg">
                  Platform Analisis Potensi Usaha
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Analisis Lokasi Usaha Berbasis Data Tata Ruang
                </h1>
                <p className="text-lg text-blue-100">
                  Manfaatkan data RTRW, LP2B, dan LCP2B untuk menentukan lokasi usaha yang tepat. 
                  Analisis kelayakan, hitung BEP, dan temukan komoditas unggulan wilayah.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/peta">
                    <Button variant="success" size="xl">
                      <Map className="mr-2 h-5 w-5" />
                      Lihat Peta
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#3568D7]">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/analisis">
                    <Button variant="ghost" size="xl" className="text-white hover:bg-white/20">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Analisis BEP
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                  <Image
                    src="/logo_kolaka_timur.svg"
                    alt="Logo Kolaka Timur"
                    width={400}
                    height={400}
                    className="relative z-10 rounded-2xl object-contain p-8"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-neutral-100">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Fitur Unggulan
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Platform lengkap untuk analisis potensi usaha dengan data akurat dan visualisasi interaktif
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Map className="h-6 w-6 text-[#3568D7]" />
                  </div>
                  <CardTitle className="text-xl">Peta Interaktif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Visualisasi data RTRW, LP2B, dan LCP2B dalam peta interaktif dengan layer control dan informasi detail.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">3 Layer Data Tata Ruang</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Informasi Status Lahan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Toggle Show/Hide Layer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Analisis BEP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Kalkulator Break Even Point untuk menghitung titik balik modal usaha dengan data komprehensif.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Perhitungan BEP Real-time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Analisis ROE & ROI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Rekomendasi Investasi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Data Akurat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Informasi lengkap tentang komoditas unggulan, infrastruktur, dan zona nilai tanah wilayah.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">14+ Komoditas Unggulan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Checklist Infrastruktur</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">Zona Nilai Tanah (ZNT)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <Badge variant="glass" size="lg" className="mb-6">
              Mulai Sekarang
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Siap Menganalisis Potensi Lokasi Usaha?
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Gunakan platform kami untuk menemukan lokasi usaha yang tepat dengan data tata ruang yang akurat dan terpercaya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/peta">
                <Button variant="outline" size="xl" className="bg-white text-green-600 border-white hover:bg-green-50">
                  <Map className="mr-2 h-5 w-5" />
                  Mulai dari Peta
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="xl" className="text-white hover:bg-white/20">
                  Lihat Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

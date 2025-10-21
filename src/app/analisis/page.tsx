'use client';

import Link from 'next/link';
import { ArrowLeft, Calculator, Sprout, CheckSquare, AlertTriangle, BarChart3 } from 'lucide-react';
import { Card, CardContent, Button, Badge } from '@/components/ui';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BEPCalculator from '@/components/BEPCalculator';
import KomoditasUnggulanCard from '@/components/KomoditasUnggulanCard';

export default function AnalisisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-green-700 text-white py-12">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

            <div className="max-w-3xl">
              <Badge variant="glass" size="lg" className="mb-4">
                Analisis Kelayakan Usaha
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Analisis Potensi Lokasi Usaha
              </h1>
              <p className="text-lg text-green-100 mb-8">
                Hitung Break Even Point (BEP), cek komoditas unggulan wilayah, dan evaluasi 
                kelengkapan sarana prasarana untuk memulai usaha di lokasi terpilih.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <Calculator className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-sm font-medium">Kalkulator BEP</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <Sprout className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-sm font-medium">14+ Komoditas</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <CheckSquare className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-sm font-medium">Checklist Lengkap</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-sm font-medium">Peringatan Lokasi</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <Link href="/dashboard">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-green-600">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Lihat Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-neutral-100">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - BEP Calculator */}
              <div className="lg:col-span-1">
                <BEPCalculator />
              </div>

              {/* Right Column - Info Cards */}
              <div className="lg:col-span-2 space-y-6">
                {/* Komoditas Unggulan */}
                <KomoditasUnggulanCard />

                {/* Sarana & Prasarana */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center text-neutral-900">
                      <CheckSquare className="mr-2 h-5 w-5 text-blue-600" />
                      Sarana & Prasarana (Coming Soon)
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Checklist kelengkapan infrastruktur dan fasilitas pendukung untuk usaha Anda.
                    </p>
                  </CardContent>
                </Card>

                {/* Location Warning */}
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center text-yellow-800">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Peringatan Pembatasan Lahan
                    </h3>
                    <div className="space-y-2 text-sm text-yellow-900">
                      <p>⚠️ <strong>LP2B & LCP2B:</strong> Tidak dapat dibangun untuk non-pertanian</p>
                      <p>⚠️ <strong>ROE (Right of Way):</strong> Area milik jalan</p>
                      <p>⚠️ <strong>Kawasan Lindung:</strong> Dilindungi untuk konservasi</p>
                      <p>💡 <strong>Tips:</strong> Cek status lahan di halaman peta sebelum memulai usaha</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

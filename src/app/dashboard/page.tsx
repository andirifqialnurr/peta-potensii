'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BarChart3, MapPin, Sprout, DollarSign, Building, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-neutral-100">
        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">Lahan Tersedia</p>
                      <p className="text-3xl font-bold text-neutral-900 mt-1">4</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <Badge variant="success" size="sm" className="mt-3">
                    +2 dari bulan lalu
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">Komoditas Unggulan</p>
                      <p className="text-3xl font-bold text-neutral-900 mt-1">14</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Sprout className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <Badge variant="info" size="sm" className="mt-3">
                    6 Kategori
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">Zona Nilai Tanah</p>
                      <p className="text-3xl font-bold text-neutral-900 mt-1">6</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <Badge variant="warning" size="sm" className="mt-3">
                    Update terbaru
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">Total Investor</p>
                      <p className="text-3xl font-bold text-neutral-900 mt-1">30+</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <Badge variant="default" size="sm" className="mt-3">
                    Aktif
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Ringkasan
                </TabsTrigger>
                <TabsTrigger value="lahan">
                  <MapPin className="mr-2 h-4 w-4" />
                  Status Lahan
                </TabsTrigger>
                <TabsTrigger value="komoditas">
                  <Sprout className="mr-2 h-4 w-4" />
                  Komoditas
                </TabsTrigger>
                <TabsTrigger value="zona">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Zona Nilai Tanah
                </TabsTrigger>
                <TabsTrigger value="faktor">
                  <Building className="mr-2 h-4 w-4" />
                  Faktor Pendukung
                </TabsTrigger>
                <TabsTrigger value="roe">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  ROE Calculator
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Recommendation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-12 w-12 text-green-600" />
                      </div>
                      <Badge variant="success" size="lg" className="mb-4">
                        Sangat Direkomendasikan
                      </Badge>
                      <p className="text-4xl font-bold text-neutral-900 mb-2">85%</p>
                      <p className="text-neutral-600">Overall Investment Score</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
                        <div className="text-center">
                          <p className="text-sm text-neutral-600 mb-1">Status Lahan</p>
                          <Badge variant="success">90%</Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-neutral-600 mb-1">Komoditas</p>
                          <Badge variant="success">85%</Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-neutral-600 mb-1">Zona Nilai</p>
                          <Badge variant="warning">75%</Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-neutral-600 mb-1">Infrastruktur</p>
                          <Badge variant="success">88%</Badge>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-500 mt-6 max-w-lg mx-auto">
                        Berdasarkan analisis komprehensif terhadap status lahan, potensi komoditas, 
                        zona nilai tanah, dan kelengkapan infrastruktur, lokasi ini sangat 
                        direkomendasikan untuk investasi usaha.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lahan">
                <Card>
                  <CardHeader>
                    <CardTitle>Status Lahan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">
                      Informasi status lahan tersedia, kelayakan untuk pembangunan usaha, 
                      dan pembatasan yang berlaku.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="komoditas">
                <Card>
                  <CardHeader>
                    <CardTitle>Komoditas Unggulan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">
                      Daftar komoditas unggulan wilayah dengan data produktivitas, 
                      harga jual, dan ROI.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="zona">
                <Card>
                  <CardHeader>
                    <CardTitle>Zona Nilai Tanah (ZNT)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">
                      Informasi zona nilai tanah per wilayah dengan harga rata-rata 
                      dan faktor pengali.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faktor">
                <Card>
                  <CardHeader>
                    <CardTitle>Faktor Pendukung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">
                      Analisis faktor pendukung seperti ketersediaan bahan baku, 
                      tenaga kerja, infrastruktur, dan akses pasar.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="roe">
                <Card>
                  <CardHeader>
                    <CardTitle>ROE Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">
                      Kalkulator Return on Equity (ROE) untuk menghitung tingkat 
                      pengembalian investasi dan analisis kelayakan finansial.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Layers, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge, Switch, Label } from '@/components/ui';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PetaPage() {
  const [layers, setLayers] = useState({
    rtrw: true,
    lp2b: true,
    lcp2b: false,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-neutral-100">
        <div className="h-[calc(100vh-4rem)] flex">
          {/* Sidebar */}
          <div className="w-80 bg-white overflow-y-auto p-6 space-y-6">

            <div>
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">Peta Interaktif</h1>
              <p className="text-sm text-neutral-600">
                Visualisasi data tata ruang wilayah Kolaka Timur
              </p>
            </div>

            {/* Layer Control */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Layers className="mr-2 h-5 w-5 text-[#3568D7]" />
                  Layer Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-[#3b82f6]" />
                    <div>
                      <Label htmlFor="rtrw" className="font-medium">RTRW</Label>
                      <p className="text-xs text-neutral-500">Rencana Tata Ruang Wilayah</p>
                    </div>
                  </div>
                  <Switch
                    id="rtrw"
                    checked={layers.rtrw}
                    onCheckedChange={(checked) => setLayers({ ...layers, rtrw: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-[#22c55e]" />
                    <div>
                      <Label htmlFor="lp2b" className="font-medium">LP2B</Label>
                      <p className="text-xs text-neutral-500">Lahan Pertanian Pangan</p>
                    </div>
                  </div>
                  <Switch
                    id="lp2b"
                    checked={layers.lp2b}
                    onCheckedChange={(checked) => setLayers({ ...layers, lp2b: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-[#eab308]" />
                    <div>
                      <Label htmlFor="lcp2b" className="font-medium">LCP2B</Label>
                      <p className="text-xs text-neutral-500">Lahan Cadangan Pangan</p>
                    </div>
                  </div>
                  <Switch
                    id="lcp2b"
                    checked={layers.lcp2b}
                    onCheckedChange={(checked) => setLayers({ ...layers, lcp2b: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-600" />
                  Legend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="success">Dapat Dibangun</Badge>
                  <span className="text-xs text-neutral-600">Area bersih untuk usaha</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="warning">Terbatas</Badge>
                  <span className="text-xs text-neutral-600">Perlu izin khusus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="danger">Tidak Dapat</Badge>
                  <span className="text-xs text-neutral-600">LP2B/LCP2B/ROE</span>
                </div>
              </CardContent>
            </Card>

            {/* Info */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900 mb-1">Tips Penggunaan</p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Toggle layer untuk melihat data berbeda</li>
                      <li>• Klik marker untuk info detail lokasi</li>
                      <li>• Zoom in/out untuk detail lebih jelas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Container */}
          <div className="flex-1 relative bg-neutral-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Peta Interaktif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Integrasi peta Leaflet.js akan ditampilkan di sini. File KMZ (RTRW, LP2B, LCP2B) 
                    akan diparse dan divisualisasikan pada peta interaktif.
                  </p>
                  <div className="space-y-2 text-sm text-neutral-500">
                    <p>📍 Layer aktif:</p>
                    <ul className="ml-4 space-y-1">
                      {layers.rtrw && <li>✓ RTRW (Biru)</li>}
                      {layers.lp2b && <li>✓ LP2B (Hijau)</li>}
                      {layers.lcp2b && <li>✓ LCP2B (Kuning)</li>}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

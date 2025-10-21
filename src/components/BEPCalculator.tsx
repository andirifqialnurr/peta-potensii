'use client';

import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Input, Label, Button, Badge } from '@/components/ui';
import { formatCurrency } from '@/lib/utils';

export default function BEPCalculator() {
  const [biayaTetap, setBiayaTetap] = useState<number>(0);
  const [biayaVariabel, setBiayaVariabel] = useState<number>(0);
  const [hargaJual, setHargaJual] = useState<number>(0);

  const calculateBEP = () => {
    if (hargaJual <= biayaVariabel) return { unit: 0, rupiah: 0 };
    
    const bepUnit = biayaTetap / (hargaJual - biayaVariabel);
    const bepRupiah = bepUnit * hargaJual;
    
    return {
      unit: Math.ceil(bepUnit),
      rupiah: bepRupiah,
    };
  };

  const bep = calculateBEP();
  const isValid = biayaTetap > 0 && biayaVariabel > 0 && hargaJual > biayaVariabel;

  const handleClear = () => {
    setBiayaTetap(0);
    setBiayaVariabel(0);
    setHargaJual(0);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Calculator className="mr-2 h-5 w-5 text-[#3568D7]" />
          Kalkulator BEP
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="biaya-tetap">Biaya Tetap (Rp)</Label>
          <Input
            id="biaya-tetap"
            type="number"
            placeholder="Contoh: 10000000"
            value={biayaTetap || ''}
            onChange={(e) => setBiayaTetap(Number(e.target.value))}
          />
          <p className="text-xs text-neutral-500 mt-1">
            Biaya yang tidak berubah (sewa, gaji tetap, dll)
          </p>
        </div>

        <div>
          <Label htmlFor="biaya-variabel">Biaya Variabel per Unit (Rp)</Label>
          <Input
            id="biaya-variabel"
            type="number"
            placeholder="Contoh: 5000"
            value={biayaVariabel || ''}
            onChange={(e) => setBiayaVariabel(Number(e.target.value))}
          />
          <p className="text-xs text-neutral-500 mt-1">
            Biaya per unit produk (bahan baku, kemasan, dll)
          </p>
        </div>

        <div>
          <Label htmlFor="harga-jual">Harga Jual per Unit (Rp)</Label>
          <Input
            id="harga-jual"
            type="number"
            placeholder="Contoh: 15000"
            value={hargaJual || ''}
            onChange={(e) => setHargaJual(Number(e.target.value))}
          />
          <p className="text-xs text-neutral-500 mt-1">
            Harga jual produk per unit
          </p>
        </div>

        {isValid && (
          <>
            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">BEP (Unit)</span>
                <Badge variant="primary" size="lg">
                  {bep.unit.toLocaleString('id-ID')} unit
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">BEP (Rupiah)</span>
                <Badge variant="success" size="lg">
                  {formatCurrency(bep.rupiah)}
                </Badge>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-800">
                  Anda perlu menjual <strong>{bep.unit} unit</strong> atau mencapai 
                  omzet <strong>{formatCurrency(bep.rupiah)}</strong> untuk mencapai titik impas (BEP).
                </p>
              </div>
            </div>
          </>
        )}

        <div className="flex gap-2">
          <Button
            variant="outlineSecondary"
            size="sm"
            onClick={handleClear}
            className="flex-1"
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

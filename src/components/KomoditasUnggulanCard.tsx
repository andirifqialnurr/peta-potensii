'use client';

import { Sprout, Coffee, Fish, Palette, Factory, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Badge, Separator } from '@/components/ui';
import { komoditasByKategori } from '@/data/komoditas';

const categoryIcons = {
  pertanian: Sprout,
  perkebunan: Coffee,
  perikanan: Fish,
  kerajinan: Palette,
  industri: Factory,
  pariwisata: UtensilsCrossed,
};

const categoryColors = {
  pertanian: 'success',
  perkebunan: 'warning',
  perikanan: 'info',
  kerajinan: 'primary',
  industri: 'danger',
  pariwisata: 'default',
} as const;

export default function KomoditasUnggulanCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Sprout className="mr-2 h-5 w-5 text-green-600" />
          Komoditas Unggulan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
        {Object.entries(komoditasByKategori).map(([kategori, items], index) => {
          const Icon = categoryIcons[kategori as keyof typeof categoryIcons];
          const color = categoryColors[kategori as keyof typeof categoryColors];
          
          return (
            <div key={kategori}>
              <div className="flex items-center space-x-2 mb-3">
                <Icon className="h-5 w-5 text-neutral-700" />
                <h3 className="font-semibold text-neutral-900 capitalize">{kategori}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {items.map((item) => (
                  <Badge key={item.id} variant={color} size="default">
                    {item.icon} {item.nama}
                  </Badge>
                ))}
              </div>
              {index < Object.keys(komoditasByKategori).length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

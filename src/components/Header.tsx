'use client';

import Link from 'next/link';
import { Map, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Map className="h-6 w-6 text-[#3568D7]" />
              <span className="text-xl font-bold text-neutral-900">
                Peta Potensi Usaha
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <Button variant="ghost" size="sm">
                Beranda
              </Button>
            </Link>
            <Link href="/peta">
              <Button variant="ghost" size="sm">
                <Map className="mr-2 h-4 w-4" />
                Peta
              </Button>
            </Link>
            <Link href="/analisis">
              <Button variant="ghost" size="sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                Analisis
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="primary" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, BarChart3, Calculator, Home } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
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

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <Button 
                variant={pathname === '/' ? 'primary' : 'ghost'} 
                size="sm" 
                className={pathname === '/' ? '' : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'}
              >
                <Home className="mr-2 h-4 w-4" />
                Beranda
              </Button>
            </Link>
            <Link href="/peta">
              <Button 
                variant={pathname === '/peta' ? 'primary' : 'ghost'} 
                size="sm" 
                className={pathname === '/peta' ? '' : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'}
              >
                <Map className="mr-2 h-4 w-4" />
                Peta
              </Button>
            </Link>
            <Link href="/analisis">
              <Button 
                variant={pathname === '/analisis' ? 'primary' : 'ghost'} 
                size="sm" 
                className={pathname === '/analisis' ? '' : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'}
              >
                <Calculator className="mr-2 h-4 w-4" />
                Analisis BEP
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button 
                variant={pathname === '/dashboard' ? 'primary' : 'ghost'} 
                size="sm" 
                className={pathname === '/dashboard' ? '' : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'}
              >
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

'use client';

export default function Footer() {
  return (
    <footer className="bg-white mt-auto shadow-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold text-neutral-900">Peta Potensi Usaha</h3>
            <p className="text-xs text-neutral-600">
              Platform analisis lokasi usaha berbasis data tata ruang
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-neutral-500">
              © 2025 Peta Potensi Usaha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

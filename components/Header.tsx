'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Compass, Bike, Footprints, Video, Star, Heart, Menu, X, Search, Mountain } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '/gravel', label: 'Gravel', icon: Bike },
    { href: '/trail-running', label: 'Trail Running', icon: Footprints },
    { href: '/vida-outdoor', label: 'Vida Outdoor', icon: Mountain },
    { href: '/reviews', label: 'Reviews', icon: Star },
    { href: '/videos', label: 'Vídeos', icon: Video },
    { href: '/escolhas', label: 'Escolhas', icon: Compass },
    { href: '/apoie', label: 'Apoie o Projeto', icon: Heart, highlight: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cascalho-ink border-b border-cascalho-coral/20 text-cascalho-paper shadow-lg">
      {/* Top Banner Notice */}
      <div className="bg-gradient-orbit py-1 px-4 text-center text-xs font-semibold text-white tracking-wide">
        ⚡ Transparência radical: Recomendações testadas de verdade, sem jabá ou filtro corporativo.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cascalho-coral/40 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Image
                src="/logo.png"
                alt="Cascalho.CC Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-cascalho-paper group-hover:text-cascalho-coral transition-colors">
                CASCALHO<span className="text-cascalho-coral">.CC</span>
              </span>
              <span className="text-[11px] font-medium text-cascalho-sun tracking-wider uppercase">
                pedalar • correr • pensar
              </span>
            </div>
          </Link>

          {/* Search bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-xs mx-8 relative">
            <input
              type="text"
              placeholder="Buscar pneus, mochilas, rotas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cascalho-ink/80 text-cascalho-paper placeholder-cascalho-muted/70 text-sm border border-cascalho-paper/20 rounded-full py-2 pl-9 pr-8 focus:outline-none focus:border-cascalho-coral focus:ring-1 focus:ring-cascalho-coral transition"
            />
            <button type="submit" aria-label="Buscar" className="absolute left-3 top-2.5 hover:scale-110 transition">
              <Search className="w-4 h-4 text-cascalho-sun" />
            </button>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              if (link.highlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-cascalho-coral text-white hover:bg-cascalho-magenta transition-all shadow-md hover:shadow-cascalho-coral/30"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-cascalho-paper/90 hover:text-cascalho-sun hover:bg-white/5 transition"
                >
                  <Icon className="w-3.5 h-3.5 text-cascalho-coral" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-cascalho-paper hover:bg-white/10 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cascalho-coral" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cascalho-ink border-b border-cascalho-coral/30 px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={handleSearch} className="relative mb-3">
            <input
              type="text"
              placeholder="Buscar no site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 text-cascalho-paper placeholder-cascalho-muted text-sm border border-cascalho-paper/20 rounded-lg py-2.5 pl-9 pr-4"
            />
            <button type="submit" aria-label="Buscar" className="absolute left-3 top-3">
              <Search className="w-4 h-4 text-cascalho-sun" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold ${
                    link.highlight
                      ? 'bg-cascalho-coral text-white col-span-2 justify-center text-sm shadow'
                      : 'bg-white/5 text-cascalho-paper hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cascalho-sun" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 text-center">
            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-cascalho-sun hover:underline"
            >
              Quem sou • George Volpão & Patricia Fontana →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

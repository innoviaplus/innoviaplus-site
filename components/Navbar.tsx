"use client";

import { useState } from "react";
import Image from "next/image";
import {
  House,
  Server,
  Users,
  Phone,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Ana Sayfa", href: "/", icon: House },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz", icon: Server },
  { label: "Hakkımızda", href: "/hakkimizda", icon: Users },
  { label: "İletişim", href: "/iletisim", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("TR");

  return (
    <>
      <style>{`
        @keyframes techShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <div className="w-full flex justify-center px-0 md:px-4">
        <div className="w-full max-w-[1300px] h-[90px] bg-white flex items-center justify-between px-4 md:px-8 shadow-sm md:rounded-b-2xl">
          <a href="/" className="shrink-0 flex items-center">
            <Image src="/images/innoviaplus-logo.webp" alt="Innovia Plus" width={160} height={56} className="h-14 w-auto" />
          </a>

          <span className="text-base md:text-lg truncate max-w-[130px] md:max-w-none" style={{ fontFamily: "var(--font-caveat), cursive", background: "linear-gradient(90deg,#71717a 0%,#FF6900 40%,#71717a 80%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "techShimmer 3s linear infinite" }}>
            ''Teknoloji ile geleceğe...''
          </span>

          <ul className="hidden md:flex items-center gap-0 flex-1 justify-center h-full">
            {navItems.map((item, i) => (
              <li key={item.label} className="flex items-center h-full">
                {i > 0 && <span className="w-px h-6 bg-zinc-200 mx-1" />}
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-4 h-10 rounded-lg transition-colors duration-150 hover:bg-[#FF6900] text-sm font-medium text-zinc-700 hover:text-white"
                >
                  <item.icon size={16} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center relative">
            <span className="w-px h-6 bg-zinc-200 mx-1" />
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-4 h-10 rounded-lg transition-colors duration-150 hover:bg-[#FF6900] text-sm font-medium text-zinc-700 hover:text-white"
            >
              <Globe size={16} />
              {currentLang}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 w-28 bg-white rounded-lg shadow-lg border border-zinc-100 py-1 z-50">
                <button
                  onClick={() => {
                    setCurrentLang("TR");
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 hover:bg-[#FF6900] ${currentLang === "TR"
                    ? "font-medium text-zinc-800"
                    : "text-zinc-500"
                    }`}
                >
                  Türkçe
                </button>
                <button
                  onClick={() => {
                    setCurrentLang("EN");
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 hover:bg-[#FF6900] ${currentLang === "EN"
                    ? "font-medium text-zinc-800"
                    : "text-zinc-500"
                    }`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="md:hidden cursor-pointer pointer-events-auto touch-manipulation"
            onPointerDown={(e) => { e.preventDefault(); setOpen(!open); }}
            aria-label="Menü"
          >
            {open ? <X size={24} className="pointer-events-none" /> : <Menu size={24} className="pointer-events-none" />}
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 md:hidden z-50 pointer-events-auto">
            <div className="absolute inset-0 bg-black/40" onPointerDown={() => setOpen(false)} />
            <div className="absolute top-0 left-0 h-full w-72 bg-white shadow-xl">
              <div className="flex items-center justify-between px-6 h-[90px] border-b border-zinc-100">
                <span className="text-xl font-bold tracking-tight text-zinc-800">
                  Innovia Plus
                </span>
                <button onPointerDown={() => setOpen(false)} aria-label="Kapat">
                  <X size={22} />
                </button>
              </div>
              <ul className="flex flex-col gap-1 px-4 pt-4">
                {navItems.map((item, i) => (
                  <li key={item.label}>
                    {i > 0 && <hr className="border-t border-zinc-100 my-1" />}
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 hover:bg-[#FF6900] text-sm font-medium text-zinc-700 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </a>
                  </li>
                ))}
                <hr className="border-t border-zinc-100 my-1" />
                <div>
                  <button
                    onClick={() => setMobileLangOpen(!mobileLangOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-150 hover:bg-[#FF6900] text-sm font-medium text-zinc-700 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Globe size={18} />
                      {currentLang}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileLangOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {mobileLangOpen && (
                    <div className="ml-11 mt-1 space-y-1">
                      <button
                        onClick={() => {
                          setCurrentLang("TR");
                          setMobileLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors duration-150 hover:bg-[#FF6900] ${currentLang === "TR"
                          ? "font-medium text-zinc-800"
                          : "text-zinc-500"
                          }`}
                      >
                        Türkçe
                      </button>
                      <button
                        onClick={() => {
                          setCurrentLang("EN");
                          setMobileLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors duration-150 hover:bg-[#FF6900] ${currentLang === "EN"
                          ? "font-medium text-zinc-800"
                          : "text-zinc-500"
                          }`}
                      >
                        English
                      </button>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { NAV_ITEMS, NEWS_TICKER } from '../data/siteData';

/* Universal link handler: uses React Router Link for internal routes */
function SmartLink({ href, className, children, onClick }) {
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href || '#'} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

/* News Ticker – animated scrolling headlines */
function NewsTicker({ items }) {
  const [idx, setIdx] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % items.length), 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="flex items-center gap-3 overflow-hidden flex-1 min-w-0">
      <span className="flex-shrink-0 bg-red-700 text-white px-2 py-0.5 font-bold tracking-wider uppercase text-[10px]">
        Trending
      </span>
      <div className="relative h-5 flex-1 overflow-hidden min-w-0">
        {items.map((text, i) => (
          <SmartLink
            key={i}
            href="/#dispatches"
            className={`absolute inset-0 flex items-center text-xs truncate transition-all duration-500 hover:text-white ${
              i === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {text}
          </SmartLink>
        ))}
      </div>
    </div>
  );
}

/* Dropdown with multi-column and nested sub-menu support */
function DropdownMenu({ item, open, onToggle }) {
  const [hoveredChild, setHoveredChild] = useState(null);

  const isBooks = item.label === 'Books';
  const isSDGs = item.label === 'SDGs Program';

  return (
    <div
      className="relative"
      onMouseEnter={onToggle}
      onMouseLeave={() => {
        onToggle();
        setHoveredChild(null);
      }}
    >
      <SmartLink
        href={item.href || '#'}
        className="nav-link py-2 flex items-center gap-1 text-xs font-semibold text-stone-700 hover:text-red-700 uppercase tracking-wide transition-colors"
      >
        <span>{item.label}</span>
        <svg
          width="9"
          height="9"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-200 ${open ? 'rotate-180 text-red-700' : ''}`}
        >
          <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SmartLink>

      {open && (
        <div
          className={`absolute top-full left-0 mt-0.5 bg-stone-900 border border-stone-800 shadow-2xl z-50 text-stone-200 ${
            isSDGs
              ? 'w-[480px] grid grid-cols-2 p-2'
              : isBooks
              ? 'w-64 grid grid-cols-3 gap-1 p-2.5 text-center'
              : 'w-64 py-1.5'
          }`}
        >
          {isBooks ? (
            item.children.map((child) => (
              <SmartLink
                key={child.label}
                href={child.href || '/books'}
                className="px-2 py-2 text-xs font-mono font-medium rounded hover:bg-stone-800 hover:text-white transition-colors border border-stone-800/80 hover:border-red-600/50"
              >
                {child.label}
              </SmartLink>
            ))
          ) : (
            item.children.map((child) => (
              <div
                key={child.label}
                className="relative"
                onMouseEnter={() => child.children && setHoveredChild(child.label)}
                onMouseLeave={() => setHoveredChild(null)}
              >
                <SmartLink
                  href={child.href || '#'}
                  className="flex items-center justify-between px-3.5 py-2 text-xs hover:bg-stone-800 hover:text-white transition-colors rounded"
                >
                  <span className="truncate">{child.label}</span>
                  {child.children && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-1 flex-shrink-0">
                      <path d="M2 1l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </SmartLink>

                {/* Nested sub-menu (for Intern) */}
                {child.children && hoveredChild === child.label && (
                  <div className="absolute left-full top-0 w-60 bg-stone-900 border border-stone-800 shadow-2xl z-50 py-1.5 ml-0.5">
                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-stone-400 border-b border-stone-800 mb-1">
                      Program {child.label}
                    </div>
                    {child.children.map((sub) => (
                      <SmartLink
                        key={sub.label}
                        href={sub.href || '#'}
                        className="block px-3.5 py-2 text-xs text-stone-300 hover:bg-stone-800 hover:text-white transition-colors"
                      >
                        {sub.label}
                      </SmartLink>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ scrolled }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <>
      {/* ── Top Bar with News Ticker & Utilities ────────────── */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 md:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <NewsTicker items={NEWS_TICKER} />

          <div className="hidden lg:flex items-center gap-5 flex-shrink-0 font-mono text-[11px] text-stone-400">
            <span>Banda Aceh · 05°33'N 95°19'E</span>
            <span className="text-stone-600">|</span>
            <SmartLink href="/books" className="hover:text-white transition-colors">ISBN &amp; Publikasi</SmartLink>
            <SmartLink href="/login" className="hover:text-white transition-colors">Detail Dokumen Online</SmartLink>
          </div>
        </div>
      </div>

      {/* ── Main Sticky Header ─────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md border-b border-stone-200' : 'border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4 sm:gap-6">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img
              src={logoImg}
              alt="Natural Aceh Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-tight group-hover:text-red-700 transition-colors">
                Natural Aceh
              </span>
              <span className="text-[10px] text-stone-500 tracking-tight hidden sm:inline">
                Konservasi &amp; Pemberdayaan Berkelanjutan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {NAV_ITEMS.map((item, i) => (
              <DropdownMenu
                key={item.label}
                item={item}
                open={openMenu === i}
                onToggle={() => setOpenMenu(openMenu === i ? null : i)}
              />
            ))}
          </nav>

          {/* Mobile Hamburger Toggle Button (visible only on mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              className="p-2 text-stone-800 hover:text-red-700 focus:outline-none rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Buka menu navigasi"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l14 14M18 4L4 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5h16M3 11h16M3 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Accordion ───────────────────────────── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label} className="border-b border-stone-100">
                  <div className="flex items-center justify-between px-5 py-3 hover:bg-stone-50 transition-colors">
                    <SmartLink
                      href={item.href || '#'}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs font-bold text-stone-800 uppercase tracking-wide hover:text-red-700"
                    >
                      {item.label}
                    </SmartLink>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      className="p-1.5 text-stone-400 hover:text-stone-700"
                      aria-label="Toggle submenu"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-red-700' : ''}`}
                      >
                        <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="bg-stone-50 py-2 px-3 border-t border-stone-100 space-y-1">
                      {item.label === 'Books' ? (
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {item.children.map((child) => (
                            <SmartLink
                              key={child.label}
                              href={child.href || '/books'}
                              onClick={() => setMobileOpen(false)}
                              className="text-center py-1.5 px-2 text-xs font-mono bg-white border border-stone-200 rounded text-stone-700 hover:bg-red-700 hover:text-white transition-colors"
                            >
                              {child.label}
                            </SmartLink>
                          ))}
                        </div>
                      ) : (
                        item.children.map((child) => (
                          <div key={child.label} className="py-1">
                            <SmartLink
                              href={child.href || '#'}
                              onClick={() => !child.children && setMobileOpen(false)}
                              className="block px-4 py-1.5 text-xs font-medium text-stone-700 hover:text-red-700"
                            >
                              • {child.label}
                            </SmartLink>
                            {child.children && (
                              <div className="pl-6 space-y-1 border-l-2 border-red-700 ml-4 my-1">
                                {child.children.map((sub) => (
                                  <SmartLink
                                    key={sub.label}
                                    href={sub.href || '#'}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-2 py-1 text-[11px] text-stone-500 hover:text-stone-900"
                                  >
                                    - {sub.label}
                                  </SmartLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="p-4 bg-stone-100/60 text-center">
              <div className="text-[11px] text-stone-500 font-mono">
                Banda Aceh · naturalaceh.org
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

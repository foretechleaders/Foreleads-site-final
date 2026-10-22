import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-[#CFB53B]/40">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-5 py-5 px-6">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3" aria-label="Foreleads Leadership Consulting LLC home">
          <img src="/foreleads-gold-mark-v1.png" alt="" aria-hidden="true" width="56" height="56" className="h-14 w-14 shrink-0 object-contain" />
          <span className="tracking-[0.15em] font-semibold text-lg">FORELEADS<span className="block text-[10px] tracking-[0.15em] font-normal">LEADERSHIP CONSULTING LLC</span></span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/leadership-articles">Articles</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

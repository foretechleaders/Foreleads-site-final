import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#18345e] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/foreleads_logo.png"
            alt="Foreleads Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="flex gap-6 text-white font-medium">
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

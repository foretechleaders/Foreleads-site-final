import React from "react";

// ⭐ NEW — Wrapped SVG logo import
import WrappedLogo from "../assets/foreleads_logo_wrapped.svg";

const ITLeadershipEdge = () => {
  const stripeUrl = "https://buy.stripe.com/cNi4gB4Vx31Wcu25VTdQQ04";

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617_60%)]" />
      </div>

      <div className="relative z-10">

        {/* Header Logo */}
        <header className="w-full px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={WrappedLogo}
              alt="Foreleads Leadership Consulting LLC"
              className="h-10 sm:h-12 w-auto"
            />
          </div>
        </header>

        {/* MAIN CONTENT... unchanged below */}

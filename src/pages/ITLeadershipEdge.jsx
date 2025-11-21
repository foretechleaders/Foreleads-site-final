import React from "react";
import WhiteOutlineLogo from "../assets/foreleads_logo_white_outline.svg"; // SVG LOGO

const ITLeadershipEdge = () => {
  const stripeUrl = "https://buy.stripe.com/cNi4gB4Vx31Wcu25VTdQQ04";

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Header Logo */}
        <header className="w-full px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={WhiteOutlineLogo}
              alt="Foreleads Leadership Consulting LLC"
              className="h-10 sm:h-12 w-auto"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 sm:px-10 pt-10 pb-16 flex justify-center">
          <div className="w-full max-w-5xl">

            {/* HERO SECTION */}
            <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

              {/* LEFT SIDE */}
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase mb-2">
                  Live Workshop via Zoom
                </p>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                  The IT Leadership Edge
                </h1>

                <p className="text-lg text-slate-200 mb-4">
                  <span className="font-semibold">
                    Skills Every Technical Leader Must Have
                  </span>
                </p>

                <p className="text-sm sm:text-base text-blue-100 mb-4">
                  <span className="font-semibold">Wednesday, December 17, 2025</span>{" "}
                  · 7:00 PM – 8:15 PM ET · $25
                </p>

                <p className="text-slate-200 mb-6">
                  This focused 75-minute session is designed for IT professionals,
                  supervisors, and managers who want to enhance their leadership
                  presence, communication, clarity, and strategic thinking.
                </p>

                {/* CTA BUTTON */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-lg font-semibold shadow-lg shadow-blue-900/40 transition"
                  >
                    Register Now – $25
                  </a>

                  <p className="text-xs sm:text-sm text-slate-300">
                    Secure checkout via Stripe. Zoom link emailed immediately.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE — DETAILS CARD */}
              <div>
                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-xl backdrop-blur">
                  <h2 className="text-xl font-semibold mb-3 text-white">
                    What You’ll Learn
                  </h2>

                  <ul className="space-y-2 text-sm text-slate-200 mb-4">
                    <li>• The shift from technical expert to leader</li>
                    <li>• Communicating with executives & non-technical audiences</li>
                    <li>• Creating clarity under complexity</li>
                    <li>• Frameworks for prioritization & decisions</li>
                    <li>• Influencing without formal authority</li>
                  </ul>

                  <h3 className="text-sm font-semibold text-blue-200 mb-1">
                    Who Should Attend
                  </h3>
                  <ul className="text-sm text-slate-200 mb-4">
                    <li>• IT managers & supervisors</li>
                    <li>• Senior engineers or architects</li>
                    <li>• Technical PMs/PPMs</li>
                    <li>• High-potential rising IT leaders</li>
                  </ul>

                  <h3 className="text-sm font-semibold text-blue-200 mb-1">
                    Format
                  </h3>

                  <p className="text-sm text-slate-200 mb-1">
                    • 75 minutes on Zoom<br />
                    • Interactive & practical<br />
                    • Lessons from high-stakes federal leadership environments
                  </p>
                </div>
              </div>
            </section>

            {/* ABOUT FACILITATOR */}
            <section className="mt-14 grid md:grid-cols-[1.1fr_1.2fr] gap-10">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">
                  About Your Facilitator
                </h2>

                <p className="text-sm text-slate-200 mb-3">
                  <span className="font-semibold">Dr. Anthony T. Foreman</span> is an
                  IT executive & leadership consultant with 25+ years of experience
                  leading mission-critical federal technology organizations.
                </p>

                <p className="text-sm text-slate-200 mb-3">
                  He has overseen enterprise network and infrastructure operations at
                  the <span className="font-semibold">White House</span>, the{" "}
                  <span className="font-semibold">Library of Congress</span>, the
                  Securities & Exchange Commission, and other top federal agencies.
                </p>

                <p className="text-sm text-slate-200 mb-3">
                  Anthony blends deep IT expertise with a doctorate in{" "}
                  <span className="font-semibold">Organizational Leadership</span> to
                  help technical leaders sharpen influence, clarity, and outcomes.
                </p>
              </div>

              {/* FAQ */}
              <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Frequently Asked Questions
                </h3>

                <p className="mb-2">
                  <span className="font-semibold">Is this recorded?</span><br />
                  Yes — all registrants receive replay access.
                </p>

                <p className="mb-2">
                  <span className="font-semibold">Requirements?</span><br />
                  Internet, Zoom, and something to take notes with.
                </p>

                <p className="mb-2">
                  <span className="font-semibold">Live Q&A?</span><br />
                  Absolutely — bring your questions & leadership scenarios.
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  For group or enterprise booking, contact Foreleads Leadership Consulting.
                </p>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="mt-14 mb-10 text-center">
              <h2 className="text-2xl font-semibold text-white mb-3">
                Ready to sharpen your IT leadership edge?
              </h2>

              <p className="text-sm text-slate-200 mb-5">
                Equip yourself with practical tools to lead with clarity in complex,
                technical environments.
              </p>

              <a
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-lg font-semibold shadow-lg shadow-blue-900/40 transition"
              >
                Register Now – $25
              </a>

              <p className="text-xs text-slate-400 mt-3">
                Secure Stripe checkout · Zoom link delivered instantly
              </p>
            </section>

          </div>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Foreleads Leadership Consulting LLC. All rights reserved.
        </footer>

      </div>
    </div>
  );
};

export default ITLeadershipEdge;

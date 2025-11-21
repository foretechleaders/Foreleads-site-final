import React from "react";
import WrappedLogo from "../assets/foreleads_logo_wrapped.svg";

const ITLeadershipEdge = () => {
  const stripeUrl = "https://buy.stripe.com/cNi4gB4Vx31Wcu25VTdQQ04";

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617_60%)]" />
      </div>

      <div className="relative z-10">

        {/* HEADER */}
        <header className="w-full px-6 sm:px-10 pt-6 flex items-center justify-between">
          <img
            src={WrappedLogo}
            alt="Foreleads Leadership Consulting LLC"
            className="h-10 sm:h-12 w-auto"
          />
        </header>

        {/* MAIN CONTENT */}
        <main className="px-6 sm:px-10 pt-10 pb-16 flex justify-center">
          <div className="w-full max-w-5xl">

            {/* HERO SECTION */}
            <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

              {/* LEFT SIDE */}
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase mb-2">
                  Live Workshop via Zoom
                </p>

                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                  The IT Leadership Edge
                </h1>

                <p className="text-lg text-slate-200 mb-4">
                  <strong>Skills Every Technical Leader Must Have</strong>
                </p>

                <p className="text-sm sm:text-base text-blue-100 mb-4">
                  <strong>Wednesday, December 17, 2025</strong> · 7:00 PM – 8:15 PM ET · $25
                </p>

                <p className="text-slate-200 mb-6">
                  A focused 75-minute session for IT professionals who want to
                  strengthen communication, leadership presence, and decision-making.
                </p>

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

              {/* RIGHT SIDE: WHAT YOU’LL LEARN */}
              <div>
                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-xl backdrop-blur">
                  <h2 className="text-xl font-semibold mb-3">What You’ll Learn</h2>
                  <ul className="space-y-2 text-sm text-slate-200 mb-4">
                    <li>• Transitioning from technical expert to leader</li>
                    <li>• Communicating with executives & non-technical audiences</li>
                    <li>• Creating clarity under complexity</li>
                    <li>• Prioritization & structured decision-making</li>
                    <li>• Influencing without authority</li>
                  </ul>

                  <h3 className="text-sm font-semibold text-blue-200 mb-1">Who Should Attend</h3>
                  <ul className="space-y-1 text-sm text-slate-200 mb-4">
                    <li>• IT managers & supervisors</li>
                    <li>• Senior engineers & architects</li>
                    <li>• Technical PMs</li>
                    <li>• Rising high-potential leaders</li>
                  </ul>

                  <h3 className="text-sm font-semibold text-blue-200 mb-1">Format</h3>
                  <p className="text-sm text-slate-200">
                    • 75 minutes on Zoom<br/>
                    • Interactive format<br/>
                    • Practical leadership tools from high-stakes environments
                  </p>
                </div>
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="mt-14 grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-semibold mb-3">About Your Facilitator</h2>

                <p className="text-sm text-slate-200 mb-3">
                  <strong>Dr. Anthony T. Foreman</strong> is an IT executive with 25+ years
                  of experience leading enterprise technology teams across the White House,
                  Library of Congress, SEC, and other federal agencies.
                </p>

                <p className="text-sm text-slate-200 mb-3">
                  He blends technical depth with a doctorate in Organizational Leadership to
                  help leaders sharpen influence, communication, and clarity under complexity.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 text-sm text-slate-200">
                <h3 className="text-lg font-semibold mb-3">Frequently Asked Questions</h3>

                <p className="mb-2"><strong>Is it recorded?</strong><br/>Yes! Replay included.</p>
                <p className="mb-2"><strong>Requirements?</strong><br/>Zoom + internet.</p>
                <p className="mb-2"><strong>Live Q&A?</strong><br/>Yes — bring questions.</p>

                <p className="text-xs text-slate-400 mt-3">
                  For group/enterprise booking, contact Foreleads Leadership Consulting.
                </p>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="mt-14 mb-10 text-center">
              <h2 className="text-2xl font-semibold mb-3">
                Ready to sharpen your IT leadership edge?
              </h2>

              <p className="text-sm text-slate-300 mb-5">
                Equip yourself with practical frameworks to lead with clarity in complex environments.
              </p>

              <a
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-lg font-semibold shadow-lg shadow-blue-900/40 transition"
              >
                Register Now – $25
              </a>
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

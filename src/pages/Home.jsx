import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-[#18345e] text-white text-center py-20">
        <img
          src="/foreleads_logo.png"
          alt="Foreleads Leadership Consulting LLC"
          className="mx-auto h-36 w-auto mb-6"
        />

        <p className="max-w-2xl mx-auto text-lg">
          Empowering leaders with clarity, influence, and execution in mission-critical environments.
        </p>

        <Link
          to="/programs"
          className="inline-block bg-white text-[#18345e] font-semibold px-6 py-3 rounded-md mt-6 shadow hover:bg-gray-200 transition"
        >
          Explore Programs
        </Link>
      </section>

      {/* AFFILIATIONS */}
      <section className="text-center py-16">
        <h2 className="text-xl font-semibold mb-6">
          Professional Networks & Affiliations
        </h2>

        <div className="flex justify-center">
          <img
            src="/d9_network_badge.png"
            alt="D9 Network Badge"
            className="h-40 w-auto"
          />
        </div>
        <p className="mt-2 text-gray-600">Proud Member of The D9 Network</p>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";

const programs = [
  { title: "Leadership Workshops", description: "Practical sessions designed for technical and emerging leaders.", to: "/programs" },
  { title: "Cohort-Based Programs", description: "Leadership intensives for transformation and growth.", to: "/programs" },
  { title: "Executive Coaching", description: "Personalized development for senior and emerging leaders.", to: "/contact" },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <section className="container mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center px-6 py-12 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-5">Purpose · People · Transformation</p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-[#102c48] mb-6">
            Lead with Purpose.<br />Transform Organizations.<br />Develop People.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-7">
            Helping leaders communicate with clarity, influence with purpose, and make decisions that drive mission-critical outcomes.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/programs" className="inline-block bg-[#102c48] text-white px-6 py-3 rounded hover:bg-[#18345e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Explore Programs →</Link>
            <Link to="/about" className="text-[#102c48] py-3 hover:underline">Meet Dr. Foreman →</Link>
          </div>
        </div>
        <figure className="bg-[#f1f5f7] p-4 pb-0 rounded-tl-[110px] rounded-r-lg rounded-bl-lg w-full max-w-md mx-auto">
          <img src="/dr_foreman_headshot.JPG" alt="Dr. Anthony T. Foreman" className="w-full aspect-[1/1.1] object-cover object-top rounded-tl-[95px] rounded-tr" />
          <figcaption className="py-4 px-1 text-[#102c48]">Dr. Anthony T. Foreman<span className="block text-sm text-gray-600 mt-1">Veteran · IT Executive · Leadership Strategist</span></figcaption>
        </figure>
      </section>
      <section className="bg-[#f1f5f7] py-12">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-3">Leadership programs & development</p>
          <h2 className="font-serif text-3xl text-[#102c48] mb-8">Practical leadership. Lasting impact.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map(program => (
              <article key={program.title} className="border-t-2 border-gray-300 pt-5">
                <h3 className="text-lg font-semibold text-[#102c48] mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                <Link to={program.to} className="text-[#102c48] hover:underline" aria-label={`Learn more about ${program.title}`}>Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center px-6 py-12">
        <h2 className="text-xl font-semibold text-[#102c48] mb-4">Professional Networks & Affiliations</h2>
        <a href="https://www.thed9network.com/united-states/virginia-beach/professional-services/foreleads-leadership-consulting-llc?from=badge" className="text-gray-600 underline underline-offset-4">Proud Member of The D9 Network</a>
      </section>
    </div>
  );
}

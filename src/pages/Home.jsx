import { Link } from "react-router-dom";

const programs = [
  { title: "Leadership Workshops", description: "Practical sessions designed for technical and emerging leaders.", to: "/programs" },
  { title: "Cohort-Based Programs", description: "Leadership intensives for transformation and growth.", to: "/programs" },
  { title: "Executive Coaching", description: "Personalized development for senior and emerging leaders.", to: "/contact" },
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      <section className="container mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center px-6 py-12 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white mb-5">Purpose · People · Transformation</p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-white mb-6">
            Lead with Purpose.<br />Transform Organizations.<br />Develop People.
          </h1>
          <p className="text-lg text-white leading-relaxed max-w-xl mb-7">
            Helping leaders communicate with clarity, influence with purpose, and make decisions that drive mission-critical outcomes.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/programs" className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-[#19170f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Explore Programs →</Link>
            <Link to="/about" className="text-white py-3 hover:underline">Meet Dr. Foreman →</Link>
          </div>
        </div>
        <figure className="bg-black p-4 pb-0 rounded-tl-[110px] rounded-r-lg rounded-bl-lg w-full max-w-md mx-auto">
          <img src="/dr_foreman_headshot.JPG" alt="Dr. Anthony T. Foreman" className="w-full aspect-[1/1.1] object-cover object-top rounded-tl-[95px] rounded-tr" />
          <figcaption className="py-4 px-1 text-white">Dr. Anthony T. Foreman<span className="block text-sm text-white mt-1">Veteran · IT Executive · Leadership Strategist</span></figcaption>
        </figure>
      </section>
      <section className="bg-black py-12">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white mb-3">Leadership programs & development</p>
          <h2 className="font-serif text-3xl text-white mb-8">Practical leadership. Lasting impact.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map(program => (
              <article key={program.title} className="border-t-2 border-[#CFB53B]/40 pt-5">
                <h3 className="text-lg font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-white leading-relaxed mb-4">{program.description}</p>
                <Link to={program.to} className="text-white hover:underline" aria-label={`Learn more about ${program.title}`}>Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center px-6 py-12">
        <h2 className="text-xl font-semibold text-white mb-4">Professional Networks & Affiliations</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-8">
          <a href="https://www.thed9network.com/united-states/virginia-beach/professional-services/foreleads-leadership-consulting-llc?from=badge" className="text-white underline underline-offset-4">Proud Member of The D9 Network</a>
          <a href="https://www.isaca.org/membership" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4">
            <span>ISACA professional Member</span>
          </a>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import MainNav from "@/components/mainNav";
import Header from "@/components/header";
import ProfHeader from "@/components/profHeader";

const pillars = [
  { number: "01", title: "The law", text: "My path into the legal profession, the work I care about, and lessons gathered along the way." },
  { number: "02", title: "The people", text: "The mentors, communities, and everyday acts of care that make meaningful work possible." },
  { number: "03", title: "The becoming", text: "Building a thoughtful career while staying curious about all the life happening around it." },
];

export default function Home() {
  return <>
    <Header home />
    <MainNav />
    <main className="page-shell">
      <ProfHeader />
      <section className="welcome-section">
        <div className="section-index"><span>01</span><i /> A NOTE FROM FAITH</div>
        <div className="welcome-grid">
          <h2>Making room for<br /><em>purpose & possibility.</em></h2>
          <div className="welcome-copy"><p className="welcome-lead">Hello, I’m Faith — a law professional, lifelong learner, and believer that a meaningful life is made with intention.</p><p>This is my little corner of the internet: a place for the work I care about, the things I’m learning, and all the moments in between. I’m glad you found your way here.</p><a className="underline-link" href="mailto:hello@example.com">Say hello <span>↗</span></a></div>
        </div>
      </section>
      <section className="pillars-section">
        <div className="section-heading"><div><span className="eyebrow">A FEW THINGS CLOSE TO HEART</span><h2>What I’m making space for</h2></div><span className="hand-note">Still becoming, always.</span></div>
        <div className="pillars-grid">{pillars.map((item) => <article className="pillar" key={item.number}><span className="pillar-num">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="explore-section"><div className="explore-intro"><span className="eyebrow">FOLLOW A THREAD</span><h2>There’s more<br />to the story.</h2><p>Take a closer look at the things I’m learning, thinking about, and living through.</p></div><div className="explore-links"><Link href="/proffession/workissues"><span className="explore-count">01</span><span><b>Work & perspective</b><small>On the legal profession and showing up well</small></span><span className="explore-arrow">↗</span></Link><Link href="/lifestyle"><span className="explore-count">02</span><span><b>Life lately</b><small>Little things, places, and rituals worth keeping</small></span><span className="explore-arrow">↗</span></Link><Link href="/blog"><span className="explore-count">03</span><span><b>The journal</b><small>Ideas and stories from where I am</small></span><span className="explore-arrow">↗</span></Link></div></section>
      <footer className="site-footer"><span>© {new Date().getFullYear()} FAITH KEPCHEMBOI</span><span>A little corner of the internet <b>✳</b></span></footer>
    </main>
  </>;
}

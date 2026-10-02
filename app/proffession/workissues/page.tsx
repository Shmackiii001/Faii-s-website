import Link from "next/link";
import Header from "@/components/header";
import MainNav from "@/components/mainNav";
import ProfHeader from "@/components/profHeader";

const values = [
  { title: "Stay curious", text: "Each brief, conversation, and challenge leaves something to learn. I want to stay open, ask better questions, and keep building my understanding." },
  { title: "Lead with care", text: "The law touches real lives. I hope my work can be clear, considered, and grounded in respect for the people behind every issue." },
  { title: "Make room", text: "A stronger profession depends on whose voices are heard. I care about making space for more perspectives and paths into the work." },
];

export default function WorkIssuesPage() {
  return <><Header home /><MainNav /><main className="page-shell"><ProfHeader /><section className="welcome-section"><div className="section-index"><span>02</span><i /> WORK & PERSPECTIVE</div><div className="welcome-grid"><h2>The practice of law.<br /><em>The people it touches.</em></h2><div className="welcome-copy"><p className="welcome-lead">The law is shaped by more than rules. It is shaped by people, institutions, and the choices we make every day.</p><p>This page is a space for my reflections on the profession and the issues that matter to me. I’ll keep adding to it as my experience grows.</p><Link className="underline-link" href="/blog">Read more in the journal <span>↗</span></Link></div></div></section><section className="pillars-section"><div className="section-heading"><div><span className="eyebrow">HOW I HOPE TO SHOW UP</span><h2>A few guiding ideas</h2></div><span className="hand-note">Principles I’m still practicing.</span></div><div className="pillars-grid">{values.map((item, index) => <article className="pillar" key={item.title}><span className="pillar-num">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section><footer className="site-footer"><span>© {new Date().getFullYear()} FAITH KEPCHEMBOI</span><Link href="/">Back to introduction ↑</Link></footer></main></>;
}

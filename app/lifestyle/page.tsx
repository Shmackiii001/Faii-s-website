import Link from "next/link";
import Header from "@/components/header";
import MainNav from "@/components/mainNav";

const notes = [
  { symbol: "☼", tag: "RITUALS", title: "A softer start to the day", text: "A slower morning, a warm cup, a few quiet minutes before the day asks for anything. Little rituals that help me arrive as myself." },
  { symbol: "⌁", tag: "PLACES", title: "Finding wonder close to home", text: "A reminder that a change of scene doesn’t have to mean a long journey. Sometimes all it takes is a different street and time to notice." },
  { symbol: "✳", tag: "GROWING", title: "Leaving a little room", text: "Not everything needs a plan. I’m learning to leave space for surprises, changing my mind, and the parts of life still taking shape." },
];

export default function LifestylePage() {
  return <><Header lifestyle /><MainNav /><main className="page-shell inner-page"><div className="inner-intro"><span className="eyebrow">THE ORDINARY, MADE LOVELY</span><h2>Small things.<br /><em>Full heart.</em></h2><p>A scrapbook of the places, rituals, people, and discoveries I want to hold on to a little longer.</p></div><div className="entry-ribbon"><span>FIELD NOTES</span><span>01 — 03</span></div><div className="life-grid">{notes.map((note, index) => <article className={`life-card life-card-${index + 1}`} key={note.title}><div className="life-art"><span>{note.symbol}</span><small>{note.tag}</small><i>0{index + 1}</i></div><div className="life-card-body"><span className="eyebrow">{note.tag} · A NOTE TO SELF</span><h3>{note.title}</h3><p>{note.text}</p><span className="draft-tag">FIELD NOTE <b>↗</b></span></div></article>)}</div><section className="end-note"><span className="eyebrow">THANKS FOR BEING HERE</span><h2>Stay a while.<br /><em>Make yourself at home.</em></h2><Link href="/blog" className="pill-link">Read the journal <span>↗</span></Link></section><footer className="site-footer"><span>© {new Date().getFullYear()} FAITH KEPCHEMBOI</span><Link href="/">Back to the beginning ↑</Link></footer></main></>;
}

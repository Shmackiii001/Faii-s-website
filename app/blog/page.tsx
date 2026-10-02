import Link from "next/link";
import Header from "@/components/header";
import MainNav from "@/components/mainNav";

const articles = [
  { topic: "CAREER NOTES", title: "Finding your voice at the beginning of a career", intro: "There is so much to learn when you are just getting started. A few reflections on asking questions, staying open, and trusting the pace of your own growth." },
  { topic: "THE LAW", title: "The value of looking at the details", intro: "Good work often begins with careful listening. Notes on curiosity, preparation, and the small details that help us see the larger picture." },
  { topic: "PERSONAL ESSAY", title: "Ambition, with a little more balance", intro: "A reminder that building a meaningful life is a practice, not a race — and rest can be part of the work too." },
];

export default function BlogPage() {
  return <><Header blog /><MainNav /><main className="page-shell inner-page journal-page"><section className="journal-cover"><div className="cover-top"><span className="eyebrow">A PLACE FOR IDEAS</span><span>VOL. 01&nbsp; / &nbsp;NOTES FROM FAITH</span></div><div className="cover-copy"><h2>Thoughts from<br /><em>where I am.</em></h2><p>On the work, the learning, and the little things that stay with us. Notes from my journey, shared in the hope they might meet you somewhere on yours.</p></div><span className="cover-mark" aria-hidden="true">F<span>.</span></span><span className="cover-side" aria-hidden="true">FAITH K. · JOURNAL · NOTES ·</span></section><div className="entry-ribbon"><span>RECENT WRITING</span><span>03 ENTRIES</span></div><div className="writing-list">{articles.map((article, index) => <article className="writing-row" key={article.title}><span className="writing-index">0{index + 1}</span><div className="writing-content"><div className="writing-meta"><span>{article.topic}</span><span>NOTES FROM THE JOURNEY</span></div><h3>{article.title}</h3><p>{article.intro}</p><span className="draft-tag">JOURNAL ENTRY <b>↗</b></span></div><span className="writing-arrow">↗</span></article>)}</div><section className="end-note journal-end"><span className="eyebrow">THANK YOU FOR READING</span><h2>More stories are<br /><em>on their way.</em></h2><p>Have a thought or a topic you would like to see here?</p><a href="mailto:hello@example.com" className="pill-link">Get in touch <span>↗</span></a></section><footer className="site-footer"><span>© {new Date().getFullYear()} FAITH KEPCHEMBOI</span><Link href="/">Back to the beginning ↑</Link></footer></main></>;
}

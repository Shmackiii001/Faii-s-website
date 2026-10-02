type HeaderProps = { home?: boolean; lifestyle?: boolean; blog?: boolean };

const content = {
  home: { label: "LAW · LIFE · THE SPACE BETWEEN", title: "Faith Kepchemboi", subtitle: "A life of purpose, curiosity & becoming.", monogram: "F" },
  lifestyle: { label: "LIFE, IN LITTLE DETAILS", title: "Life lately", subtitle: "A living scrapbook of what makes a life feel full.", monogram: "L" },
  blog: { label: "THOUGHTS, GATHERED", title: "The journal", subtitle: "Notes from the work, the learning, the living.", monogram: "J" },
};

export default function Header({ home, lifestyle }: HeaderProps) {
  const page = home ? content.home : lifestyle ? content.lifestyle : content.blog;
  return <header className={`hero ${home ? "hero-home" : lifestyle ? "hero-life" : "hero-journal"}`}>
    <div className="hero-wrap">
      <div className="hero-wordmark"><span className="wordmark-star">✳</span> FK<span className="wordmark-dot">.</span></div>
      <div className="hero-text"><span className="hero-kicker">{page.label}</span><h1>{page.title}</h1><p>{page.subtitle}</p></div>
      {home ? <div className="hero-portrait"><div className="portrait-image" role="img" aria-label="Portrait of Faith Kepchemboi" /><span className="portrait-label">LAW · LIFE · PERSPECTIVE <i>✳</i></span></div> : <div className="hero-letter" aria-hidden="true">{page.monogram}</div>}
      <div className="hero-bottom-note"><span>PERSONAL PORTFOLIO</span><span>SCROLL TO EXPLORE ↓</span></div>
      <span className="hero-star" aria-hidden="true">✳</span>
    </div>
  </header>;
}

import Header from './Header'
import Footer from './Footer'
import HeroPos from '../assets/HeroPos.png'
import QR from '../assets/QR.jpeg'
import POS from '../assets/POS.JPG'
import './AboutPage.css'

const stats = [
  { value: '2,000+', label: 'Businesses served' },
  { value: '6 yrs', label: 'Building for retail' },
  { value: '24/7', label: 'Human support' },
  { value: '99.9%', label: 'Uptime, last 12 months' },
];

const values = [
  {
    tag: 'Clarity',
    title: 'Clarity over clutter',
    body: 'Every screen answers one question. We remove features nobody uses instead of adding more menus.',
  },
  {
    tag: 'Speed',
    title: 'Built for the counter',
    body: 'A busy Saturday is the real test. We design for fast keys, big targets and zero dead ends.',
  },
  {
    tag: 'Trust',
    title: 'Trust by default',
    body: 'Offline resilience, encrypted data and a full audit trail of who did what, and when.',
  },
  {
    tag: 'Growth',
    title: 'Grows without limits',
    body: 'One till today, fifty locations tomorrow — the same account, the same habits, no migration.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Founded in Accra',
    body: 'Four people, one counter, one shared frustration: retail software that was never built for the shop it runs in.',
  },
  {
    year: '2020',
    title: 'Offline-first release',
    body: 'After an outage cost a customer a full trading day, offline mode became the foundation of the product.',
  },
  {
    year: '2022',
    title: 'Inventory and reports',
    body: 'Stock tracking and the reporting suite shipped, taking TechX from a till to a full back office.',
  },
  {
    year: '2024',
    title: 'Multi-store and loyalty',
    body: 'Multi-location management and built-in loyalty tools launched as the customer base passed 2,000.',
  },
];

const team = [
  { initials: 'AO', name: 'Ama Owusu', role: 'Co-founder & CEO' },
  { initials: 'KM', name: 'Kwame Mensah', role: 'Co-founder & CTO' },
  { initials: 'FB', name: 'Fatima Bello', role: 'Head of Product' },
  { initials: 'YB', name: 'Yaw Boateng', role: 'Customer Success Lead' },
];

const AboutPage = () => {
    return (
      <>
        <title>About | TechX POS</title>
        <Header />

        <main className="aboutPage">
          <section className="aboutHero">
            <div className="aboutHeroCopy">
              <h1 className="aboutHeadline">Powerful Features. One Complete POS.</h1>
              <p className="aboutLede">
                Everything your business needs to sell, manage, monitor, and grow, organized in one intelligent platform. From the first transaction of the day to the final business report, every important operation is connected
              </p>
              <div className="aboutActions">
                <a className="btn btnPrimary" href="mailto:hello@techxmarket.com">Request a demo</a>
                <a className="btn btnGhost" href="#team">Meet the team</a>
              </div>
            </div>

            <figure className="aboutHeroMedia">
              <img src={HeroPos} alt="An image of a modern POS system" />
            </figure>
          </section>

          <section className="aboutStats">
            <dl className="aboutStatList">
              {stats.map(({ value, label }) => (
                <div className="aboutStat" key={label}>
                  <dt className="aboutStatLabel">{label}</dt>
                  <dd className="aboutStatValue">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="aboutSection">
            <div className="aboutBody">
              <div className="aboutIntro">
                <span className="eyebrow">About us</span>
                <h2 className="sectionTitle">Make every transaction simple.</h2>
              </div>

              <div className="aboutText">
                <p>Your checkout should help your team move quickly—not slow them down. Our POS interface is designed to make everyday transactions straightforward, efficient, and easy to understand.</p>
                <p>Inventory problems can affect your cash flow, customer experience, and profitability. Our inventory tools give you a clearer picture of what's happening with your products.</p>
              </div>
            </div>
          </section>

          <section className="aboutSection aboutSectionAlt" id="values">
            <header className="aboutSectionHead">
              <span className="eyebrow">What we believe</span>
              <h2 className="sectionTitle">Four principles behind every release.</h2>
            </header>

            <div className="aboutValues">
              {values.map(({ tag, title, body }) => (
                <article className="aboutValue" key={tag}>
                  <span className="aboutTag">{tag}</span>
                  <h3 className="aboutValueTitle">{title}</h3>
                  <p className="aboutValueText">{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="aboutSection">
            <header className="aboutSectionHead">
              <span className="eyebrow">See it in action</span>
              <h2 className="sectionTitle">Designed for the counter.<br/>Built for the back office.</h2>
            </header>

            <div className="aboutGrid">
              <figure className="aboutCard" id="ordering">
                <div className="aboutCardMedia">
                  <img src={QR} alt="QR code ordering system" />
                </div>
                <figcaption className="aboutCardBody">
                  <span className="aboutTag">Ordering</span>
                  <h3 className="aboutCardTitle">Scan. Order. Pay.</h3>
                  <p>Guests scan a QR code, build their order and pay from their own phone — no queue, no waiting.</p>
                </figcaption>
              </figure>

              <figure className="aboutCard aboutCardOffset" id="checkout">
                <div className="aboutCardMedia aboutCardMediaSquare">
                  <img src={POS} alt="TechX POS running on a tablet" />
                </div>
                <figcaption className="aboutCardBody">
                  <span className="aboutTag">Checkout</span>
                  <h3 className="aboutCardTitle">Every sale, one tap.</h3>
                  <p>Fast keys, offline mode and instant receipts keep the line moving, even on your busiest day.</p>
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="aboutSection aboutSectionAlt" id="journey">
            <header className="aboutSectionHead">
              <span className="eyebrow">Our journey</span>
              <h2 className="sectionTitle">From one counter to 2,000 businesses.</h2>
            </header>

            <ol className="aboutTimeline">
              {milestones.map(({ year, title, body }) => (
                <li className="aboutMilestone" key={year}>
                  <span className="aboutYear">{year}</span>
                  <div className="aboutMilestoneBody">
                    <h3 className="aboutMilestoneTitle">{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="aboutSection" id="team">
            <header className="aboutSectionHead">
              <span className="eyebrow">The team</span>
              <h2 className="sectionTitle">Small team, long support line.</h2>
            </header>

            <div className="aboutTeam">
              {team.map(({ initials, name, role }) => (
                <article className="aboutMember" key={name}>
                  <span className="aboutAvatar" aria-hidden="true">{initials}</span>
                  <h3 className="aboutMemberName">{name}</h3>
                  <p className="aboutMemberRole">{role}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="aboutCta" id="contact">
            <h2 className="aboutCtaTitle">Let’s talk about your counter.</h2>
            <p className="aboutCtaText">
              Tell us how you sell today and we’ll show you what changes on
              Monday morning.
            </p>
            <a className="btn btnLight" href="mailto:hello@techxmarket.com">Send a Dm →</a>
          </section>
        </main>

        <Footer />
      </>
    )
}

export default AboutPage

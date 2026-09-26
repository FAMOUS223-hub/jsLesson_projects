import {Link} from 'react-router'
import POS from "../assets/POS.JPG";
import Header from './Header'
import Footer from './Footer'
import "./Index.css";

const stats = [
  { value: '2,000+', label: 'Businesses served' },
  { value: '1.2M', label: 'Sales every month' },
  { value: '99.9%', label: 'Uptime, last 12 months' },
  { value: '24/7', label: 'Human support' },
];

const reasons = [
  {
    index: '01',
    title: 'Business Management',
    body: 'Our POS system combines sales, inventory, customer management and payment processing into one easy-to-use platform.',
  },
  {
    index: '02',
    title: 'Real-Time Insights',
    body: 'Monitor your business performance with detailed reports and dashboards that help you make informed decisions.',
  },
  {
    index: '03',
    title: 'Secure & Reliable',
    body: 'Protect your business data with advanced security features and reliable cloud storage.',
  },
  {
    index: '04',
    title: 'Scalable Solutions',
    body: 'Whether you’re a small business or a large enterprise, our system grows with your needs.',
  },
];

const features = [
  {
    tag: 'Checkout',
    title: 'Lightning-fast checkout',
    body: 'Keyboard-first workflows, offline mode and instant receipts keep the queue moving, even on your busiest Saturday.',
  },
  {
    tag: 'Inventory',
    title: 'Stock that counts itself',
    body: 'Every sale updates stock levels in real time, so what you see on screen is what is actually on the shelf.',
  },
  {
    tag: 'Reports',
    title: 'Numbers you can act on',
    body: 'Sales, margins, best sellers and slow movers, available for any day, till or product line.',
  },
  {
    tag: 'Offline',
    title: 'Works without internet',
    body: 'Keep selling through an outage. Sales sync automatically the moment your connection is back.',
  },
  {
    tag: 'Team',
    title: 'Roles and permissions',
    body: 'Give every member of staff exactly the access they need, from cashier to store manager.',
  },
  {
    tag: 'Loyalty',
    title: 'Customers come back',
    body: 'Built-in loyalty points and customer records turn one-time buyers into regulars.',
  },
];

const steps = [
  {
    step: 'Step one',
    title: 'Set up your catalogue',
    body: 'Import products, prices and categories in minutes — or start from a template and edit as you go.',
  },
  {
    step: 'Step two',
    title: 'Start selling anywhere',
    body: 'Use a tablet at the counter, a laptop at the till or a phone on the floor. One account, every device.',
  },
  {
    step: 'Step three',
    title: 'Act on the numbers',
    body: 'Close the day with a report that tells you what sold, what earned and what to reorder tomorrow.',
  },
];

const testimonials = [
  {
    quote: 'TechX replaced three separate systems with one. Our end-of-day closing went from forty minutes to about twelve.',
    name: 'Ama Owusu',
    role: 'Owner, Adonais Market — Accra',
  },
  {
    quote: 'The offline mode carried us through a three-hour outage without losing a single sale. That alone paid for the system.',
    name: 'Kwame Mensah',
    role: 'Manager, Lakeside Coffee — Accra',
  },
  {
    quote: 'The reports are clear enough that our accountant signs off without asking me a single question.',
    name: 'Fatima Bello',
    role: 'Founder, MedPlus Pharmacy — Kumasi',
  },
];

const plans = [
  {
    name: 'Starter',
    price: 'GH₵ 149',
    note: 'per month, per till',
    features: ['1 till, 1 user', 'Sales & receipts', 'Basic inventory', 'Email support'],
    cta: 'Start free trial',
    featured: false,
  },
  {
    name: 'Growth',
    price: 'GH₵ 349',
    note: 'per month, per till',
    features: ['Up to 5 tills', 'Full reporting suite', 'Loyalty & customers', 'Priority support'],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'annual agreement',
    features: ['Unlimited locations', 'Roles & permissions', 'API & custom reports', 'Dedicated manager'],
    cta: 'Talk to sales',
    featured: false,
  },
];

const benefits = [
  'Fast and accurate checkout process',
  'Automated inventory management',
  'Comprehensive sales reporting',
  'Cloud-based data synchronization',
  'Customer loyalty and rewards programs',
  'Customer loyalty and rewards programs',
  'Fast and accurate checkout process',
];

const faqs = [
  {
    q: 'Do I need a computer to use it?',
    a: 'No. TechX runs on any tablet, laptop or phone with a modern browser. Many counters run it on a tablet with a receipt printer and a barcode scanner.',
  },
  {
    q: 'What happens when the internet goes off?',
    a: 'Nothing stops. Sales keep working in offline mode and are stored on the device. As soon as the connection returns, everything syncs automatically.',
  },
  {
    q: 'Can I use it on more than one device?',
    a: 'Yes. Sign in on a counter tablet, a back-office laptop and a manager’s phone. Everything stays in sync because it all lives in the same account.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are selling within an afternoon. Import your product list, connect a printer and you are ready for the first customer.',
  },
  {
    q: 'Do you handle refunds, voids and split payments?',
    a: 'Yes. Refunds, voids, discounts, split payments and cash-back are all supported, and every adjustment is recorded with the staff member who made it.',
  },
];

const Index = () => {
  return (
    <>
      <title>TechX POS</title>
      <Header />

      <main className="home">
        <section className="homeHero">
          <div className="homeHeroCopy">
            <h1 className="homeHeadline">
              Smart Point of Sale Solutions for <span>Modern Businesses.</span>
            </h1>
            <p className="homeLede">
              Simplify your sales, manage inventory efficiently, and grow your
              business with our powerful POS system.
            </p>
            <div className="homeActions">
              <Link to="/about" className="btn btnPrimary">Get Started →</Link>
              <a className="btn btnGhost" href="#pricing">See pricing</a>
            </div>
          </div>

          <figure className="homeHeroMedia">
            <img src={POS} alt="TechX POS running on a tablet at a retail counter" />
          </figure>
        </section>

        <section className="homeStats">
          <dl className="homeStatList">
            {stats.map(({ value, label }) => (
              <div className="homeStat" key={label}>
                <dt className="homeStatLabel">{label}</dt>
                <dd className="homeStatValue">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="homeSection" id="why">
          <h2 className="sectionTitle homeSectionTitle">Why Choose Us?</h2>

          <div className="homeCards">
            {reasons.map(({ index, title, body }) => (
              <article className="homeCard" key={index}>
                <span className="homeCardIndex">{index}</span>
                <h3 className="homeCardTitle">{title}</h3>
                <p className="homeCardText">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="homeSection homeSectionAlt" id="features">
          <h2 className="sectionTitle homeSectionTitle">Everything in one system</h2>
          <p className="homeSectionLede">
            Six tools that normally need six different apps — designed to work
            together from day one.
          </p>

          <div className="homeFeatures">
            {features.map(({ tag, title, body }) => (
              <article className="homeFeature" key={tag}>
                <span className="homeTag">{tag}</span>
                <h3 className="homeFeatureTitle">{title}</h3>
                <p className="homeFeatureText">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="homeSection" id="how">
          <h2 className="sectionTitle homeSectionTitle">Up and running in an afternoon</h2>
          <p className="homeSectionLede">
            No consultants, no migration project. Three steps between your product
            list and your first customer.
          </p>

          <ol className="homeSteps">
            {steps.map(({ step, title, body }) => (
              <li className="homeStep" key={step}>
                <span className="homeStepLabel">{step}</span>
                <h3 className="homeStepTitle">{title}</h3>
                <p className="homeStepText">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="homeSection homeSectionAlt" id="benefits">
          <h2 className="sectionTitle homeSectionTitle">Featured Benefits</h2>

          <details className="homeDetails">
            <summary className="homeSummary">
              Our Featured Benefit
              <span className="homeChevron" aria-hidden="true" />
            </summary>

            <ul className="homeBenefitList">
              {benefits.map((benefit, i) => (
                <li className="homeBenefit" key={`${benefit}-${i}`}>{benefit}</li>
              ))}
            </ul>
          </details>
        </section>

        <section className="homeSection" id="reviews">
          <h2 className="sectionTitle homeSectionTitle">What owners say</h2>

          <div className="homeQuotes">
            {testimonials.map(({ quote, name, role }) => (
              <figure className="homeQuote" key={name}>
                <blockquote className="homeQuoteText">{quote}</blockquote>
                <figcaption className="homeQuoteMeta">
                  <span className="homeQuoteName">{name}</span>
                  <span className="homeQuoteRole">{role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="homeSection homeSectionAlt" id="pricing">
          <h2 className="sectionTitle homeSectionTitle">Simple, predictable pricing</h2>
          <p className="homeSectionLede">
            Start free for 14 days. Cancel whenever you like — your data stays
            exportable.
          </p>

          <div className="homePlans">
            {plans.map(({ name, price, note, features: planFeatures, cta, featured }) => (
              <article
                className={`homePlan${featured ? ' homePlanFeatured' : ''}`}
                key={name}
              >
                <h3 className="homePlanName">{name}</h3>
                <p className="homePlanPrice">
                  {price}
                  <span className="homePlanNote">{note}</span>
                </p>

                <ul className="homePlanFeatures">
                  {planFeatures.map((item) => (
                    <li className="homePlanFeature" key={item}>{item}</li>
                  ))}
                </ul>

                <a
                  className={`btn ${featured ? 'btnPrimary' : 'btnGhost'} homePlanCta`}
                  href="mailto:hello@techxmarket.com"
                >
                  {cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="homeSection" id="faq">
          <h2 className="sectionTitle homeSectionTitle">Questions, answered</h2>

          <div className="homeFaq">
            {faqs.map(({ q, a }) => (
              <details className="homeFaqItem" key={q}>
                <summary className="homeSummary">
                  {q}
                  <span className="homeChevron" aria-hidden="true" />
                </summary>
                <p className="homeFaqText">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="homeCta" id="contact">
          <h2 className="homeCtaTitle">Ready to Work Smart?</h2>
          <a className="btn btnLight" href="mailto:hello@techxmarket.com">Send a Dm →</a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;

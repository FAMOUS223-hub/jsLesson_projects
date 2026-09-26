import whatsapp from "../assets/whatsapp-fill (1).svg";
import linkedin from "../assets/linkedin-box-fill (1).svg";
import github from "../assets/github-fill.svg";
import mail from "../assets/mail-fill.svg";
import phone from "../assets/phone-fill (1).svg";
import pin from "../assets/map-pin-line.svg";
import './Footer.css'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/#why' },
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

const socials = [
  { icon: whatsapp, alt: 'WhatsApp', href: 'https://wa.me/233555555555' },
  { icon: linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com' },
  { icon: github, alt: 'GitHub', href: 'https://github.com' },
];

const contacts = [
  { icon: pin, text: 'Osu, Accra — Ghana', href: '/#contact' },
  { icon: mail, text: 'hello@techxmarket.com', href: 'mailto:hello@techxmarket.com' },
  { icon: phone, text: '+233 55 555 5555', href: 'tel:+233555555555' },
];

/* Icons are painted with a CSS mask, so a single `color` rule controls them
   no matter whether the source SVG is black, white or currentColor. */
const Icon = ({ src }) => (
  <span className="footerIcon" style={{ maskImage: `url("${src}")` }} aria-hidden="true" />
);

const Footer = () => {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <div className="myFooter">
          <section className="footerCol brandCol">
            <h2 className="brand">
              TechX<span>Market</span>
            </h2>
            <p className="tagline">
              Whether you run a retail store, restaurant, pharmacy, supermarket, or
              wholesale business, our POS solution helps you stay in control and
              maximize profits.
            </p>

            <ul className="icons">
              {socials.map(({ icon, alt, href }) => (
                <li key={alt}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={alt}>
                    <Icon src={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav className="footerCol" aria-label="Footer">
            <h3 className="colTitle">Navigation</h3>
            <ul className="navList">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footerCol">
            <h3 className="colTitle">Get in touch</h3>
            <ul className="contactList">
              {contacts.map(({ icon, text, href }) => (
                <li key={text}>
                  <a href={href}>
                    <Icon src={icon} />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="footerBottom">
        <div className="bottomInner">
          <p className="waterMark">
            &copy; {new Date().getFullYear()} TechX Market. All rights reserved.
          </p>
          <p className="credit">Built &amp; developed with &#9825; by Famous Tech</p>
          <ul className="legal">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

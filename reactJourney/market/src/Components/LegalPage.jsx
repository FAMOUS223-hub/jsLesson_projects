import Header from './Header'
import Footer from './Footer'
import './LegalPage.css'

const LegalPage = ({ title, updated, intro, sections = [] }) => {
    return (
        <>
            <title>{title} | TechX POS</title>
            <Header />

            <main className="legalPage">
                <header className="legalHead">
                    <span className="eyebrow">Legal</span>
                    <h1 className="legalTitle">{title}</h1>
                    <p className="legalUpdated">{updated}</p>
                    <p className="legalIntro">{intro}</p>
                </header>

                <div className="legalBody">
                    <nav className="legalToc" aria-label={`${title} contents`}>
                        <span className="legalTocTitle">On this page</span>
                        <ul className="legalTocList">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a className="legalTocLink" href={`#${section.id}`}>
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="legalSections">
                        {sections.map(({ id, title: sectionTitle, body }) => (
                            <section className="legalSection" id={id} key={id}>
                                <h2 className="legalSectionTitle">{sectionTitle}</h2>
                                {body.map((paragraph) => (
                                    <p className="legalText" key={paragraph}>{paragraph}</p>
                                ))}
                            </section>
                        ))}

                        <div className="legalFoot">
                            <a className="btn btnGhost" href="/">Back to home</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default LegalPage

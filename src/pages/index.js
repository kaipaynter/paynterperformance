import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import Directing from '../assets/images/Orange_Socks.jpg'
import TeachingAndTraining from '../assets/images/Filtered_Eggs.jpg'
import TalentManagement from '../assets/images/Red_dress.jpg'
import WorkplaceAndCareer from '../assets/images/Record_man.jpg'
import Programs from '../assets/images/Cloud_teacup.jpg'
import WhatsNew from '../assets/images/Spaghetti_paintbrush_bubbles.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Paynter Performance"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${Directing})` }}>
                            <header className="major">
                                <h3>Directing</h3>
                                <p>Film/TV & Theatre </p>
                            </header>
                            <Link to="https://beartigerproductions.com" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${TeachingAndTraining})` }}>
                            <header className="major">
                                <h3>Teaching & Training</h3>
                                <p>Performing Artists, Athletes, & Creatives</p>
                            </header>
                            <Link to="/teaching_and_training" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${TalentManagement})` }}>
                            <header className="major">
                                <h3>Talent Management</h3>
                                <p>Boutique Management Company</p>
                            </header>
                            <Link to="https://kapmgmt.paynterperformance.com" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${WorkplaceAndCareer})` }}>
                            <header className="major">
                                <h3>Workplace & Career</h3>
                                <p>Corporate Optimization & Strategy</p>
                            </header>
                            <Link to="/workplace_and_career" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${Programs})` }}>
                            <header className="major">
                                <h3>Programs</h3>
                                <p>One-Off Courses & Seasonal Offers</p>
                            </header>
                            <Link to="https://linktr.ee/paynterperformance" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${WhatsNew})` }}>
                            <header className="major">
                                <h3>What's new</h3>
                                <p>New and exciting updates</p>
                            </header>
                            <Link to="/whats_new" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Additional Resources</h2>
                            </header>
                            <p>Need more help? We got you covered.</p>
                            <ul className="actions">
                                <li><Link to="https://www.youtube.com/playlist?list=PLSRJurNadm4enwGT53-0xjEYLDpj7mV4p" target="_blank" rel="noreferrer" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
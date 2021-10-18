import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>
            Paynter Performance - Accent Classes, Cheap Acting Classes, &#38;
            Much More
          </title>
          <meta
            name="description"
            content="Paynter Performance - Come to us for American accent pronunciation of words, cheap acting classes, accent classes for actors, &#38; more. Also see Kai Paynter website and Bear Tiger Productions for other services."
          />
          <link rel="canonical" href="https://paynterperformance.com" />
        </Helmet>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about-me" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>About Me</h2>
                </header>
                <p>
                  Hi! I’m Kai, the performance coach.
                  <br />
                  My guess is that you need some help? Well, you’re in luck.
                  <br />
                  I’m pretty good with people and I’ve done a lot of things.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/about-me" className="button">
                      <strong>Learn More</strong>
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="imageIndexPage">
                <StaticImage
                  src="../assets/images/landing/biopicfullcropped.jpg"
                  alt="Bio Pic"
                  placeholder="blurred"
                />
              </span>
            </div>
          </section>
          <section id="services" className="main special">
            <header className="major custom">
              <h2>Services</h2>
            </header>
            <p>
              Looking for cheap acitng classes, celebrity acting coaches or
              accent class for actors, you are at the right place!
            </p>
            <p>We offer a wide variety of sersvices:</p>

            <ul className="features">
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/phone_2.png"
                    alt="Coaching"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Coaching</h3>
                <p>
                  Kai has coached some of the freshest faces on television &#38;
                  stage. Her work spans across most industries, with a specialty
                  in mental strength training for athletes, all facets of actor
                  training, and career growth for creatives.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/c.jpeg"
                    alt="Archetype Coaching"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Archetype Coaching</h3>
                <p>
                  Archetypes are universal, inborn models of people, behaviors,
                  or personalities that play a role in influencing human
                  behavior. They were introduced by the Swiss psychiatrist, Carl
                  Jung.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/career.jpg"
                    alt="Your Career"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Your Career</h3>
                <p>
                  At this time we are only working with existing
                  clients/referrals, however, please submit an inquiry and we
                  will do our best to accommodate. Thank you for your
                  understanding.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/secrets.png"
                    alt="Secrets of the Stars"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Secrets of the Stars</h3>
                <p>
                  Have you ever wondered… WHY that actor got the role over you?
                  Why THEM? Why not YOU? WHEN will it be you? WHAT do you have
                  to do?
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/american.jpg"
                    alt="General American Accent"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>General American Accent</h3>
                <p>
                  With locally made American films and self-taping now the norm,
                  it’s vital to have great American accents and great US
                  self-tapes. So learn American accent pronunciation of words
                  today!
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/services" className="button">
                    <strong>Learn More</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="whats-on" className="main special">
            <header className="major custom">
              <h2>What's On</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/whatson/img9605.jpg"
                    alt="Client Showcase"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Client Showcase</h3>
                <p>See what our clients are doing!</p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/instagramflag.jpg"
                    alt="Conversation Thursdays"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Conversation Thursdays</h3>
                <p>Chat with me LIVE every other Thursday!</p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/whatson/gracegealey.jpg"
                    alt="What They Say"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>What They Say</h3>
                <p>Don’t take our word for it, listen to our clients…</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/whats-on" className="button">
                    <strong>Learn More</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="contact" className="main special">
            <header className="major custom">
              <h2>Contact</h2>
            </header>
            <p>Get in touch with me</p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/contact" className="button">
                    <strong>Get Started</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
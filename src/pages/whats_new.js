import React from 'react'
import Layout from '../components/layout2'

const WhatsNew = (props) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <h1 className='align-center'>Videos</h1>
        <p className='align-center'>
          <iframe
            title="Gezel Bardossi Performs A Britney Spears Hit | The Ultimate Callback | The Voice Australia"
            src="https://www.youtube.com/embed/eowB-yVWKrc?si=KAglGHclPnhnHCug"
            width="640"
            height="360"
            frameborder="0"
            alt="Gezel Bardossi Performs A Britney Spears Hit | The Ultimate Callback | The Voice Australia"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>

        <h1 className='align-center'>Articles</h1>
        <p className='align-center b'>
          <a
            href='https://www.news.com.au/entertainment/tv/reality-tv/the-voice-coaches-baffled-by-12yearolds-performance/news-story/e6cd1f79854f8bed272558948fd7fccb'
            target="_blank"
            rel="noreferrer"
          >The Voice coaches baffled by 12-year-old&#39;s performance
          </a>
        </p>

      </section>
    </div>

  </Layout>
)

export default WhatsNew
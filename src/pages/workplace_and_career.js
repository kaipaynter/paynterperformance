import React from 'react'
import Layout from '../components/layout2'
import workplace_and_career from '../assets/images/Take_your_Training_V1_Lowercase.jpg'

const WorkplaceAndCareer = (props) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <img class="image fit"
          src={workplace_and_career}
          alt="Workplace and Career"
        />

      </section>
    </div>

  </Layout>
)

export default WorkplaceAndCareer
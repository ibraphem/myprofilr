import * as React from "react"
import { useRef } from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Portfolio from "../components/Portfolio"
import Resume from "../components/Resume"
import Seo from "../components/seo"
import Stat from "../components/Stat"
import Testimonials from "../components/Testimonials"
import { portfolioData, SkillsList } from "../data/StatsData"

const IndexPage = () => {

  const emailRef = useRef(null);

  return(
  <Layout>
    <Seo title="Home" />
    <Hero emailRef={emailRef}/>
    <Stat statsData={SkillsList} title="SOME OF THE THINGS I KNOW"/>
    <Resume/>
    <Testimonials/>
    <Portfolio data={portfolioData}/>
    <Email ref={emailRef}/> 
  </Layout>
  )
}

export default IndexPage

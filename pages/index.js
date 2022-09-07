import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero/Hero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Quote from '../components/Quote/Quote'
import HowWeDo from "../components/HowWeDo/HowWeDo";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Quote />
      <HowWeDo />
    </>
  )
}

export default index
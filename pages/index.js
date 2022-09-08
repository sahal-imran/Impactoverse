import Navbar from "../components/Headers/Navbar";
import Hero from "../components/Hero/Hero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Quote from '../components/Quote/Quote'
import HowWeDo from "../components/HowWeDo/HowWeDo";
import Purpose from '../components/Purpose/Purpose';
import Counter from '../components/Counter/Counter';
import Partners from '../components/Partners/Partners';
import Footer from "../components/Footer/Footer";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Quote />
      <HowWeDo />
      <Purpose />
      <Counter />
      <Partners />
      <Footer />
    </>
  )
}

export default index
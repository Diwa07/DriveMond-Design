import React from 'react'
import Pricing from './pricing'
import DetailsPage from './detailsPage'
import Nav from '../nav'
import PriceSecondpage from './priceSecondpage'
import EighthPage from '../home/eighthPage'
import Footer from '../footer'
import EleventhPage from '../home/eleventhPage'

const Price = () => {
  return (
    <div>
      <Nav/>

<Pricing/>

<PriceSecondpage/>
<DetailsPage/>

<Footer/>
    </div>
  )
}

export default Price
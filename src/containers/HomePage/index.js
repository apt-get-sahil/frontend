import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import Slider from 'react-slick';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import DealSlider from './DealSlider/DealSlider';
/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
     <Banner />
      <DealSlider />
     <Footer />
    </Layout>
   )

 }

export default HomePage
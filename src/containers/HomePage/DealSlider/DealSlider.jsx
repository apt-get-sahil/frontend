import Product from './Product';
import Slider from 'react-slick';
import { NextBtn, PreviousBtn } from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { offerProducts } from '../../../utils/constants';
import { getRandomProducts } from '../../../utils/functions';
import './DealSlider.css'; // Import the vanilla CSS file

// Slider settings'
export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  swipe: false,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const DealSlider = ({ title }) => {
  return (
    <section className="slider-container"> {/* Replace with your custom class */}
      {/* */}
      <div className="header"> {/* Replace with your custom class */}
        <h1 className="header-title">{title}</h1> {/* Replace with your custom class */}
        <Link to="/products" className="view-all-link">VIEW ALL</Link> {/* Replace with your custom class */}
      </div>
      <hr />
      {/* */}

      <Slider {...settings}>
        {getRandomProducts(offerProducts, 12).map((item, i) => (
          <Product {...item} key={i} />
        ))}
      </Slider>

    </section>
  );
};

export default DealSlider;

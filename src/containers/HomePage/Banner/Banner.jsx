import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gadgetSale from '../../../assets/images/Banners/1.png';
import kitchenSale from '../../../assets/images/Banners/2.png';
import poco from '../../../assets/images/Banners/3.png';
import realme from '../../../assets/images/Banners/5.png';
import fashionSale from '../../../assets/images/Banners/6.png';
// import oppo from '../../../assets/images/Banners/7.jpg';
import oppo from '../../../assets/images/Banners/Untitled design(1).png';

export const PreviousBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    )
  }
  export const NextBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    )
  }

  const Banner = () => {

    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
    };
  
    const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];
  
    return (
      <>
        <section className=" banner-section">
          <Slider {...settings}>
            {banners.map((el, i) => (
              <img draggable="false" className=" banner-img" src={el} alt="banner" key={i} />
            ))}
          </Slider>
        </section>
      </>
    );
  };
  
  export default Banner;
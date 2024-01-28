import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css';
import Privacy from './Privacy';
const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us:+44-7482910105",
       //add contact number as paragraph
       

      },
  
   
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        
      },
      {
        name: "Shipping",
        
      },
      {
        name: "Cancellation & Returns",
        
      },
      {
        name: "FAQ",
        
      }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        
      },
      {
        name: "Terms Of Use",
        
      },
      {
        name: "Security",
        
      },
      {
        name: "Privacy",
        //redirect: , write privacy ,
       redirect: <Privacy/>
        
        
      },
      
     
    ]
  },
  // {
  //   title: "social",
  //   // links: [
  //   //   {
  //   //     name: "Facebook",
  //   //     redirect: "https://www.facebook.com/flipkart",
  //   //   },
  //   //   {
  //   //     name: "Twitter",
  //   //     redirect: "https://twitter.com/flipkart",
  //   //   },
  //   //   {
  //   //     name: "YouTube",
  //   //     redirect: "https://www.youtube.com/flipkart",
  //   //   }
  //   // ]
  // }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">FactoryLoot <br />
                  
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">D35, Sector 1, IMT Manesar 122001<br />
                   <a className="text-primary-blue" href="tel:+44-7482910105">+44-7482910105</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          {/* <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            {/* <a href="https://seller.flipkart.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On Flipkart
            </a> */}
            {/* <a href="https://brands.flipkart.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a> */}
            {/* <a href="https://www.flipkart.com/the-gift-card-store" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
            </a>
            <a href="https://www.flipkart.com/helpcentre" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
            </a>

            <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div> */} *
        </>
      )}
    </>
  )
};

export default Footer;

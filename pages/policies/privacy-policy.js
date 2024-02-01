import Head from 'next/head'; // For SEO-related metadata
import Header from '../../components/Header'; // Import your header component
import Footer from '../../components/Footer'; // Import your footer component
import styled from 'styled-components';


export default function PrivacyPolicy() {
    const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto; /* Adjust height as needed */
  background-color: #222;
  color: #aaa;
  text-align: center;
  padding: 20px;
  
`;
  return (
    <div>   
        <Header />
        
      <Head>
        <title>Privacy Policy | FactoryLoot</title>
        {/* Other SEO-related meta tags, if needed */}
      </Head>
      <h1>Privacy Policy</h1>
      {/* Here goes your privacy policy content, formatted using JSX */}
      We collect information from you when you complete our feedback or contact form only to let you know about our newest products or track which products you are interested in or enquire so as to improve our features and customer service on our website.

We may also gather information regarding your location (eg :- your IP), browser, the pages of our website browsed during your visit. This data helps us to improve visitor’s browsing experience and our service. We respect your privacy and hence the information collected from you during your visit or shopping on our site is kept secured and never shared with any other party or individual. These data is only used by our staff members to give you the best service and process your orders as per your instructions. We assure that we never share or sell any of your data to any person other than Jomso team members. Also note that, Jomso team members are authorized to use the personal data for business purpose only such as processing your orders, shipping the product. Our internal policy restricts the use of customer’s personal data to employees other than authorized employees.

<h2>Cookies</h2>
A cookie is a small file is placed on your computer hard drive which helps to analyze web traffic or lets you know when you visit a particular site. It remembers your preferences and works according to your need. And hence lets us provide you with a better browsing experience, by enabling us to monitor which pages you find useful and which you do not. You may accept or decline cookies according to your choice from your browser settings.

<h2>Credit Card Security</h2>
We use 100% secure payment gateways, as a mode of collecting the payment. We do not keep the credit card number as the customer needs to enter the number on the payment gateway form.We recommend visiting this Privacy Policy page regularly for the latest version of the policy to stay up-to-date with our latest policy practices.

<StyledFooter>
    <Footer/>
</StyledFooter>
    </div>
  );
}

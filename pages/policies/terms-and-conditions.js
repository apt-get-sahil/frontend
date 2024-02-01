import Head from 'next/head';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  const StyledFooter = styled.footer`
  background-color: #222;
  color: #aaa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
  return (
    <div>
      <Header />
      <Head>
        <title>Terms & Conditions | FactoryLoot</title>
        {/* Other SEO-related meta tags, if needed */}
      </Head>
      <h1>Terms & Conditions</h1>
      {/* Replace this placeholder with your actual terms and conditions content */}
      <p>Welcome to FactoryLoot! These terms and conditions (`Terms, Terms and Conditions) govern your use of our website located at factoryloot.in (together with all content, features and functionalities offered on or through the website, factoryloot.in).</p>

      <h2>Please read these Terms carefully before accessing or using the Website.</h2>

      <p>By accessing or using the Website, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree to all of these Terms, you are prohibited from using the Website.</p>

      <h3>Your Representations and Warranties</h3>

      <p>By using the Website, you represent and warrant that:</p>
      <ul>
        <li>You are at least 18 years of age or you have the necessary parental consent to use the Website.</li>
        <li>You will not use the Website for any unlawful purpose.</li>
        <li>You will not violate any applicable laws or regulations.</li>
      </ul>

      <h3>Intellectual Property</h3>

      <p>The Website and its entire contents, features, and functionalities (including but not limited to text, images, graphics, logos, designs, code) are protected by copyright, trademark, and other intellectual property laws of both the United States and international conventions and treaties. You are not granted any right, title, or interest in the Website or its content.</p>

      <h3>Links To Other Websites</h3>

      <p>Our Website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, accuracy, or privacy practices of any third-party website or service. We encourage you to read the terms and conditions and privacy policy of any other website that you visit.</p>

      <h3>Disclaimer</h3>

      <p>YOUR USE OF THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE IS PROVIDED AS IS AND AS AVAILABLE WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.</p>

      <p>WE DO NOT WARRANT THAT THE WEBSITE WILL FUNCTION UNINTERRUPTED, ERROR-FREE, OR VIRUS-FREE. WE DO NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE WILL BE ACCURATE OR RELIABLE.</p>

      <h3>Limitation of Liability</h3>

      <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF THE WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

      <h3>Changes To These Terms</h3>

      <p>We reserve the right to modify these Terms at any time. Your continued use of the Website following the posting of changes to these Terms will constitute your acceptance of those changes.</p>

      <h3>Contact Us</h3>

      <p>If you have any questions about these Terms, please contact us at support@factoryloot.in.</p>
<StyledFooter><Footer/></StyledFooter>
      {/* You can add more sections depending on your specific requirements */}
    </div>
  );
}

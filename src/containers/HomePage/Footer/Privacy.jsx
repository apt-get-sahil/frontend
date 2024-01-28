import React from 'react';
//import './styles.css'; // Import your external CSS file
import Layout from '../../../components/Layout';
const Privacy = () => {
  return (
    <Layout>
      <h1 className="title">FactoryLoot Privacy Policy</h1>
      <p className="intro">
        Your privacy is important to us at FactoryLoot. This privacy policy
        explains how we collect, use, and protect your personal information
        when you visit our website or use our services.
      </p>

      {/* ... sections for different privacy policy topics */}
      <section className="section-info">
        <h2>Information We Collect</h2>
        <p>
          We collect the following types of information:
        </p>
        <ul>
          <li>Account Information: Name, email address, mailing address, phone number, date of birth (if applicable)</li>
          <li>Device Information: IP address, browser type, operating system, device identifier</li>
          <li>Browsing and Shopping Information: Pages visited, products viewed, searches performed, items added to cart, purchase history</li>
          <li>Payment Information: Billing address, credit card information (secured and stored by a trusted payment processor)</li>
          <li>Social Media Information: If you log in or connect using social media platforms, we may collect your public profile information</li>
          <li>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</li>
        </ul>
      </section>

      <section className="contact-info">
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this privacy policy, please contact us
          at <a href="mailto:support@factoryloot.com">support@factoryloot.com</a>
          or call us at {'+44-7482910105'}.
        </p>
      </section>
    </Layout>
  );
};

export default Privacy;

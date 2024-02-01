import Head from 'next/head';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function ShippingAndReturns() {
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
        <Header/>
      <Head>
        <title>Shipping & Returns | FactoryLoot</title>
        {/* Other SEO-related meta tags, if needed */}
      </Head>
      <h1>Shipping & Returns</h1>
      {/* Replace this placeholder with your actual shipping and returns content */}
      <p>Here you will find detailed information about our shipping options, delivery timelines, return policies, and procedures for exchanging items.</p>

      <h2>Shipping Information</h2>
      {/* Provide details about shipping methods, costs, and estimated delivery times */}
      <ul>Once an order is dispatched, if order / product will return to us because of incomplete address / wrong address, then we are not responsible in such cases and we will not provide any refunds.</ul>
<h2>Shipping Cost</h2>

<ul>Shipping cost is based on the product weight and delivery location. The weight of any product can be found on its detail page. Shipping charges for respective country will be applicable in that case.</ul>
<ul>We offer free shipping to within India.</ul>
<h2>Shipment and Tracking details</h2>
<ul>We use to send an email confirming the shipment of the order being placed, as soon as the items are handed over to the Courier Company. These alert emails will contain the tracking number and Courier Company’s website detail.</ul>
<ul>Tracking numbers for orders shipped might take around 24 business hours to become active on the courier websites.</ul>
<h2>VAT & Custom Duties</h2>
<ul>VAT / Custom Taxes and Import Duties are not in our control. They vary according to the rules of different countries and must be paid directly by the buyer. VAT / Custom Taxes and Import Duties are not included in our ordering process, but may be charged to you by your government.</ul>;
<ul>International customers are responsible for any customs or duty fees levied by their country. We have no control over these charges and cannot predict where they will occur, as policies vary greatly from nation to nation.</ul>
<ul>They are entirely your responsibility. The courier company may also charge some additional service charges over and above custom duty on case to case basis.</ul>
<h2>What if any Delays</h2>
<ul>Times to ship the product mentioned on our website against each item are indicative and approximate values only and sometimes due to situations beyond our control, delays may occur. No refund, returns, replacement & exchange will be entertained for this reason.</ul>
<ul>If, for any reason, there is going to be a delay in shipping because a item is out of stock or if there is an unusual delay in filling an order, we will notify you by e-mail</ul>
Dates for delivery are approximate only and we are not liable for any delay in delivering your order or any part of it. We may choose to deliver your order in separate parts. In some cases we may offer to refund you for unfulfilled part of the order.

      <h2>Return Policy</h2>
      {/* Outline return eligibility criteria, process, timelines, and any associated fees */}
      <h3>PRODUCT RECEIVED IN DAMAGED CONDITION / MANUFACTURING DEFECT OR WRONG ITEM</h3>
<ul>We accept the return within 7 working days. All one need to do is drop an email to support@factoryloot.in or call us on +91-9350433580, and we will arrange a return pick up, if the service is available at the pincode courier boy will get back to you with return packing slip within 24-48 hours. If return pick up service is not available at the center, one has to send it back to us through any courier and we will reimburse an amount of 100 Rs. to it.</ul>
<ul>If customer wants to return the product, then a credit note(Coupon) of the same amount will be generated to them which has one year validity. One can purchase anything from our website using that Credit note in the future.</ul>
<ul>On receipt, in case it is noticed that the outer packing of the product is damaged or tampered with, immediately verify the quality/quantity of the product against the invoice, before accepting the package from the courier agency. In case of any discrepancy, either refuse to accept delivery or accept delivery only after putting suitable remark on the proof of delivery. Customer should also lodge a proper complain with the local office of the courier agency, so that factoryloot.in may peruse the same in future, so as to avoid such occurrences in future.</ul>
<ul>In case of receipt of product in damaged condition or, with manufacturing defect or a wrong product has been received, kindly contact us at support@factoryloot.in, within 24 hours of receipt of product.</ul>
<ul>Kindly retain all packaging materials and product until receipt of instructions of the factoryloot.in regarding the same.
In case of any other complaints, email us at support@factoryloot.in, within 24 hours of receiving the product.</ul>
<ul>DO NOT return any product, before receiving confirmation from factoryloot.in for the same. In case any product is returned without such confirmation, factoryloot.in does not guarantee any credit or replacement of the product. Stitched products and custom made products which are made as per customers instructions, are not accepted as return in any case until it is found in a damage condition. Stitched outfits are made with the body measurements provided by customers. If stitched outfits which are made as per your given measurements and instructions, is not fit to customers, factoryloot.in is not liable for any action against it.</ul>
<ul>The email should contain comprehensive details of the defects/complaints of the single order/package delivery. Please note that factoryloot.in shall examine the returned products for all such defects/variations, on the basis of the customer’s emails.</ul>
<ul>All defective products being returned to factoryloot.in shall be done ONLY through registered airmail/courier.</ul>
<ul>All shipping costs of returning the defective products back to India over and above such amount paid by customer towards shipping charges while receiving the same from India are to be borne by the customer entirely.</ul>
<ul>All defective products ALONG WITH COPY OF INVOICE, ORIGINAL PACKING AND IN THE ORIGINAL CONDITION as sent to customer, shall have to be sent back to factoryloot.in within ten (10) working days from receipt of confirmation for the same from factoryloot.in. We do not accept stitched products which are made as per customers measurement.</ul>
<ul>Safe receipt of defective product by factoryloot.in is sole responsibility of the customer.</ul>
<ul>While returning the defective product, kindly mark the package as DEFECTIVE RETURNS.</ul>
<ul>A person who ordered from our website www.factoryloot.in, is agreed to our all the terms & conditions mentioned as above. One who does not agree with them, should not proceed to order anything from our website www.factoryloot.in </ul>
     

      <h2>Contact Us</h2>
     <h3>support@factoryloot.in</h3>
     <StyledFooter><Footer/></StyledFooter>
    </div>

  );
}

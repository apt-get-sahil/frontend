import { Link } from 'react-router-dom';
import './Product.css'; // Import the CSS file

const Product = ({ image, name, offer, tag }) => {
  return (
    <Link to="/products" className="product-link">
      <div className="product-image">
        <img draggable="false" src={image} alt={name} />
      </div>
      <h2 className="product-name">{name}</h2>
      <span className="product-offer">{offer}</span>
      <span className="product-tag">{tag}</span>
    </Link>
  );
};

export default Product;

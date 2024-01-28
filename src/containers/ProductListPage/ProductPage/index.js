import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from '../../../actions';
import { BiRupee } from "react-icons/bi";
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';

/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        console.log({params});
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, []);


    return (
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            <Carousel
                renderThumbs={() => {}}
            >
                {/* ... banner rendering */}
            </Carousel>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>
                {page.products && page.products.map((product, index) => (
                    <Card key={index} style={{ width: '400px', height: '200px', margin: '5px' }}>
                        <img style={{ width: '100%', height: '100%' }} src={product.img} alt="" />
                        <div className="priceContainer">
                            <span className="price">
                                <BiRupee /> // Assuming you're using a currency icon component
                                {product.changedPrice ? (
                                    <span>
                                        {product.changedPrice}
                                        <span style={{ textDecoration: "line-through" }}>
                                            {product.originalPrice}
                                        </span>
                                    </span>
                                ) : (
                                    product.price
                                )}
                            </span>
                            {product.discountedPercentage > 0 && (
                                <span className="discount" style={{ margin: "0 10px" }}>
                                    {product.discountedPercentage}% off
                                </span>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )

}

export default ProductPage

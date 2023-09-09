import apiUtils from "../utils/apiUtils"
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductCard from '../components/ProductCard';

const ShopPage = ({ isLoggedIn }) => {
    const [products, setProducts] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);

    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getProducts = async () => {
            const response = await apiUtils.getAxios().get(URL + '/products')
            setProducts(response.data)
            setIsLoading(false)
        }
        getProducts();
    }, []);

    //Toast
    const rentNotifySuccess = () => {
        toast.success('The product added to the cart', { position: toast.POSITION.BOTTOM_RIGHT });
    };

    const rentNotifyError = () => {
        toast.error('An unexpected error occured, the product was not added to the cart', { position: toast.POSITION.BOTTOM_RIGHT });
    };

    const rentNotifyLogin = () => {
        toast.error('You have to be logged in to add to cart', { position: toast.POSITION.BOTTOM_RIGHT });
    };


    return (
        <div className="center">
            <ProductCard products={products} isLoggedIn={isLoggedIn} isLoading={isLoading} rentNotifySuccess={rentNotifySuccess} rentNotifyError={rentNotifyError} rentNotifyLogin={rentNotifyLogin} />
            <ToastContainer />
        </div>
    )
}

export default ShopPage
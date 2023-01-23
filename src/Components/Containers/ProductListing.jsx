import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../../Redux/Actions/productAction';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const disptach = useDispatch();
    const fetchProducts = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) =>{
          console.log("Err", err);

        })
        disptach(setProducts(response.data))
    }
    useEffect(() =>{
      fetchProducts();
    }, [])
    console.log("Products :", products)

  return (
    <div className='ui grid container' style={{paddingTop:'1.5cm'}}>
        <ProductComponent/>
       
    </div>
  )
}

export default ProductListing
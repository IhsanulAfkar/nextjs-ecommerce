import { useState, useEffect } from "react"
import { Product } from "./Product";
const ProductList = ({ }) => {
    const [productList, setProductList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    // useEffect(() => {
    //     setProductList(data)
    // }, []);
    return (
        <>
            {productList.map(p => (<Product />))}
        </>
    )
}

export default ProductList
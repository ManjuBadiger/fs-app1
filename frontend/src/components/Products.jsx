import {useState, useEffect} from 'react'
import {PRODUCT_LIST} from '../constants'

function Products() {
    const [products, setProducts] = useState([])
    const token = localStorage.getItem('token');
    useEffect(() => {
        fetch(PRODUCT_LIST, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+token,
                Accept: 'application/json'
            }
            
        })
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [])

    return (
        <div className="productContainer">
            {
                Boolean(products.length) && products.map((item) => (
                    <div key={item.title}>
                        <h2>{item.title}</h2>
                        <img src="/table.avif" alt="image" className="productImage" />
                        <button>Add</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;
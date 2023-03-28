
import { useState, useEffect } from "react"
import CardComponent from "../components/CardComponent"

const Catalog = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])

    const showAllProducts = products.map((product, index) => {
        console.log(product)
        return <CardComponent key={index} cardInfo={product} />
    })

    return (
        <div>
            <div className="container center-flex">
                <header className="header-catalog">
                    <h2 className="title-product">Leonidas</h2>
                </header>
                <div className="catalog-list">
                    {showAllProducts}
                </div>
            </div>
        </div>
    )
};

export default Catalog;
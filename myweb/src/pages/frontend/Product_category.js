
import categoryservice from "../../services/CategoryServices";
import { useEffect, useState } from "react";
import Category_list from "./Category_list";
import { useParams } from "react-router-dom";
import ProductItem from "../../component/frontend/ProductItems";
import productservice from "../../services/ProductServices";


function Product_category() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState([4]);
    const [title, setTitle] = useState("");
    const { slug } = useParams();
    useEffect(function () {
        (async function () {
            try {
                const infoproduct = await productservice.getProductByCategoryId(slug, limit);
                setProducts(infoproduct.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);
    return (
        <>
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <Category_list />

                    </div>
                    <div className="col-md-9">

                        <h3 className="text-center">{title}</h3>
                        <div class="product-grid">
                                    {products.map((pro, index) => {
                                        return (<ProductItem product={pro} key={index} />);
                                    })}
                                </div>
                        <div className="row">
                            <div className="col-12 text-center bg-white">
                                <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>MORE</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        </>
    );



}

export default Product_category;

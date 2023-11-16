import { useEffect, useState } from "react";
import productservices from "../../services/ProductServices";
import { useParams } from "react-router-dom";
import brandservice from "../../services/BrandServices";
import ListBrand from "../../layoutsite/ListBrand";
import ProductItem from "../../component/frontend/ProductItems";



function ProductBrand() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState([4]);
    const [title, setTitle] = useState("");

    const { slug } = useParams();
    useEffect(function () {
        (async function () {
            try {
                const infobrand = await brandservice.getBySlug(slug);
                const catid = infobrand.data.brand.id;
                setTitle(infobrand.data.brand.name);
                const infoproduct = await productservices.getProductByBrandId(catid, limit);
                setProducts(infoproduct.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);
    return (
        <section className="maincontent">
            <div className="container my-4">

                <div className="row">
                    <div className="col-md-3">
                        <ListBrand />
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
    );
}
export default ProductBrand;
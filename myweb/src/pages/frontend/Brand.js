import { urlImage } from "../../config";
import { useEffect, useState } from "react";
import brandservice from "../../services/BrandServices";
import { Link } from "react-router-dom";

function Brand() {
    const [limit, setLimit] = useState(8);
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll(limit).then(function (result) {
                setBrands(result.data.brands)
            });
        })();
    }, [limit])
    return (
        <>
            {/* <!-- Banner --> */}
            {brands.map(function (brand, index) {
                return (
                    

                                <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                                    {/* <!-- Block1 --> */}
                                    <div class="block1 wrap-pic-w">
                                        <img src={urlImage + 'brand/' + brand.image} alt="IMG-BANNER" />

                                        <a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                            <div class="block1-txt-child1 flex-col-l">
                                                <span class="block1-name ltext-102 trans-04 p-b-8">

                                                    {brand.name}
                                                </span>

                                                <span class="block1-info stext-102 trans-04">
                                                    Spring 2018
                                                </span>
                                            </div>

                                            <div class="block1-txt-child2 p-b-4 trans-05">
                                                <div class="block1-link stext-101 cl0 trans-09">
                                                    <li key={index}>
                                                        <Link to={"/brand/" + brand.slug} >Shop now</Link>
                                                    </li>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>




                )
            })}

        </>
    )

}
export default Brand;
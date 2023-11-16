import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandservices from "../services/BrandServices";

function ListBrand() {
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await brandservices.getAll();
                setBrands(result.data.brands)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);

    return (
        <div className="listbrand mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Thương hiệu</h3>

            <ul>

                {brands.map(function (brand, index) {
                    return (
                        <li key={index}>
                            <Link to={"/brand/" + brand.slug} >{brand.name}</Link>
                        </li>
                    );
                })}


            </ul>
        </div>
    );
}

export default ListBrand;
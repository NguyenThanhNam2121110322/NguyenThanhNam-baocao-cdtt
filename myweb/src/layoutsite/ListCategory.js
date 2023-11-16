import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservices from "../services/CategoryServices";
function ListCategory() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservices.getCategoryByParentId(0);
                setCategorys(result.data.categorys)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);

    return (
        <div className="listcategory mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Danh mục sản phẩm</h3>
            
                {categorys.map(function (cat, index) {
                    return (
                        
                        <li key={index}>
                            <Link to={"/category-product/" + cat.slug} >{cat.name}</Link>
                        </li>
                    );
                })}
            
        </div>
    );
}

export default ListCategory;
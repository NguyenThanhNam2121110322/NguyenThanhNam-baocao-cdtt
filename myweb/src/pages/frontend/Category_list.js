
import categoryservice from "../../services/CategoryServices";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Category_list() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservice.getCategoryByParentId(0);
                setCategorys(result.data.categorys)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);
    return (
        <>


            {categorys.map(function (category, index) {
                return (
                    <>


                        <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                            <strong key={index}>
                                <Link to={"/category-product/" + category.slug} >{category.name}</Link>
                            </strong>

                        </button>
                    </>
                )
            })}
        </>
    );


}

export default Category_list;

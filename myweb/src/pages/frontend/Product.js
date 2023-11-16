

import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryServices";
import productservice from "../../services/ProductServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
import Category_list from "./Category_list";
import Brand from "./Brand";


function Product() {
   const [limit, setLimit] = useState(8);
   const [products, setProducts] = useState([]);
   useEffect(function () {
      (async function () {
         await productservice.getProductAll(limit).then(function (result) {
            setProducts(result.data.products)
         });
      })();
   }, [limit])
   const handleLoadMore = () => {
      setLimit(prevLimit => prevLimit + 4);
   };
   return (
      <>
         <div class="sec-banner bg0 p-t-80 p-b-50">
            <div class="container">
               <div class="row">
                  <Brand/>
               </div>
            </div>
         </div>
         {/* <!-- Product --> */}
         <section class="bg0 p-t-23 p-b-140">
            <div class="container">
               <div class="p-b-10">
                  <h3 class="ltext-103 cl5">
                     Product Overview
                  </h3>
               </div>

               <div class="flex-w flex-sb-m p-b-52">
                  <div class="flex-w flex-l-m filter-tope-group m-tb-10">

                     <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                        All Products
                     </button>
                     <Category_list />
                  </div>



                  {/* <!-- Search product --> */}
                  <div class="dis-none panel-search w-full p-t-10 p-b-15">
                     <div class="bor8 dis-flex p-l-15">
                        <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                           <i class="zmdi zmdi-search"></i>
                        </button>

                        <input class="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
                     </div>
                  </div>


               </div>

               <div class="row isotope-grid">


                  {products.map(function (product, index) {
                     return (
                        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                           {/* <!-- Block2 --> */}


                           <div class="block2">
                              <div class="block2-pic hov-img0">
                                 <img src={urlImage + 'product/' + product.image} alt="IMG-PRODUCT" />

                                 <a href={"product_detail/" + product.slug} class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                    Quick View
                                 </a>
                              </div>

                              <div class="block2-txt flex-w flex-t p-t-14">
                                 <div class="block2-txt-child1 flex-col-l ">
                                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                       {product.name}
                                    </a>

                                    <span class="stext-105 cl3">
                                       {product.price}$
                                    </span>
                                 </div>

                                 <div class="block2-txt-child2 flex-r p-t-3">
                                    <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                       <img class="icon-heart1 dis-block trans-04" src={require("../../assets/images/icons/icon-heart-01.png")} alt="ICON" />
                                       <img class="icon-heart2 dis-block trans-04 ab-t-l" src={require("../../assets/images/icons/icon-heart-02.png")} alt="ICON" />
                                    </a>
                                 </div>
                              </div>

                           </div>





                        </div>
                     )
                  }
                  )}


               </div>

               {/* <!-- Load more --> */}
               <div class="flex-c-m flex-w w-full p-t-45">
                  <button  class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" onClick={handleLoadMore}>
                     Load More
                  </button>
               </div>
            </div>
         </section>
      </>
   );


}

export default Product;

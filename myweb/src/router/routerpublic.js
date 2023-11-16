
import Login from "../layoutadmin/login/login";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Product_detail from "../pages/frontend/Product-detail";
import Product_search from "../pages/frontend/Product-search";
import ProductBrand from "../pages/frontend/Product_brand";
import Product_category from "../pages/frontend/Product_category";
import Shopping_cart from "../pages/frontend/shopping_cart/Shopping_cart";


const RouterPublic = [
    { path: '/', component: Home },
    { path: '/Product_detail/:slug', component: Product_detail },
    { path: '/Shopping_cart', component: Shopping_cart  },
    { path: '/Product_search/:key', component: Product_search  },
    { path: '/Contact', component: Contact  },
    {path:'/category-product/:slug',component:Product_category},
    {path:'brand/:slug',component:ProductBrand},

];

export default RouterPublic;
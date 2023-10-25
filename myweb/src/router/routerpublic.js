
import Login from "../layoutadmin/login/login";
import Home from "../pages/frontend/Home";
import Product_detail from "../pages/frontend/Product-detail";
import Shopping_cart from "../pages/frontend/shopping_cart/Shopping_cart";


const RouterPublic = [
    { path: '/', component: Home },
    { path: '/Product_detail/:slug', component: Product_detail },
    { path: '/Shopping_cart', component: Shopping_cart  },

];

export default RouterPublic;
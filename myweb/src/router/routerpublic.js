
import Login from "../layoutadmin/login/login";
import Home from "../pages/frontend/Home";
import Product_detail from "../pages/frontend/Product-detail";


const RouterPublic = [
    { path: '/', component: Home },
    { path: '/Product_detail/:slug', component: Product_detail },
    // {path:'/login', component:Login}

];

export default RouterPublic;



import ProductList from "../pages/backend/Product/ProductList";

import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";



const RouterPrivate = [
   
    {path:'/admin/product',component:ProductList},
   
    {path:'/admin/category',component:CategoryList},
    {path:'/admin/category/create',component:CategoryCreate},
    


];
export default RouterPrivate;
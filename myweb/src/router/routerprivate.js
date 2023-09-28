


import ProductList from "../pages/backend/Product/ProductList";
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";
import ProductShow from "../pages/backend/Product/ProductShow";

import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";
import CategoryShow from "../pages/backend/Category/CategoryShow";



import SliderList from "../pages/backend/Slider/SliderList";
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";
import SliderShow from "../pages/backend/Slider/SliderShow";


import BrandList from "../pages/backend/Brand/BrandList";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandShow from "../pages/backend/Brand/BrandShow";






const RouterPrivate = [
   
    {path:'/admin/product',component:ProductList},
    {path:'/admin/product/create',component:ProductCreate},
    {path:'/admin/product/update/:id',component:ProductUpdate},
    {path:'/admin/product/show/:id',component:ProductShow},
   
    {path:'/admin/category',component:CategoryList},
    {path:'/admin/category/create',component:CategoryCreate},
    {path:'/admin/category/update/:id',component:CategoryUpdate},
    {path:'/admin/category/show/:id',component:CategoryShow},

    {path:'/admin/slider',component:SliderList},
    {path:'/admin/slider/create',component:SliderCreate},
    {path:'/admin/slider/update/:id',component:SliderUpdate},
    {path:'/admin/slider/show/:id',component:SliderShow},

    {path:'/admin/brand',component:BrandList},
    {path:'/admin/brand/create',component:BrandCreate},
    {path:'/admin/brand/update/:id',component:BrandUpdate},
    {path:'/admin/brand/show/:id',component:BrandShow},


];
export default RouterPrivate;
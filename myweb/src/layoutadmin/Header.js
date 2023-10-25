// import { Link } from "react-router-dom";
// import { useAuth } from "../provider/AuthProvider";
// import { useState } from "react";


// function Header() {
//     const LogoutButton = () => {
//         const [logoutSuccess, setLogoutSuccess] = useState(false);
//         const { logout } = useAuth();

//         const handleLogout = () => {
//           logout();
//           setLogoutSuccess(true);

//         };

//         return <button onClick={handleLogout}>Logout</button>;
//       };
//     return (
//         <>

//         <section className="header bg-light">
//             <div className="container-fluid">
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary">

//                 <button onClick={handleLogout}>Logout</button>
//               {logoutSuccess && <p>Logout successful!</p>}
//                     <div className="container-fluid">

//                         <Link className="navbar-brand" to="/admin"><b>Quản trị</b></Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li class="nav-item dropdown">
//                                     <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Sản phẩm
//                                     </a>
//                                     <ul class="dropdown-menu">

//                                         <li><Link class="dropdown-item" to="/admin/category">Category</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/brand">Brand</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/post">Post</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/product">Product</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/menu">Menu</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/order">Order</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/contact">Contact</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/slider">Slider</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/topic">Topic</Link></li>
//                                         <li><Link class="dropdown-item" to="/admin/user">User</Link></li>

//                                     </ul>
//                                 </li>
//                                 {/* <li className="nav-item">
//                                     <Link className="nav-link text-dark" aria-current="page" href="#">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link text-dark" href="#">Link</Link>
//                                 </li> */}
//                             </ul>
//                             <form className="d-flex" role="search">
//                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                 <button className="btn btn-outline-dark" type="submit">Search</button>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </section>
//         </>
//     );
// }

// export default Header;

import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

function Header() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        alert("Thanh cong");
    };

    return (
        <>
            <section className="header bg-light">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/admin">
                                <b>Quản trị</b>
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item dropdown">
                                        <a
                                            class="nav-link dropdown-toggle text-dark"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Sản phẩm
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <Link class="dropdown-item" to="/admin/category">
                                                    Category
                                                </Link>
                                            </li>
                                            <li><Link class="dropdown-item" to="/admin/brand">Brand</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/post">Post</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/product">Product</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/menu">Menu</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/order">Order</Link></li>                                         
                                            <li><Link class="dropdown-item" to="/admin/contact">Contact</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/slider">Slider</Link></li>                                         
                                            <li><Link class="dropdown-item" to="/admin/topic">Topic</Link></li>
                                            <li><Link class="dropdown-item" to="/admin/user">User</Link></li>
                                        </ul>
                                    </li>
                                    {/* Các mục menu khác */}
                                </ul>
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-dark" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                            <button onClick={handleLogout}>Logout</button>

                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Header;

import menuservices from "../services/MenuServices";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Menu() {
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservices.getByParentId("mainmenu", 0).then(function (result) {
                setMenus(result.data.menus);
            });
        })();
    }, []);
    return (

        <>

            <div class="menu-desktop">
                <ul class="main-menu">

                    {menus.map(function (menu, index) {
                        return (
                            <li class="active-menu">
                                <Link to={menu.link}><a href="{menu.link}">{menu.name}</a></Link>
                                
                            </li>

                        );
                    })}
                </ul>
            </div>

            {/* <MenuItem menu={menu} key={index} /> */}

        </>

    );
}
export default Menu;
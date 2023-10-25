import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import menuservices from "../../../services/MenuServices";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";


function MenuShow() {
    const {id}=useParams("id");
    const [menu,setMenu]=useState([]);
    useEffect(function(){
        (async function(){
            await menuservices.getById(id).then(function(result){
                setMenu(result.data.menu);
            })
        })();
    },[]);


    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT MENU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/" + menu.id}><FiEdit />Sửa</Link>
                        <button className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/menu" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{menu.id}</td>
                        </tr>
                        <tr>
                            <th>Tên menu</th>
                            <td>{menu.name}</td>
                        </tr>
                        <tr>
                            <th>Link</th>
                            <td>{menu.link}</td>
                        </tr>
                        <tr>
                            <th>Table Id</th>
                            <td>{menu.table_id}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{menu.type}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{menu.status}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{menu.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default MenuShow;
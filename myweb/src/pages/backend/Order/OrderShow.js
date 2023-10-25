import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import orderservices from "../../../services/OrderServices";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";

function OrderShow() {
    const {id}=useParams("id");
    const [order,setOrder]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservices.getById(id).then(function(result){
                setOrder(result.data.order);
            })
        })();
    },[]);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Order Detail</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/" + order.id}><FiEdit />Update</Link>
                        <button className="btn btn-sm btn-danger me-1"><FiTrash2 />Delete</button>
                        <Link to="/admin/order" className="btn btn-sm btn-info"><FiRotateCcw />Back</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                   
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{order.id}</td>
                        </tr>
                        
                        <tr>
                            <th>Delivery Name</th>
                            <td>{order.delivery_named}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{order.delivery_gender}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{order.delivery_email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{order.delivery_phone}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{order.delivery_address}</td>
                        </tr>
                        <tr>
                            <th>Note</th>
                            <td>{order.note}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{order.status}</td>
                        </tr>
                        <tr>
                            <th>Created At</th>
                            <td>{order.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default OrderShow;
import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import orderservices from "../../../services/OrderServices";
function OrderList() {
    const [statusdel, setStatusDel] = useState(0);
    const [orders,setOrder]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservices.getAll().then(function(result){
                setOrder(result.data.orders)
            })
        })();
        
    },[statusdel]);
    function orderDelete(id) {
        orderservices.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(result.data.id);
        })
    }
    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">ORDER</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/order/create"className="btn btn-sm btn-success"><FiPlus/>Add</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                        <th style={{width:"30"}} className="text-center">ID</th>
                        <th style={{width:"30"}} className="text-center">Delivery Name</th>
                        <th style={{width:"30"}} className="text-center">Delivery Gender</th>
                        <th style={{width:"30"}} className="text-center">Delivery Email</th>
                        <th style={{width:"30"}} className="text-center">Delivery Phone</th>
                        <th style={{width:"30"}} className="text-center">Delivery Address</th>
                        <th style={{width:"30"}} className="text-center">Note</th>
                        <th style={{width:"30"}} className="text-center">Status</th>
                        <th style={{width:"140"}} className="text-center">Option</th>
                        


                            
                           
                          
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function(order,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                
                                <td className="text-center">{order.id}</td>
                                <td className="text-center">{order.delivery_named}</td>
                                <td className="text-center">{order.delivery_gender}</td>
                                <td className="text-center">{order.delivery_email}</td>
                                <td className="text-center">{order.delivery_phone}</td>
                                <td className="text-center">{order.delivery_address}</td>
                                <td className="text-center">{order.note}</td>
                                <td className="text-center">{order.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+order.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/"+order.id}><FiEdit/></Link>
                                    <button onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger"><FiTrash2 /></button>
                                </td>
                                <td className="text-center">{order.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default OrderList;

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderservices from "../../../services/OrderServices";
import userservices from "../../../services/UserServices";
import { FiRotateCcw } from "react-icons/fi";


function OrderUpdate() {
    const {id}=useParams("id");
    const navigate = useNavigate(); // chuyen trang

    const [delivery_named, setName] = useState('');
    const [delivery_gender, setGender] = useState('');
    const [delivery_email, setEmail] = useState('');
    const [delivery_phone, setPhone] = useState('');
    const [delivery_address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState(1);
    
    useEffect(function(){
        (async function(){
            await orderservices.getById(id).then(function(result){
                const data=result.data.order;
             
                setName(data.delivery_named);
                setPhone(data.delivery_phone);
                setEmail(data.delivery_email);
                setGender(data.delivery_gender);
                setAddress(data.delivery_address);
                setNote(data.note);
                setStatus(data.status);
            });
        })();
    },[]);

    async function orderEdit(event){
        event.preventDefault();
        var order = new FormData();
        order.append("delivery_named", delivery_named);
        order.append("delivery_gender", delivery_gender);
        order.append("delivery_email", delivery_email);
        order.append("delivery_phone", delivery_phone);
        order.append("delivery_address", delivery_address);
        order.append("note", note);
        order.append("status", status);

        await orderservices.update(order,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/order', { replace: true });
        })
    }

    const [users,setUser]=useState([]);
    useEffect(function(){
        (async function(){
            await userservices.getAll().then(function(result){
                setUser(result.data.users)
            })
        })();
    },[]);    

    

    return (
        <form onSubmit={orderEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Update Order
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Save
                            </button>
                            <Link to="/admin/order" className="btn btn-sm btn-info"><FiRotateCcw/>Back</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                           
                            <div className="md-3">
                                <label htmlFor="name">Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={delivery_named} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Gender</label>
                                <input onChange={(e) => setGender(e.target.value)} type="text" name="gender" value={delivery_gender} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="phone">Phone</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={delivery_phone} className="form-control"></input>
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={delivery_email} className="form-control"></input>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="md-3">
                                <label htmlFor="address">Address</label>
                                <textarea onChange={(e) => setAddress(e.target.value)} name="address" value={delivery_address} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="note">Note</label>
                                <textarea onChange={(e) => setNote(e.target.value)} name="note" value={note} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Status</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Online</option>
                                    <option value="2">Offline</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>

    );
}

export default OrderUpdate;
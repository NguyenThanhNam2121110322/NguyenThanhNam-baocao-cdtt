import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservices from "../../../services/MenuServices";
import { FiRotateCcw} from "react-icons/fi";

function MenuUpdate() {
    const {id}=useParams("id");

    const navigate = useNavigate(); // chuyen trang


    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [table_id, setTableId] = useState();
    const [type, setType] = useState('');
    const [status, setStatus] = useState(1);

    useEffect(function(){
        (async function(){
            await menuservices.getById(id).then(function(result){
                const data=result.data.menu;
                setName(data.name);
                setLink(data.link);
                setTableId(data.table_id);
                setType(data.type);
                setStatus(data.status);

            });
        })();
    },[]);

    async function menuEdit(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("table_id", table_id);
        menu.append("type", type);
        menu.append("status", status);
    

        await menuservices.update(menu,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/menu', { replace: true });
        })
    }

    const [menus,setMenu]=useState([]);
    useEffect(function(){
        (async function(){
            await menuservices.getAll().then(function(result){
                setMenu(result.data.menus)
            })
        })();
    },[])


    return (
        <form onSubmit={menuEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Menu
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên menu</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Link</label>
                                <input onChange={(e) => setLink(e.target.value)} type="text" name="link" value={link} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Type</label>
                                <input onChange={(e) => setType(e.target.value)} type="text" name="type" value={type} className="form-control" />
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="table_id">Id Table</label>
                                <select onChange={(e) => setTableId(e.target.value)} value={table_id} name="table_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {menus.map(function (me, index) {
                                        return (
                                            <option key={index} value={me.table_id}>{me.table_id}</option>
                                        )
                                    })}
                                </select>
                                {/* <select name="table_id" value={table_id} onChange={(e) => setTableId(e.target.value)} className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select> */}
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>

    );
}

export default MenuUpdate;
import httpAxios from "../httpAxios";

function getAll(){
    return httpAxios.get('contact/index');
}

function getById(id){
    return httpAxios.get('contact/show/'+id);
}

function create(contact){
    return httpAxios.post('contact/store',contact);
}

function update(contact,id){
    return httpAxios.post('contact/update/'+id,contact);
}

function remove(id){
    return httpAxios.delete('contact/destroy/'+id)
}
function submit(name, email, phonenumber,content) {
    return httpAxios.post('contact/submit', { name, email, phonenumber,content });
  }

const contactservices={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    submit:submit
}
export default contactservices;
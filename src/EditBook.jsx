import { useFormik } from "formik";
import { useEffect, useState } from "react";



import { useNavigate, useParams } from "react-router-dom";

export function EditBook() {

const [editbooks,seteditbook] =useState(null);

  const {id} = useParams()

useEffect(() =>{

  fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${id}`,{
    method:"GET"})
  
  .then((data) => data.json() )
  .then((data) => seteditbook(data))


},[id])

console.log(editbooks);

return (

  editbooks ? <Editbookforms editbooks={editbooks} /> : <h1>Loading....</h1>

)

}


function Editbookforms({editbooks}){



  const navigate = useNavigate();


  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: editbooks.name,
      author: editbooks.author,
      published:editbooks.published,
      publisher: editbooks.publisher,
      description: editbooks.description,
      pages:editbooks.pages,
      website:editbooks.website,
    },
    onSubmit: (editdata) => {


      updatafun(editdata);
   


    }
  });





  const updatafun = async (editdata)=>{

    await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${editbooks.id}`,{
      method: "PUT",
    body: JSON.stringify(editdata)  ,
    headers: {
     'Content-Type': 'application/json'
    },
    })


navigate("/books")


    

  }








  return (


    <div>

      <h1>EditBooks</h1>

      <form onSubmit={handleSubmit}>

        <input value={values.name} name="name" onChange={handleChange} type="text" placeholder="Title" /><br />
        <input value={values.author} name="author" onChange={handleChange} type="text" placeholder="author" /><br />
        <input value={values.published} name="published" onChange={handleChange} type="text" placeholder="published" /><br />
        <input value={values.publisher} name="publisher" onChange={handleChange} type="text" placeholder="publisher" /><br />
        <input value={values.description} name="description" onChange={handleChange} type="text" placeholder="description" /><br />
        <input value={values.pages} name="pages" onChange={handleChange} type="text" placeholder="Pages" /><br />
        <input value={values.website} name="website" onChange={handleChange} type="text" placeholder="website" /><br />
        <button type="submit">editbooks</button>

      </form>




    </div>



  );




}

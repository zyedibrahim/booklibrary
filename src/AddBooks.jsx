import { useFormik } from "formik";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";


export function AddBooks() {
 
const navigate = useNavigate()

   const {handleChange,handleSubmit,values} = useFormik({

initialValues:{

  name:'',
  author:'',
  published:'',
  publisher:'',
  description:'',
  pages:'',
  website:'',



},
onSubmit: (adddata) =>{


postfun(adddata)

console.log(adddata);

} 



   })




const postfun = async (adddata)=>{


  // const api ="https://63e0923b65b57fe60644f2ba.mockapi.io/books"
  
 await fetch("https://63e0923b65b57fe60644f2ba.mockapi.io/books",{
    method: "POST",
  body: JSON.stringify(adddata)  ,
  headers: {
   'Content-Type': 'application/json'
  },
  })
navigate("/books")
  


}

   








  return (


    <div>

      <h1>AddBooks</h1>

<form onSubmit={handleSubmit} >

<input value={values.name} name="name" onChange={handleChange} type="text" placeholder="Title" /><br />
<input value={values.author} name="author" onChange={handleChange} type="text" placeholder="author" /><br />
<input  value={values.published} name="published"  onChange={handleChange} type="text" placeholder="published" /><br />
<input value={values.publisher} name="publisher"  onChange={handleChange} type="text" placeholder="publisher" /><br />
<input  value={values.description} name="description"  onChange={handleChange} type="text" placeholder="description" /><br />
<input value={values.pages}  name="pages" onChange={handleChange} type="text" placeholder="Pages" /><br />
<input  value={values.website} name="website"  onChange={handleChange} type="text" placeholder="website" /><br />
<button type="submit" >addbooks</button>

</form>




    </div>


  );



}

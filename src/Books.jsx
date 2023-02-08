import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Books({takenbookfun, returndeletfun}) {

  const [bookdata,setbookdata]=useState([])


const getmovie = () =>{


  // const api ="https://63e0923b65b57fe60644f2ba.mockapi.io/books"

  fetch("https://63e0923b65b57fe60644f2ba.mockapi.io/books",{
    method:"GET"})
  
  .then((data) => data.json() )
  .then((data) => setbookdata(data))
  
  

}


  useEffect(() =>getmovie() ,[] )


const deletfun = async (dataid) =>{


  // const api =`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`

  await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`,{
    method: "DELETE"
  })
  
  getmovie()

}









const navigate =useNavigate()



  return (

    <div>

      <h1>Books library</h1>


{bookdata.length >0 ? (bookdata?.map((bmd,index) => (

<div className="data-con" key={index} >  
<h1>{bmd.id}</h1>
<h4> Title : {bmd.name}</h4>
<h4> Author : {bmd.author}</h4>
<h4> Published : {bmd.published}</h4>
<h4> publisher : {bmd.publisher}</h4>
<h4> description : {bmd.description}</h4>
<h4> Pages : {bmd.pages}</h4>
<h4> Website : {bmd.website}</h4>
<div>
  <button onClick={(() =>{

console.log(bmd.id);
deletfun(bmd.id)


  } )} >delete</button>
  
  <button 
  onClick={(() =>{
    console.log(bmd.id);

navigate(`/books/edit/${bmd.id}`)

  } )}
  
  
  >edit</button>

  <button 
  onClick={(() =>{
    takenbookfun(bmd)
    returndeletfun(bmd.id)



  } )}
  
  
  >takebooks</button>








</div>


</div>

) ) )
 
: (<div>
<h1>Loading...</h1>

</div>)

}







    </div>



  );

}





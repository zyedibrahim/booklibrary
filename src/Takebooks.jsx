import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Takebooks({takebooks,postintaken}) {




  const [takenbooks,settakenbooks]=useState(takebooks)

const navigate = useNavigate()






function recall(takendat){

  settakenbooks(takenbooks.filter((ele) => ele.id == takendat  )) 


}




console.log("from takenbooks after ",takebooks);

  return (




    <div>
      <h1>Taken books</h1>

{ takenbooks?.map((takendat) => (


<div className="data-con" key={takendat.id} >  
<h1>{takendat?.id}</h1>
<h4> Book Title : {takendat?.name}</h4>
{/* <h4> Author : {takendat.author}</h4>
<h4> Published : {takendat.published}</h4>
<h4> publisher : {takendat.publisher}</h4>
<h4> description : {takendat.description}</h4>
<h4> Pages : {takendat.pages}</h4>
<h4> Website : {takendat.website}</h4> */}

<div><button 

onClick={(() =>{


  postintaken(takendat)
  recall(takendat.id)





} )}




> return to books </button> </div>


<button onClick={(() =>{

recall(takendat.id)
console.log(takendat.id);



} )} >delete</button>



</div>


) ) 


}






    </div>


  );





}

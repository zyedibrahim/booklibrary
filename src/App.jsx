import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AddBooks } from './AddBooks';
import { Books } from './Books';
import { EditBook } from './EditBook';
import { Takebooks } from './Takebooks';



function App() {
  

  const navigate = useNavigate()


  const[takebooks,settakebooks]=useState([])

console.log("takebooks",takebooks);
  

function takenbookfun(takendata){
    
   
    
    settakebooks([...takebooks,takendata])

// console.log("takeboookfun",takendata);
// console.log("adddata",adddata);

}


const postintaken =  async (takendat) =>{

  await fetch("https://63e0923b65b57fe60644f2ba.mockapi.io/books",{
    method: "POST",
  body: JSON.stringify(takendat)  ,
  headers: {
   'Content-Type': 'application/json'
  },
  })
  navigate("/books")


}



const returndeletfun = async (dataid) =>{


  // const api =`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`

  await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`,{
    method: "DELETE"
  })
  
  navigate(`/books/take`)

}







  return (
    <div className="App">







<nav>

<button onClick={(() => navigate("/Books") )} >Books</button>
<button onClick={(() => navigate("/addbooks") )} >Addbooks</button>
<button onClick={(() => navigate("/books/take") )} >Takenbooks</button>



</nav>




<Routes>
        <Route path="/" element={<Books/>} />
      <Route path="/books" element={<Books  returndeletfun={ returndeletfun}  takenbookfun={takenbookfun} />} />
        <Route path="/addbooks" element={<AddBooks/>} />
        <Route path="/books/edit/:id" element={<EditBook/>} />
        <Route path="/books/take" element={<Takebooks postintaken={postintaken} takebooks={takebooks} />} />
        <Route path="*" element={<Books/>} />




      </Routes>



     
    </div>
  )
}




export default App

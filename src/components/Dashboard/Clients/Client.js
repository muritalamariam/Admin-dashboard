import React, {useEffect, useState} from 'react'
import company from '../../../images/company.jpg'
import './Client.css'




const Client = () => {
     
  const [Client, setClient] = useState([])

  const url = process.env.REACT_APP_CLIENT_URL;

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setClient(data.data))

}, [])

  console.log(Client)

  return (
      <div className='container'>
         <div className="set">

<div  className="tab">
   <table>
       <thead>
           <tr>
               
               <th> FULL NAME</th>
               <th> EMAIL</th>
               <th> PHONE NO</th>
               
               <th> IMAGE</th>

                 
           </tr>

           <tr>

           </tr>
       </thead>

       <tbody>

           {
               Client ? Client?.map((Client, idx) => (
              <tr key={idx}>

               
               <td> <p> <span> {Client.name}</span></p> </td>
               <td> {Client.email}</td>
               <td> {Client.phone}</td>
               
               {<img src={company} alt= 'a Fufu2' />}
               
           </tr>
               ) ) : null
           }
           
       </tbody>
   </table>
</div>
</div>
  

      </div>
  )
}

export default Client
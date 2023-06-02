import React from 'react'
import { useState } from 'react'
// import './App.css'; 


export default function Form() {


  const [data, setData] = useState({

    username: " ",
    userpass: "",
    usernumber: ""


  });

  const validation = () => {
   

 if (!data.userpass) {
      alert("Please enter the password")
    }
    else if (!data.username) {
      // alert("Please fill your name")
      console.log("hello")
    }
    else if (!data.usernumber) {
      alert("Please enter your mobile number")
    }

  }

  const handleChange = (e) => {


    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setData({ ...data, [name]: value })


  }



  // AFTER SUBMITTING THE FORM......    
  const handleSubmit = (e) => {

    e.preventDefault();   // isse karne se page refresh nhi hota...sara data erase NHI HOTA  h....               
    const newRecords = { ...data, id: new Date().getTime().toString() };
    console.log(newRecords);

    validation();

    // console.log(e);
  }
  return (
    <div>


      <form action="" onSubmit={handleSubmit} className='bg-sky-300 fixed w-6/12 justify-center text-center  relative inset-x-1/4  inset-y-40 h-1/4 font-mono rounded-lg' >


        <h1 className='justify-center text-center font-bold text-2xl'>Login page</h1>
        <br /><br />
        <label htmlFor="name">Enter name    </label  >
        <input type="text" autoComplete=" off" name='username' value={data.username}
          onChange={handleChange} className='relative inset-x-10 rounded-lg'/>
        <br /><br />

        <label htmlFor="password"> Enter Password  </label>
        <input type="password" autoComplete=" off" name='userpass' value={data.userpass}
          onChange={handleChange}  className='relative inset-x-6 rounded-lg'/>

        <br /><br />

        <label htmlFor="text">Mobile no     </label>
        <input type="text" value={data.usernumber} onChange={handleChange} name='usernumber'  className='relative inset-x-11 rounded-lg' />
        <br /><br />



        <button onClick={handleSubmit} className='bg-green-500 hover:bg-contain w-28 h-10 rounded-lg'>Submit</button>

      </form>


    </div>
  )
}

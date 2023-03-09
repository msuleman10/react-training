import './App.css';
import Head from "./Pages/Header";
import {useState} from 'react';
function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [data,setData] = useState([]);
  
  const add=()=>{
    setData([...data,{name,email}]);
    setName("");
    setEmail("");
  }
  const removeData=(i)=>{
    let arr = data;
    arr.splice(i,1);
    setData([...arr]);
  }
  return (
    <div className="app">
      <Head />
      <div className='dataFetch'>
        <div className='faields'>

          <input 
            type="text" 
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

        </div>
        <button onClick={add}>Add Data</button>
      </div>
      {data.map((e , i)=>{
        return(
          <div className='user-data' key={i}>
            <h3>{e.name}</h3>
            <h3>{e.email}</h3>
            <button onClick={()=>removeData(i)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;

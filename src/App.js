import './App.css';
import Hello from "./Components/Card";

function App() {
  let data=[
    {
      'mname' : "Your Name",
      'mpath' : "https://upload.wikimedia.org/wikipedia/it/3/3b/Your_Name.jpg",
      "mdata" : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thise industr"
    },
    {
      'mname' : "Your Name",
      'mpath' : "https://upload.wikimedia.org/wikipedia/it/3/3b/Your_Name.jpg",
      "mdata" : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thise industr"
    },
    {
      'mname' : "Your Name",
      'mpath' : "https://upload.wikimedia.org/wikipedia/it/3/3b/Your_Name.jpg",
      "mdata" : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thise industr"
    }
    
];

  return (
    <>
    <div className="app">
      {data.map((user,index)=>(
        <Hello key={index} name={user.mname} path={user.mpath} data={user.mdata}/>
      ))}
    </div>
    </>
  );
}

export default App;

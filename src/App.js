import './App.css';
// import Navbar from './Components/Navbar';
import ClassB from './Components/ClassB';
import FuncB from './Components/FuncB'
// import Home from './Pages/Home'

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <ClassB names="Suleman"/>
      <FuncB age="18"/>
      <ClassB names="Majid" age="25"/>

    </div>
  );
}

export default App;

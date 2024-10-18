import logo from './logo.svg';
import './App.css';
import { GET,POST } from './api/api';
import Signup from './Components/Signup';
function App() {

  const clickHandler=async()=>{
    const res=await GET('/hello')
    console.log(res.data.msg)
  }
  return (
    <div className="App">
      <div className='flex flex-col'>
        <Signup/>

        <button onClick={clickHandler}>Hello world</button>
      </div>
    </div>
  );
}

export default App;

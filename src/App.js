import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="App">
      <nav className='nav-css'>
      <Link to={'/addtask'}   ><button className='css-button'>Add Task</button></Link>
      <Link to={'/'}   ><button className='css-button'>Return</button></Link>
      <Filter/>

      </nav>

      <br></br>
      <Routes>

        <Route path={'/addTask'} element={<Addtask/>}/>
        <Route path={'/'} element ={<ListTask/>}/>
        <Route path='/edittask/:id' element={<EditTask/>}/>
      
      </Routes>
    </div>
  );
}

export default App;

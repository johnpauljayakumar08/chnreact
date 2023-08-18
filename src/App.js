import logo from './logo.svg';
import './App.css';
import Hello from './components/task1/task1'
import {Card} from './components/task2/task2'
import 'bootstrap/dist/css/bootstrap.css'
import { Congcard } from './components/card/card';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './components/menu/menu';
import { Hooksstate } from './components/hooks/state';
import { HooksEffect } from './components/hooks/effect';
import { Datefun } from './components/date/date';
import { Details } from './components/hooks/prductdetails';
import { Insertdata } from './components/insert/insert';
import { Updatedetails } from './components/update/update';
import { Registration } from './components/registration/registraion';
import { Stafflogin } from './components/dashboard/stafflogin';
import { Studentlogin } from './components/dashboard/student';
import { Login } from './components/login/login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/'  element={[<Menu/>,<Registration/>]}/>
          <Route path='/login' element={[<Menu/>,<Login/>]}/>
          <Route path='/view' element={[<Menu/>,<HooksEffect/>]}/>
          <Route path='/update/:s_no' element={[<Menu/>,<Updatedetails/>]}/>
          <Route path='/paruser/:s_no' element={[<Menu/>,<Details/>]}/>
          <Route path='/task2' element={[<Menu/>,<Card/>]}/>
          <Route path='/staff/:id' element={[<Menu/>,<Stafflogin/>]}/>
          <Route path='/student/:id' element={[<Menu/>,<Studentlogin/>]}/>
        </Routes>
      </BrowserRouter>
    </>
   
  
  );
}

export default App;

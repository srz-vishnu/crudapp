import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import UserContainer from './components/UserContainer'
import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import AddContainer from './components/AddContainer'
import UpdateContainer from './components/UpdateContainer'
import About from './components/About'



function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>

          <div className="App">
            
            <div className="menus">
              <ul>
                <li className='active'> <Link to="/">Home</Link> </li>
                <li> <Link to="/add">Add User</Link> </li>
                <li> <Link to="/about">About</Link> </li>
              </ul>
            </div>

            <div>
              <Routes>
                <Route path = "/" element={ <UserContainer /> } />
                <Route path = "/add" element={ <AddContainer /> } />
                <Route path = "/update" element={ <UpdateContainer /> } />
                <Route path = "/about" element={ <About /> } />
                
              </Routes>
            </div>

          </div>

        </BrowserRouter>
      </Provider>
  );
}

export default App;

      

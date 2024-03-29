import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import MyItem from './pages/MyItem/MyItem';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Inventory from './pages/Inventory/Inventory';
import AddItem from './pages/AddItem/AddItem';
import Footer from './pages/Shared/Footer/Footer';
import User from './pages/User/User';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/my-item' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add-new-item' element={<AddItem></AddItem>}></Route>
        <Route path='/user' element={<User></User>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

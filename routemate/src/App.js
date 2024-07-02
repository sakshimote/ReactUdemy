
import { Navigate, Route, Routes } from 'react-router-dom';
import {Home} from './components/Home';
import {ProductList} from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import {Contact} from './components/Contact';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import './App.css';
import { Admin } from './components/Admin';
import { ContactIn } from './components/ContactIn';
import { ContactUs } from './components/ContactUs';
import { Pagenotfound } from './components/Pagenotfound';

function App() {

  const user=true;

  

  return (
    <div className="App">
<Header/>

<main>
<Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="products" element={<ProductList />}></Route>
    <Route path="products/:id" element={<ProductDetail />}></Route>
    <Route path="contact" element={<Contact />}>
         <Route path="in" element={<ContactIn />}></Route>
        <Route path='us' element={<ContactUs />}></Route>
    </Route>

    <Route path="/admin" element={user ? <Admin /> :<Navigate to="/products"/>}></Route>
    <Route path="*" element={<Pagenotfound />}></Route>

  </Routes>
</main>


<Footer/>
    </div>
  );
}

export default App;

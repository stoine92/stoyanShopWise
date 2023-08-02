import './App.css';
import Layout from './Layout/Layout';
import {Routes, Route, useNavigate} from 'react-router-dom' 
import HomePage from './Pages/Homepage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import CategorySelected from './Pages/CategorySelected/CategorySelected';
import { StoreContextProvider } from "./context/Context";
import Cart from './Pages/Cart/Cart';

function App() {
  return (
          <StoreContextProvider>
    <Layout>
    <Routes>
    <Route exact path="/" element={
          <HomePage heading="Our Whole Selection"/>
    } />
    <Route exact path="/about-us" element={
          <AboutUs />
    } />
    <Route path="/smartphones" element={
          <CategorySelected  heading="Smartphones" filter="smartphones"/>
    } />
    <Route path="/tablets" element={
          <CategorySelected heading="Tablets" filter="tablets"/>
    } />
    <Route path="/laptops" element={
          <CategorySelected heading="Laptops" filter="laptops"/>
    } />
    <Route path="/cart" element={
          <Cart />
    } />
    </Routes>
    </Layout>
    </StoreContextProvider>
  );
}

export default App;

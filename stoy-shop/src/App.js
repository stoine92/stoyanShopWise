import './App.css';
import Layout from './Layout/Layout';
import {Routes, Route, useNavigate} from 'react-router-dom' 
import HomePage from './Pages/Homepage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import CategorySelected from './Pages/CategorySelected/CategorySelected';

function App() {
  return (
    <Layout>
    <Routes>
    <Route exact path="/" element={
          <HomePage heading="Browse Our Whole Selection"/>
    } />
    <Route path="/smartphones" element={
          <CategorySelected  heading="Browse Smartphones" filter="smartphones"/>
    } />
    <Route path="/tablets" element={
          <CategorySelected heading="Browse Tablets" filter="tablets"/>
    } />
    <Route path="/laptops" element={
          <CategorySelected heading="Browse Laptops" filter="laptops"/>
    } />
    </Routes>
    </Layout>
  );
}

export default App;

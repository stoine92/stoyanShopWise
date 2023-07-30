import './App.css';
import Layout from './Layout/Layout';
import {Routes, Route, useNavigate} from 'react-router-dom' 
import HomePage from './Pages/Homepage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <Layout>
    <Routes>
    <Route exact path="/" element={
          <HomePage />
    } />
    <Route path="/about-us" element={
          <AboutUs />
    } />
    </Routes>
    </Layout>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection/all' element={<Shop />} />
        <Route path='/collection/all/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

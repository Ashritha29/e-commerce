import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import Checkout from './components/Checkout';

import { NavLink, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/products/:id" element={<Product />} />
                {/* checkout component */}
              <Route path="/cart/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </div>
    )
}
export default App;
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import EmptyBlock from './pages/NotFound';
import Home from './pages/Home';
import './scss/app.scss';
import Cart from './pages/Cart';
import { Description } from './pages/description';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/descript/:id" element={<Description />} />
          <Route path="" element={<EmptyBlock />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

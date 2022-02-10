import './App.css';
import Layout from './HOC/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import ContactData from './containers/Checkout/ContactData/ContactData';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<BurgerBuilder />} />
          {/* inside <Checkout /> component we should to write inside it <Outlet /> to show <ContactData /> if end point eqal /checkout/contact-data */}
          <Route path="/checkout" exact element={<Checkout />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route>
          <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Error 404 Page Not Found</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

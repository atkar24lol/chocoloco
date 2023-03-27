import { createBrowserRouter } from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog.jsx'
import ProductPage from "../pages/ProductPage.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

const path = (import.meta.env.PROD) ? '/shop-template' : ''

const router = createBrowserRouter([
  {
    path: `${path}/`,
    element: (
      <div>
        <Header active={0}/>
        <Main />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/catalog`,
    element: (
      <div>
        <Header active={1} />
        <Catalog />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/products/:id`,
    element: (
      <div>
        <Header active={2}/>
        <ProductPage />
        <Footer />
      </div>
    )
  },
]);

export default router;
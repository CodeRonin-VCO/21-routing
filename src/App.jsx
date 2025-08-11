import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './routes/home.route';
import ContactPage from './routes/contact.route';
import NavBar from './layout/navbar/navbar';
import ProductListPage from './routes/products/products-list.route';
import ProductDetailPage from './routes/products/product-detail.route';

function App() {

    return (
        <>
            <NavBar />
        {/* Au pluriel */}
            <Routes>
                {/* Page d'accueil "/" *** Affectation d'une route Au singulier */}
                <Route index element={<HomePage />} />

                {/* 2ème route *** Contact: "/contact" */}
                <Route path='contact' element={<ContactPage />} />

                {/* 3ème route *** Pages product */}
                <Route path='product'>
                    <Route index element={<ProductListPage />} />
                    <Route path=':id' element={<ProductDetailPage />} />
                </Route>

            </Routes>
        </>
    )
}

export default App;

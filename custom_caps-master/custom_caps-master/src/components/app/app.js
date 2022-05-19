import Header from "../header";
import Footer from "../footer";
import MainPage from "../main_page";
import Catalog from "../catalog";
import SearchRes from "../search-result/search-result";
import Cart from "../cart";
import ProductInfo from "../product-info";
import {BrowserRouter as Router, Route} from "react-router-dom";

import './app.css'

function App() {
    return (
        <div className="app-container">
            <Router>
                <Header/>
                <Route path='/' exact={true} render={() => {
                    return <MainPage/>
                }} />
                <Route path='/catalog/' render={() => {
                    return <Catalog/>
                }} />
                <Route path='/prod-info/' render={() => {
                    return <ProductInfo/>
                }} />
                <Route path='/search-res/' render={() => {
                    return <SearchRes />
                }}/>
                <Route path='/cart/' render={() => {
                    return <Cart/>
                }}/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
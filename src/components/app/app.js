import Header from "../header";
import Footer from "../footer";
import MainPage from "../main_page";
import Catalog from "../catalog";
import SearchRes from "../search-result/search-result";
import Cart from "../cart";

import './app.css'

function App() {
  return (
    <div className="app-container">
      <Header/>
      {/* <MainPage /> */}
      {/* <Catalog />
      <SearchRes /> */}
      <Cart />
      <Footer/>
    </div>
  );
}

export default App;
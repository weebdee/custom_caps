import Header from "../header";
import Footer from "../footer";
import MainPage from "../main_page";

import './app.css'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <MainPage />
      <Footer/>
    </div>
  );
}

export default App;
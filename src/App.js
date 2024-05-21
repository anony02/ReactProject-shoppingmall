// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import Cart from "./page/Cart";
import Login from "./page/Login";
import Detail from "./page/Detail";
import Category from "./page/Category";
import Kakao from "./page/Kakao";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/kakao/oauth" element={<Kakao />} />
      </Routes>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

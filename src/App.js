import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<ProductListing />} />
          <Route path="/product/:productId" exact component={ProductListing} />
          <Route>404 Not Found</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

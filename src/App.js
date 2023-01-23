import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Header from "./Components/Containers/Header";
import ProductListing from "./Components/Containers/ProductListing";
import NewHeader from "./Components/Containers/NewHeader";
import ProductDetails from "./Components/Containers/ProductDetails";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found</Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./pages/productList";
import FormOrder from "./pages/form";
import NotFound from "./pages/404";
import {Header} from "./components/Header";


import "antd/dist/antd.css"
import '../assets/styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path='form' element={<FormOrder />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

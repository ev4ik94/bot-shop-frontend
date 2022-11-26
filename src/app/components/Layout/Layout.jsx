import {Route, Routes} from "react-router-dom";
import ProductList from "../../pages/productList";
import NotFound from "../../pages/404";
import {Header} from "../Header";


export default function Layout(){
    return(
        <>
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </>
    )
}
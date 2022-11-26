import {BrowserRouter, Routes, Route, useLocation, Navigate} from "react-router-dom";
import NotFound from "./app/pages/404";
import App from "./app/App";

import {useState} from "react";


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" exact element={<Navigate  to={"/ru"} />} />
                <Route path="/en/*" element={<Invoice />}/>
                <Route path="/ru/*" element={<Invoice />} />
                <Route path="/uz/*" element={<Invoice />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}


function Invoice(){
    const [locale, setLocale] = useState('ru')
    const location = useLocation()

    return(
        <App
            {...location}
            locale={locale}
            setLocale={(locale)=>setLocale(locale)}
        />
    )
}

export default Routing;

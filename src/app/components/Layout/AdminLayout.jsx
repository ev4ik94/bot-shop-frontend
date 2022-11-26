import {Route, Routes} from "react-router-dom";
import Login from "../../pages/admin/login";
import Main from "../../pages/admin/main";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function AdminLayout(props){


    return(
        <Routes>
            <Route path='/admin-shop-secret/login' element={<Login {...props} />}/>
            <Route path='/admin-shop-secret' element={<Main {...props}/>}/>
        </Routes>
    )
}
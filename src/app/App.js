import "antd/dist/antd.css"
import '../assets/styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminLayout from "./components/Layout/AdminLayout";
import Layout from "./components/Layout/Layout";


function App(props) {

  return (
    <>
        {props.pathname.match('admin-shop-secret')?<AdminLayout {...props}/>:<Layout {...props}/>}
    </>
  );
}


export default App;

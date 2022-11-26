import {Layout, Menu} from "antd";
import {
    FormOutlined,
    PieChartOutlined,
    LogoutOutlined,
    TeamOutlined,
    FileDoneOutlined,
    SnippetsOutlined,
    ContactsOutlined,
    MailOutlined
} from '@ant-design/icons'
import {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom'


const { Content, Sider } = Layout
const { SubMenu } = Menu


export default function NavBar(props){
    const [collapsed,setCollapsed] = useState(false)
    const [openKeys, setOpenKeys] = useState([''])
    const {children, locale} = props
    const navigate = useNavigate()

    useEffect(()=>{
        let token = localStorage.getItem('us-tk')
        if(!token){
            navigate(`/${locale}/admin/login`)
        }
    }, [])

    function onOpenChange(){

    }

    return(
        <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)} style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                zIndex: 10
            }}>

                <Menu theme="dark" className="custom-menu" openKeys={openKeys} onOpenChange={onOpenChange}  mode="inline">
                    <SubMenu key="sub0" icon={<FormOutlined />} title='Главная'>
                        <Menu.Item key={`/ru/admin/main/blog`} icon={<PieChartOutlined />}><Link to={`/ru/admin/main/blog`}>Главная</Link></Menu.Item>
                    </SubMenu>

                    {/*<Menu.Item key="/logout" icon={<LogoutOutlined />} onClick={()=>logout()}>Выйти</Menu.Item>*/}
                </Menu>
            </Sider>
            <Layout className="site-layout" style={collapsed ? {maxWidth: 'calc(100% - 80px)'} : {maxWidth: 'calc(100% - 200px)', background: '#fff', marginLeft: 'auto'}}>
                <Content style={{ marginTop: 64 }}>
                    <div>
                        {children}
                    </div>
                </Content>
            </Layout>

        </Layout>
    )
}
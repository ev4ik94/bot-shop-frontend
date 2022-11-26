import {Form, Input, Button, Col} from 'antd'
import {Auth} from "../../../../providers/auth";
import {useNavigate} from "react-router-dom";


export default function Login(props){
    const navigate = useNavigate()
    const {locale} = props

    async function onFinish(values){
        await Auth.login(values)
            .then(result=>{
                const {token} = result?.data
                if(token){
                    localStorage.setItem('us-tk', token)
                    navigate(`/${locale}/admin-shop-secret`)
                }
            })
    }


    return(
        <Col span={12} className='mx-auto' style={{paddingTop: '150px'}}>
            <Form
                name="normal_login"
                onFinish={onFinish}
            >

                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Это поле обязательно'
                        }
                    ]}
                >
                    <Input  placeholder='email' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Это поле обязательно'
                        }
                    ]}
                >
                    <Input
                        type="password"
                        placeholder='Пароль'
                    />
                </Form.Item>
                <Form.Item className="btn-group">
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    )
}
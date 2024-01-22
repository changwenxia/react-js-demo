import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Input} from 'antd';
import {apiRes} from '@/api';
import './index.less';

function Login() {
    const navigate = useNavigate();

    const [accout, setAccout] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        apiRes.signIn({
            data: {accout, password},
            success: res => {
                console.log(res);
                navigate('/home');
            }
        })
    }
    return (
        <div className='P-login'>
            <div className='ipt-con'>
                <Input placeholder='账号' value={accout} onChange={e => setAccout(e.target.value)} />
            </div>
            <div className='ipt-con'>
                <Input.Password placeholder='密码' value={password} onChange={e => setPassword(e.target.value)} />

            </div>
            <div className='ipt-con'>
                <Button type='primary' block={true} onClick={login}>登录</Button>
            </div>
        </div>
    )
}

export default Login;
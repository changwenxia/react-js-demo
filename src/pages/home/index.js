import { useNavigate } from 'react-router-dom'
import {Button, theme, Modal} from 'antd';
import {logout, goto} from '@/api';
import './index.less';

const {useToken} = theme;

function Home() {
    // const navigate = useNavigate();

    const {token} = useToken();
    const [modal, contextHolder] = Modal.useModal();

    const exit = () => {
        modal.confirm({
            title: '确定退出登录吗？',
            onOk() {
                logout()
            }
        })
    }

    return (
        <div className='P-home'>
            <h1 style={{color: token.colorText}}>home page</h1>
            <div className='ipt-con'>
                <Button onClick={()=>{goto('/login')}}>组件外跳转</Button>
            </div>
            <div className='ipt-con'>
                <Button type='primary' onClick={exit}>返回登录</Button>
            </div>
            {
                // 这是最终解决Modal.method跟随换肤的关键，contextHolder在组件DOM中随便找个地方放就行
                contextHolder
            }
        </div>
    )
}

export default Home;
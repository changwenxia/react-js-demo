import {useState} from 'react';
import {Button, Card} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
// 从主题换肤store分库引入setDark方法
import { setDark } from '@/store/slices/theme';
import ThemeModal from '@/components/themeModal';
import { globalConfig } from '@/globalConfig';

import { SunOutlined, MoonOutlined, ThemeOutlined } from '@/components/extraIcons';
import './index.less';

function Header(props) {
    // 获取redux派发钩子
    const dispatch = useDispatch();
    // 获取store中的主题配置
    const theme = useSelector(state => state.theme);

    const {title, info} = props;

    const [showThemeModal, setShowThemeModal] = useState(false)
    info && info();
    return (
        <Card className='M-header'>
            <div className='header-wrapper'>
                <div className='logo-con'>Header:{title}</div>
                <div className='opt-con'>
                    {
                        theme.dark ? (
                            <Button icon={<SunOutlined/>} shape='circle' onClick={()=>dispatch(setDark(false))}></Button>
                        ) : (
                            <Button icon={<MoonOutlined/>} shape='circle' onClick={()=>dispatch(setDark(true))}></Button>
                        )
                    }
                    {
                        // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
                        globalConfig.customColorPrimarys && globalConfig.customColorPrimarys.length > 0 && (
                            <Button
                                icon={<ThemeOutlined/>}
                                shape='circle'
                                onClick={()=>setShowThemeModal(true)}
                            />
                        )
                    }
                </div>
            </div>
            {
                showThemeModal && (
                    <ThemeModal onClose={()=>setShowThemeModal(false)}/>
                )
            }
        </Card>
    )
}

export default Header; 
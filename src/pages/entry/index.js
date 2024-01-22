import {Outlet, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { ConfigProvider, theme} from 'antd';
import {PrivateRoute} from '@/router';
import Header from '@/components/header';
import './index.less';

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const { darkAlgorithm, defaultAlgorithm } = theme;

function Entry() {
    const location = useLocation();
    const globalTheme = useSelector(state => state.theme);

    let antdTheme = {
        algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
    }
    if (globalTheme.colorPrimary) {
        antdTheme.token = {
            colorPrimary: globalTheme.colorPrimary
        }
    }

    return (
        <PrivateRoute>
            <ConfigProvider theme={antdTheme}>
                <div className="M-entry">
                    <Header title={location.pathname}/>
                    <div className="main">
                        <Outlet/>
                    </div>
                </div>
            </ConfigProvider>
        </PrivateRoute>
    )
}

export default Entry;
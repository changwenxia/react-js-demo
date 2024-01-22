import {createHashRouter, Navigate} from 'react-router-dom';
import Login from '@/pages/login';
import Home from '@/pages/home';
import Accout from '@/pages/accout';
import Entry from '@/pages/entry';
import {globalConfig} from '@/globalConfig';

export const globalRouters = createHashRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Entry />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/accout',
                element: <Accout />,
            },
            {
                path: '/',
                element: <Navigate to="/home" />,
            },
            {
                path: '*',
                element: <Navigate to="/login" />,
            }
        ],
    },
])

export function PrivateRoute(props) {
    return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
        props.children
    ) : (
        <Navigate to="/login"/>
    )
}
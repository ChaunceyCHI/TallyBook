import Home from '@/container/Home'
import Data from '@/container/Data'
import User from '@/container/User'
import Detail from '@/container/Detail'
import Login from '@/container/Login';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/data",
        component: Data
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/detail',
        component: Detail
    },
];

export default routes
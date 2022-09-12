import React, { useEffect, useState, Fragment} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import { ConfigProvider } from 'zarm'
// import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
// import 'zarm/dist/zarm.css'

import routes from '@/router'
import NavBar from '@/components/NavBar'

function App() {
  const location = useLocation(); // 拿到location实例
  const { pathname } = location; // 获取当前路径
  const needNav = ['/', '/data', '/user']; // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false); // 是否展示Nav

  useEffect(() => {
    setShowNav(needNav, includes(pathname))
  }, [pathname]) // []内的参数若是变化，便会执行上述回调函数

  return (<>
    {/*缩小编译大小。 下方代码在颜色后面删除了  locale={zhCN} */}
    <ConfigProvider primaryColor={'#007fff'} >
    <Routes>
      {
        routes.map(route => <Route exact key={route.path} path={route.path} element={
        <route.component/>
      } />)
      }
    </Routes>
    </ConfigProvider>
    <NavBar showNav={showNav} />
  </>)
}
 
export default App

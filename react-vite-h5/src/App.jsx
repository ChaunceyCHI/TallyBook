import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { ConfigProvider } from 'zarm'
// import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
// import 'zarm/dist/zarm.css'

import routes from '@/router'

import NavBar from '@/components/NavBar'

function App() {
  return <Router>
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
    <NavBar showNav={true} />
  </Router>
}

export default App

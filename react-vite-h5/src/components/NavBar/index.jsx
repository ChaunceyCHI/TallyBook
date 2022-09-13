import React, {useState} from "react";
import PropTypes from 'prop-types';
import { TabBar } from "zarm";
import { useLocation, useNavigate } from 'react-router-dom';
import s from './style.module.less';
import CustomIcon from '@/components/CustomIcon';

const NavBar = ({ showNav }) => {
    const NavigateTo = useNavigate()
    const [activeKey, setActiveKey] = useState(useLocation().pathname);

    const changeTab = (path) => {
        setActiveKey(path)
        NavigateTo(path)
    }

    return (
        <TabBar visible={showNav} className={s.tab} activeKey={activeKey} onChange={changeTab}>
            <TabBar.Item
                itemKey='/'
                title='账单'
                icon = {<CustomIcon type="icon-zhangdan" />}
            />
            <TabBar.Item
                itemKey='/data'
                title='统计'
                icon = {<CustomIcon type="icon-tongji" />}
            />
            <TabBar.Item
                itemKey='/user'
                title='我的'
                 icon = {<CustomIcon type="icon-wode" />}
            />
        </TabBar>
    );
};

// 此处需用驼峰命名法！！
NavBar.propTypes = {
    showNav: PropTypes.bool
}

export default NavBar


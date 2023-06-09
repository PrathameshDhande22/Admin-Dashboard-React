import { useState } from 'react'
import { Drawer,Button } from 'antd'
import {GiHamburgerMenu} from 'react-icons/gi'
import SideMenu from '../SideMenu'

export const HamburgerMenu = () => {
    const [showmenu,setShowmenu]=useState(false)
  return (
    <div className='hmenu'>
        <Button icon={<GiHamburgerMenu/>} size="large" onClick={()=>{setShowmenu(true)}}></Button>
        <Drawer title="DashBoard Menu" placement="left"  open={showmenu} onClose={()=>setShowmenu(false)} width={250}>
        <SideMenu/>
      </Drawer>
    </div>
  )
}

import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../../Pages/Dashboard'
import { Inventory } from '../../Pages/Inventory'
import { Orders } from '../../Pages/Orders'
import { Customers } from '../../Pages/Customers'

export const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/customers' element={<Customers/>}/>
        </Routes>
    </div>
  )
}

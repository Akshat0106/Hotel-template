import {Routes,Route} from 'react-router-dom'
import {Home,AboutUs,Facilities,Gallery,ContactUs,ErrorPage} from './index'
import Layout from '../components/Layout'

function AppRoutes(){
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='aboutus' element={<AboutUs/>} />
                <Route path='facilities' element={<Facilities/>} />
                <Route path='gallery' element={<Gallery/>} />
                <Route path='contactUs' element={<ContactUs/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Route>
        </Routes>
        </>
    )
}

export default AppRoutes
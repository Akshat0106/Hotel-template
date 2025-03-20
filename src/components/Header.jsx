import {Link} from "react-router-dom"
function Header(){
    return (
        <>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/facilities'>Facilities</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/contactUs'>Contact Us</Link>
        </>
    )
}
export default Header
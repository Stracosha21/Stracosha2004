import logo from './img/logo.png';
import './Navbar.css';
function Navbar() {
    return (
        <div class="header">
            <div class="logo"><img src={logo}/></div>
            <div class="navbar">
                <p>KNOW-HOW</p>
                <p>O NAS</p>
                <p>BLOG</p>
                <p>KONTAKT</p>
            </div>
        </div>
    )
}
export default Navbar;
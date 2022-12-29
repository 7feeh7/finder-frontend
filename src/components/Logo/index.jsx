import './style.css'
import logo from '../../assets/logo.svg'

function LogoFinder() {
    
    return (
        <div className="logo">
            <img src={logo} className='logo' alt="Finder" />
        </div>
    )
}

export default LogoFinder
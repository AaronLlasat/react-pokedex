import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/pokemon-23.svg';
import './navigation.scss';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className='nav-logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/pokedex'>
                        POKEDEX
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
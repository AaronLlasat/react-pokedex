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
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
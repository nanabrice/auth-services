import Navbar from '../components/Navigationbar';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'



const LandingPage = () => {
    return (
        <>
            <Navbar />
            <h2>This is the landing page</h2>
            <div>
                <Link to="/Register">Sign up</Link>
            </div>
            <div>
                <Link to="/Login">Login</Link>
            </div>
        </>
    );
};

export default LandingPage;
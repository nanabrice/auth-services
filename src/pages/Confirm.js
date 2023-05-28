import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'



const Confirm = () => {
    return (
        <>
            <Container className='p-x'>
                <Container className='border rounded p-4 my-container2'>
                    <div className='text-center'>
                        <h3 className='mb-4'>TaskAID</h3>
                        <p>we'll use your details from ****** to create your account</p>
                    </div>
                    <div>
                        <h6>email</h6>
                        <p>.....email here.....</p>
                        <h6>Full Name</h6>
                        <p>.....full name here.....</p>
                    </div>
                    <div>
                        <Button variant="primary mt-3 mb-3" type="submit" className="form-control btn-custom">
                            Confirm your account
                        </Button>

                        <div style={{ borderBottom: '2px solid #ccc', marginBottom: '1rem' }}></div>
                    </div>

                    <div className='text-center'>
                        <Link to="/Login">Already have an account? Log in</Link>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Confirm;
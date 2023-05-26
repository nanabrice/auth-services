import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



const Register = () => {
    return (
        <>
           <Container className='p-6'>

                <Container className='d-flex flex-column min-vh-100  align-items-center mb border rounded p-4 my-container' style={{ maxWidth: '400px'}}>
                <div className='text-center'>
                <h3 className='mb-4'>TaskAID</h3>
                <p>sign up to continue</p>
           </div>
            <Form>
                <div className='mb-4'>

                <Stack direction="horizontal" gap={3} className='mb-3'>
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Control className="form-Control" type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Control className="form-Control" type="text" placeholder="Last Name" />
                </Form.Group>
                </Stack>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="form-Control" type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter your Password" />
                </Form.Group>

                <Form.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at ullamcorper sem, ac ornare ligula.
                </Form.Text>

                <Button variant="primary mt-3" type="submit" className="form-control btn-custom">
                    Sign up
                </Button>

                </div>
                <div className='text-center'><p>OR</p></div>
            </Form>

            <div>
                    <Button variant="light" size="lg" className='mb-3 bs' style={{ width: '100%' }}>
                    <Stack direction="horizontal" gap={3}>
                        <div><FontAwesomeIcon icon={faGoogle} /></div>
                        <div className="mx-auto">Continue with Google</div>
                    </Stack>
                    </Button>

                    <Button variant="light" size="lg" className='mb-3 bs' style={{ width: '100%' }}>
                    <Stack direction="horizontal" gap={3}>
                        <div><FontAwesomeIcon icon={faGithub} /></div>
                        <div className="mx-auto">Continue with GitHub</div>
                    </Stack>
                    </Button>

                    <Button variant="light" size="lg" className='mb-3 bs' style={{ width: '100%' }}>
                    <Stack direction="horizontal" gap={3}>
                        <div><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className="mx-auto">Continue with Facebook</div>
                    </Stack>
                    </Button>

                    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>

            </div>
            
            <div>
                <Link to="/Login">Already have an account? Log in</Link>
            </div>
                </Container>

           </Container> 
        </>
    );
};

export default Register;
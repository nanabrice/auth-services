import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

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
                <Form.Group className="mb-0" controlId="formBasicEmail">
                    <Form.Control className="form-Control" type="email" placeholder="Enter your email" />
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
                
                    <Button variant="light" size="lg" className='mb-3' style={{ width: '100%'}}>
                        Continue with Google                   
                    </Button>
                    <Button variant="light" size="lg" className='mb-3' style={{ width: '100%' }}>
                    Continue with Github
                    </Button>
                    <Button variant="light" size="lg" className='mb-5' style={{ width: '100%' }}>
                    Continue with Facebook
                    </Button>
                    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}></div>

            </div>
            
            <div>
                <p>Already have an account? Log in</p>
            </div>
                </Container>

           </Container> 
        </>
    );
};

export default Register;
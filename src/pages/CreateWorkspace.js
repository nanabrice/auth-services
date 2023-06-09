import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'



const CreateWorkspace = () => {
    return (
        <>
             <Container className='p-x'>
                <Container className='border rounded p-4 my-container2'>
                    <div className='text-center mb-4'>
                        <h4 className='mb-3'>Wellcome to TaskAID</h4>
                        <p>Let's create your workspace</p>
                    </div>
                    <div>
                        <Form.Label>Name your workspace</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="form-Control" type="text" placeholder="(Project or Team name)" />
                        </Form.Group>
                        <Form.Label>Who's on your team</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="form-Control" type="text" placeholder="Enter the emails of your team mates" />
                            <Form.Text className="text-muted">
                                Invite your team mates so they can see what you are working on.
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div>
                        <Link to="/Home">
                        <Button variant="primary mt-3 mb-3" type="submit" className="form-control btn-custom">
                            Create your Workspace
                        </Button>
                        </Link>

                    </div>

                </Container>
            </Container>
        </>
    );
};

export default CreateWorkspace;
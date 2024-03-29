import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';

function MyNav(){
return (
    <>
    <Navbar expand="lg" className="bg-dark " >
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">FILM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white ">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-white">About</Nav.Link>
            
              
                
           
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Search/> */}
            <Button variant="outline-success">Browse</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
);
}

export default MyNav;
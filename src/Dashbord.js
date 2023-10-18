import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashbord() {
  return (
    <Container fluid>
      <Row>
        <Col >

          <div className='sidename'>
            <Navbar variant="dark">

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link to="/home">
                    <i class="fa-solid fa-house icon2"></i>
                    <span>Dashboard</span>
                  </Nav.Link>
                  <NavDropdown title={<span><i class="fas fa-key icon2"></i> Dashboard</span>} id="basic-nav-dropdown" Variant="dark" drop="end" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title={<span><i class="fas fa-shopping-cart icon2"></i> Product</span>} id="basic-nav-dropdown" variant="dark" drop="end">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title={<span><i class="fa-solid fa-user icon2"></i> Customer</span>} id="basic-nav-dropdown" Variant="dark" drop="end">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title={<span><i class="fas fa-dollar-sign icon2"></i> Income</span>} id="basic-nav-dropdown" Variant="dark" drop="end">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title={<span><i class="fas fa-star icon2"></i>
                    Promote</span>} id="basic-nav-dropdown" Variant="dark" drop="end">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  </NavDropdown>

                  <NavDropdown title={<span><i class="fa-regular fa-circle-question icon2"></i> Help</span>} id="basic-nav-dropdown" Variant="dark" drop="end" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title={<span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdYoPH3ygl20Cpfi-Xp9_j55RmjFHPXnpgXd-Ov-IEQ&s" className='size1' ></img> Evano</span>} id="basic-nav-dropdown" Variant="dark" drop="down" >
                   
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                  </NavDropdown>
                  <p style={{color:"#CACFD2 ",marginTop:"-10px"}}>Project Manager</p> 
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Col>
      </Row>
    </Container >

  );
}

export default Dashbord;
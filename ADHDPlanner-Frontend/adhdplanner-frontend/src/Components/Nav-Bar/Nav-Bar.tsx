import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from '../Log-In/LogInComponent';
import LogoutButton from '../Log-In/LogOutComponent';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav-Bar.css';

function NavBar() {
    const { isAuthenticated } = useAuth0();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Planner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="NavItem">
                    <Nav className="NavItem">
                    {/*    <Nav.Link href="#link">Link</Nav.Link>*/}
                    {/*    <NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                    {/*        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>*/}
                    {/*        <NavDropdown.Item href="#action/3.2">*/}
                    {/*            Another action*/}
                    {/*        </NavDropdown.Item>*/}
                    {/*        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                    {/*        <NavDropdown.Divider />*/}
                    {/*        <NavDropdown.Item href="#action/3.4">*/}
                    {/*            Separated link*/}
                    {/*        </NavDropdown.Item>*/}
                        {/*    </NavDropdown>*/}
                        <div>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            {isAuthenticated ? (
                                <NavDropdown.Item>
                                    <LogoutButton />
                                </NavDropdown.Item>
                            ) : (
                                <NavDropdown.Item>
                                    <LoginButton />
                                </NavDropdown.Item>
                            )}
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
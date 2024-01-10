import Container from "react-bootstrap/esm/Container";
import Jumbotron from "./Jumbotron";
import AllTheBooks from "./AllTheBooks";

function Welcome(){
    return(
        <>
        <Container style={{minHeight:'80vh'}}>
        <Jumbotron/>
        <AllTheBooks/>
        </Container>
        </>
    )

}
export default Welcome;
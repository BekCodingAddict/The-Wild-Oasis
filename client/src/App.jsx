import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Hading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in Out</Heading>
        <Button onClick={() => alert("check in")}>Check In</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

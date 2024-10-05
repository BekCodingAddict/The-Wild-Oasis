import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>The Wild Oasis</h1>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

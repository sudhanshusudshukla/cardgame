import { AppContainer, CardHead, Container } from "./App.styled.js";
import Cards from "./components/Cards";

function App() {
  return (
    <Container>
      <AppContainer>
        <CardHead>Card Game</CardHead>
      </AppContainer>
      <Cards />
    </Container>
  );
}

export default App;

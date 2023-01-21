import styled, { ThemeProvider } from "styled-components";
import Credits from "./Credits";
import SectionTitle from "./shared-components/SectionTitle";
import theme from "./theme";

// import Button from "./shared-components/NumberInput";

const AppContainer = styled.div`
  // background-color: #023047;
  padding: 24px;
`;

const Title = styled.h1``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Title>Calculadora de Pesos</Title>

        {/* Move it to first step */}
        <SectionTitle title='Peso e barra' number={1} />

        <Credits />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

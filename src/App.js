import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Credits from "./Credits";
import NavButtons from "./NavButtons";
import WeightAndBarbellDetails from "./steps/WeightAndBarbellDetails";
import theme from "./theme";

// import Button from "./shared-components/NumberInput";

const AppContainer = styled.div`
  padding: 24px;
  height: 100%;
`;

const Title = styled.h1``;

const Steps = {
  WeightAndBarbellDetails: 0,
  Percentages: 1,
  Result: 2,
};

const App = () => {
  const [step, setStep] = useState(Steps.WeightAndBarbellDetails);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Title>Calculadora de Pesos</Title>

        {step === Steps.WeightAndBarbellDetails && <WeightAndBarbellDetails />}

        <button onClick={() => setStep((currStep) => currStep - 1)}>
          prev
        </button>
        <button onClick={() => setStep((currStep) => currStep + 1)}>
          next
        </button>

        <NavButtons onBack={console.log} onNext={console.log} />

        <Credits />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

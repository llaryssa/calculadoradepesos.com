import styled from "styled-components";
import { MeasurementUnit } from "../../constants";
import FormField from "../../shared-components/FormField";
import NumberInput from "../../shared-components/NumberInput";
import SectionTitle from "../../shared-components/SectionTitle";
import ToggleButtonGroup from "../../shared-components/ToggleButtonGroup";
import BarbellSelector from "./BarbellSelector";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MEASUREMENT_UNIT_OPTIONS = [
  { label: "Kg", value: MeasurementUnit.Kilograms },
  { label: "Lb", value: MeasurementUnit.Pounds },
];

const WeightAndBarbellDetails = () => {
  return (
    <Container>
      <SectionTitle title='Peso e barra' number={1} />

      <FormField title='Qual o seu RM?'>
        <NumberInput
          style={{ marginRight: "16px", width: "80px" }}
          defaultValue={100}
        />
        <ToggleButtonGroup options={MEASUREMENT_UNIT_OPTIONS} />
      </FormField>

      <FormField title='Qual a barra utilizada?'>
        <BarbellSelector />
      </FormField>

      <FormField title='O resultado deve ser mostrado em:'>
        <ToggleButtonGroup
          options={MEASUREMENT_UNIT_OPTIONS}
          defaultValue={MeasurementUnit.Pounds}
        />
      </FormField>
    </Container>
  );
};

export default WeightAndBarbellDetails;

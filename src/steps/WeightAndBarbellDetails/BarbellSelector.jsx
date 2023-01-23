import styled from "styled-components";
import { Barbell } from "../../constants";
import ToggleButtonGroup from "../../shared-components/ToggleButtonGroup";

const OptionLabelWithSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionLabelWithSubtitle = ({ label, subtitle }) => {
  return (
    <OptionLabelWithSubtitleContainer>
      <div>{label}</div>
      <div
        style={{
          fontStyle: "italic",
          fontSize: 12,
          fontWeight: "lighter",
        }}
      >
        {subtitle}
      </div>
    </OptionLabelWithSubtitleContainer>
  );
};

const BarbellSelector = () => (
  <ToggleButtonGroup
    options={[
      {
        label: (
          <OptionLabelWithSubtitle label='Feminina' subtitle='15kg/35lb' />
        ),
        value: Barbell.Female,
      },
      {
        label: (
          <OptionLabelWithSubtitle label='Masculina' subtitle='20kg/45lb' />
        ),
        value: Barbell.Male,
      },
      {
        label: <OptionLabelWithSubtitle label='Junior' subtitle='10kg/22lb' />,
        value: Barbell.Junior,
      },
    ]}
  />
);

export default BarbellSelector;

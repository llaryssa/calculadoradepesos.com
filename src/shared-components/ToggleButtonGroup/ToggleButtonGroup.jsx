import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  gap: 12px;
`;

const Option = styled.div`
  background-color: ${(props) => props.theme.darkerBackground};
  border-radius: 3px;
  padding: 8px 16px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? `0 0 0 2px ${props.theme.highlight}` : "none"};
`;

// props: { label, value }

const ToggleButtonGroup = ({ options = [], defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue ?? options?.[0]?.value);

  const onValueChange = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <Container>
      {options.map(({ label, value }) => (
        <Option
          selected={selected === value}
          onClick={() => onValueChange(value)}
        >
          {label}
        </Option>
      ))}
    </Container>
  );
};

export default ToggleButtonGroup;

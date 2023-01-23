import styled from "styled-components";

const Input = styled.input`
  height: 36px;
  font-size: 22px;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.darkerBackground};
`;

const NumberInput = (props) => <Input type='number' {...props} />;

export default NumberInput;

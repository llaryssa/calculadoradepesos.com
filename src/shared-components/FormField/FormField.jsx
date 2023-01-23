import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.text};
  margin: 0;
`;

const FormField = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <div>{children}</div>
  </Container>
);

export default FormField;

import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

const Number = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 2px;
  border: 2px solid;
  text-align: center;
  font-size: 22px;
  color: ${(props) => props.theme.subtitle};
`;

const SectionTitle = ({ title, number }) => (
  <Container>
    {number && <Number>{number}</Number>}
    <h2>{title}</h2>
  </Container>
);

export default SectionTitle;

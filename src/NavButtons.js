import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import Button from "./shared-components/NumberInput";

const Container = styled.div`
  display: inline-flex;
  gap: 8px;
  position: fixed;
  bottom: 24px;
`;

const Button = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 2px;
  border: 2px solid;
  text-align: center;
  font-size: 36px;
  color: ${(props) => props.theme.subtitle};
  background-color: ${(props) => props.theme.darkerBackground};
  cursor: pointer;
`;

const NavButtons = ({ onBack, onNext }) => {
  return (
    <Container>
      <Button onClick={onBack}>
        <FontAwesomeIcon icon={solid("arrow-left")} />
      </Button>
      <Button onClick={onNext}>
        <FontAwesomeIcon icon={solid("arrow-right")}  />
      </Button>
    </Container>
  );
};

export default NavButtons;

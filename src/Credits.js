import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Container = styled.div`
  font-style: italic;
  color: ${(props) => props.theme.subtitle};
`;

const Credits = () => {
  return (
    <Container>
      Feito com <FontAwesomeIcon icon={solid("heart")} color='#ff0060' /> por
      @llaryssa
    </Container>
  );
};

export default Credits;

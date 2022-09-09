import styled from "styled-components";
import BackgroundNotFound from "../../assets/images/notFound.webp";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundNotFound});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

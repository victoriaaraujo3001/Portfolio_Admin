import styled from "styled-components";
import Background from "../../assets/images/login.jpg";
import Logo from "../../assets/images/comece.png";

export const Container = styled.body`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: #e5fcf5;

  @media (min-widht: 300px) {
    flex-direction: column;
  }
`;

export const BackgroundImage = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-widht: 300px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextAdmin = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  color: #27187e;

  margin-top: 5%;
`;

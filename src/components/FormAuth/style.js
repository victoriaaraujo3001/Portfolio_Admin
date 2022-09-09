import styled from "styled-components";
import Background from "../../assets/images/login.webp";
import Logo from "../../assets/images/comece.png";

export const BackgroundImage = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const LogoImage = styled.div`
  width: 50%;
  height: 40%;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Fields = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 10%;
  width: 60%;
  height: 65%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 75%;
`;

export const Input = styled.input`
  font-family: "Fira Sans", sans-serif;
  color: #758bfd;
  height: 30px;
  width: 100%;
  font-size: 1rem;
  border-bottom: 2px solid #27187e;
  border-radius: 2px;
  margin-bottom: 12px;
  margin-top: 8px;
  margin-right: 1%;
  outline: none;
  background-color: transparent;
  padding: 0 2% 0 2%;
`;

export const DivIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Footer = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Loading = styled.div`
  height: 20%;
  display: flex;
  align-self: center;
  justify-content: center;
`;
// -------------------------------------------------------- Texts -------------------------------------------------------------------
export const Label = styled.span`
  font-family: "Questrial", sans-serif;
  font-size: 1.5rem;
  color: #27187e;
`;

export const Links = styled.span`
  font-family: "Questrial", sans-serif;
  font-size: 1.2em;
  color: #27187e;
`;

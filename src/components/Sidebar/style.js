import styled from "styled-components";
import logoHeader from "../../assets/images/logo.png";

export const LogoHeader = styled.div`
  margin-top: 1%;
  width: 100%;
  height: 100px;
  background-image: url(${logoHeader});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ButtonMenu = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const IconsItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  gap: 5px;
  width: 100%;
`;

export const ItemMenu = styled.span`
  font-family: "Questrial", sans-serif;
  font-size: 1.2rem;
  color: #27187e;
`;


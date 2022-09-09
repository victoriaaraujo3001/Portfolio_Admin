import styled from "styled-components";
import imagem from "../../assets/images/avatar.png";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #758bfd;
`;

export const ContainerInfo = styled.div`
  width: 35%;
  height: 85%;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 10px 16px;
  border-radius: 10px;
  background-color: #f1f2f6;
`;

export const ContainerMenu = styled.div`
  margin-left: 2%;
  width: 5%;
  height: 80%;
  padding: 1% 1% 1% 1.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 10px 16px;
  border-radius: 10px;
  background-color: #f1f2f6;
`;

export const ContainerName = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const ContainerRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const ContainerCenter = styled.div`
  width: 25%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 10px 16px;
`;

export const ContainerNotify = styled.div`
  width: 18%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 10px 16px;
  border-radius: 10px;
  background-color: #f1f2f6;
  border-radius: 10px;
`;

export const Avatar = styled.div`
  width: 70px;
  height: 45px;
  border-radius: 99px;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Adm = styled.span`
  font-family: "Comfortaa", cursive;
  font-size: 0.9rem;
  font-weight: 800;
  color: #a2a2a2;
`;

export const Name = styled.span`
  font-family: "Comfortaa", cursive;
  font-size: 1em;
  font-weight: 800;
  color: #27187e;
`;

export const ButtonNotify = styled.button`
  width: 35%;
  height: 80%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  box-sizing: border-box;
  font-weight: 700;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  & :focus:before {
    content: "";
    left: calc(-1 * 0.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1 * 0.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:focus:not(:focus-visible):before {
    border-width: 0;
  }

  &:not(:disabled):active {
    transform: translateY(0.125rem);
  }
`;

export const ContainerIcon = styled.div`
  width: 10%;
  height: 100%;
  background-color: #f1f2f6;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconSearch = styled(BsSearch)`
  color: #27187e;
  font-size: 20px;
`;

export const IconNotify = styled(IoMdNotificationsOutline)`
  color: #27187e;
  font-size: 25px;
`;

export const IconChat = styled(IoChatbubbleEllipsesOutline)`
  color: #27187e;
  font-size: 25px;
`;
export const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  outline: none;
  border: none;
  padding: 0 2% 0 5%;
  font-size: 0.8em;
  font-family: "Fira Sans", sans-serif;
  color: #758bfd;
`;

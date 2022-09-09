import styled from "styled-components";

export const Form = styled.form`
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 95%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  height: 90%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10%;
`;

export const ButtonNext = styled.button`
  font-family: "Comfortaa", cursive;
  font-size: 1em;
  align-self: center;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 40%;
  height: 75%;
  color: #f1f2f6;
  background-color: #27187e;
`;

export const ButtonCancel = styled.button`
  font-family: "Comfortaa", cursive;
  font-size: 1em;
  align-self: center;
  border: 1px solid #27187e;
  outline: none;
  border-radius: 4px;
  width: 40%;
  height: 75%;
  background-color: #f1f2f6;
  color: #27187e;
`;

export const Input = styled.input`
  font-family: "Comfortaa", cursive;
  color: #758bfd;
  height: 30px;
  width: 100%;
  font-size: 0.9rem;
  border-bottom: 2px solid #27187e;
  border-radius: 2px;
  margin-bottom: 12px;
  margin-top: 8px;
  margin-right: 1%;
  outline: none;
  background-color: transparent;
  padding: 0 2% 0 1%;
  ::placeholder {
    color: #758bfd;
    font-weight: 600;
  }
`;

export const Loading = styled.div`
  height: 20%;
  display: flex;
  align-self: center;
  justify-content: center;
  border: 2px solid green;
`;

export const Label = styled.label`
  font-family: "Questrial", sans-serif;
  font-size: 1.2rem;
  color: #27187e;
`;

export const ErroMessage = styled.span`
  align-self: flex-end;
  font-family: "Comfortaa", cursive;
  font-size: 0.7rem;
  color: #f2593a;
  font-weight: bold;
  border: 1px solid #f2593a;
  border-radius: 4px;
  padding: 1%;
`;

export const SettingsTitle = styled.span`
  align-self: center;
  font-family: "Comfortaa", cursive;
  font-size: 2.5rem;
  color: #758bfd;
`;

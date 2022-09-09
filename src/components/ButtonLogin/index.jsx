import React from "react";
import { Button } from "./style";

export const ButtonLogin = ({ type, infoText, func }) => {
  return <Button type={type} onClick={func}>{infoText}</Button>;
};

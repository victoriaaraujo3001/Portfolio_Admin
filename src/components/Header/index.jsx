import { Text } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar";
import {
  Adm,
  Avatar,
  ButtonNotify,
  ContainerCenter,
  ContainerHeader,
  ContainerIcon,
  ContainerInfo,
  ContainerMenu,
  ContainerName,
  ContainerNotify,
  ContainerRight,
  IconChat,
  IconNotify,
  IconSearch,
  InputSearch,
  Name,
} from "./styled";

export const Header = () => {
  const Admin = {
    id: 1,
    name: "Ketlen Victoria",
    type: "Admin",
  };

  return (
    <ContainerHeader>
      <ContainerMenu>
        <Sidebar />
      </ContainerMenu>
      <ContainerCenter>
        <InputSearch type={"text"} />
        <ContainerIcon>
          <IconSearch />
        </ContainerIcon>
      </ContainerCenter>
      <ContainerRight>
        <ContainerInfo>
          <Avatar />
          <ContainerName>
            <Text
              style={{
                fontFamily: "Comfortaa ,cursive",
                fontSize: "1em",
                fontWeight: "800",
                color: "#27187e",
              }}
            >
              {Admin.name}
            </Text>
            <Adm>{Admin.type}</Adm>
          </ContainerName>
        </ContainerInfo>
        <ContainerNotify>
          <ButtonNotify>
            <IconNotify />
          </ButtonNotify>
          <ButtonNotify>
            <IconChat />
          </ButtonNotify>
        </ContainerNotify>
      </ContainerRight>
    </ContainerHeader>
  );
};

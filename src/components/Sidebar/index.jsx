import {
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiAdminLine, RiMenu2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsFillArrowDownSquareFill,
  BsCalendar2Check,
  BsCreditCard2Back,
  BsCalendarDate,
  BsPersonCircle,
  BsChatDots,
} from "react-icons/bs";
import {
  MdOutlineSpaceDashboard,
  MdProductionQuantityLimits,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { SiGooglemeet } from "react-icons/si";

import { useRef } from "react";
import { LogoHeader, ButtonMenu, ItemMenu, Icons, IconsItem } from "./style";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <ButtonMenu ref={btnRef} onClick={onOpen}>
        <RiMenu2Line color="#27187e" size={25} />
      </ButtonMenu>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        closeOnEsc={true}
      >
        <DrawerContent bg="#f1f2f6" style={{ width: "15%", margin: "0" }}>
          <DrawerCloseButton background="#aeb8fe">
            <AiOutlineClose size={20} color="#27187e" />
          </DrawerCloseButton>
          <DrawerHeader>
            <LogoHeader />
          </DrawerHeader>
          <DrawerBody
            overflowY="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "6px",
                borderRadius: "10px",
                backgroundColor: "#aeb8fe",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                backgroundColor: `#230`,
              },
            }}
          >
            <Accordion
              allowMultiple
              height="100%"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Icons>
                    <MdOutlineSpaceDashboard size={22} color="#27187e" />
                    <ItemMenu>Dashoard</ItemMenu>
                  </Icons>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <IconsItem>
                    <MdProductionQuantityLimits size={22} color="#27187e" />
                    <Link to="/products">
                      <Text
                        color="#27187e"
                        fontSize="14px"
                        fontFamily="Comfortaa"
                        fontWeight={600}
                        textAlign="center"
                      >
                        Products
                      </Text>
                    </Link>
                  </IconsItem>
                  <IconsItem>
                    <GiReceiveMoney size={22} color="#27187e" />
                    <Text
                      color="#27187e"
                      fontSize="14px"
                      fontFamily="Comfortaa"
                      fontWeight={600}
                      textAlign="center"
                    >
                      CRM
                    </Text>
                  </IconsItem>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Icons>
                    <BsCalendar2Check size={20} color="#27187e" />
                    <ItemMenu>Calendar</ItemMenu>
                  </Icons>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <IconsItem>
                    <MdOutlineDashboardCustomize size={15} color="#27187e" />
                    <Text
                      color="#27187e"
                      fontSize="14px"
                      fontFamily="Comfortaa"
                      fontWeight={600}
                      textAlign="center"
                    >
                      Kanban
                    </Text>
                  </IconsItem>
                  <IconsItem>
                    <BsCalendarDate size={15} color="#27187e" />
                    <Text
                      color="#27187e"
                      fontSize="14px"
                      fontFamily="Comfortaa"
                      fontWeight={600}
                      textAlign="center"
                    >
                      Events
                    </Text>
                  </IconsItem>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Icons>
                    <BsChatDots size={20} color="#27187e" />
                    <ItemMenu>Messages</ItemMenu>
                  </Icons>
                  <AccordionIcon>
                    <BsFillArrowDownSquareFill />
                  </AccordionIcon>
                </AccordionButton>
                <AccordionPanel>
                  <IconsItem>
                    <SiGooglemeet size={15} color="#27187e" />
                    <Text
                      color="#27187e"
                      fontSize="14px"
                      fontFamily="Comfortaa"
                      fontWeight={600}
                      textAlign="center"
                    >
                      Meetings
                    </Text>
                  </IconsItem>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Icons>
                    <BsCreditCard2Back size={20} color="#27187e" />
                    <ItemMenu>Users</ItemMenu>
                  </Icons>
                  <AccordionIcon>
                    <BsFillArrowDownSquareFill />
                  </AccordionIcon>
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <IconsItem>
                    <RiAdminLine size={15} color="#27187e" />
                    <Text
                      color="#27187e"
                      fontSize="14px"
                      fontFamily="Comfortaa"
                      fontWeight={600}
                      textAlign="center"
                    >
                      Admin
                    </Text>
                  </IconsItem>
                  <IconsItem>
                    <BsPersonCircle size={15} color="#27187e" />
                    <Text
                      color="#27187e"
                      fontSize="14px"
                      fontFamily="Comfortaa"
                      fontWeight={600}
                      textAlign="center"
                    >
                      Profile
                    </Text>
                  </IconsItem>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <Accordion
              borderRadius="10px"
              border="none"
              width="100%"
              defaultIndex={[1]}
              allowMultiple
            >
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Icons>
                    <AiOutlineInfoCircle size={20} color="#27187e" />
                    <ItemMenu>Help</ItemMenu>
                  </Icons>
                  <AccordionIcon color="#f1f2f6" />
                </AccordionButton>
              </AccordionItem>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Link to="/settings">
                    <Icons>
                      <AiOutlineSetting size={20} color="#27187e" />
                      <ItemMenu>Settings</ItemMenu>
                    </Icons>
                  </Link>
                  <AccordionIcon color="#f1f2f6" />
                </AccordionButton>
              </AccordionItem>
            </Accordion>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

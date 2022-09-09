import styled from "styled-components";
import { GiPiggyBank } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { BsCartCheckFill, BsFileEarmarkPersonFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TopContainer = styled.div`
  margin-top: 1%;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Faturamento = styled.div`
  width: 48%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

export const ContainerInfo = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContainerIcon = styled.div`
  width: 20%;
  height: 50%;
  border-radius: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const PigBank = styled(GiPiggyBank)`
  font-size: 40px;
  color: #341c69;
`;

export const ChartIcon = styled(FaChartLine)`
  font-size: 30px;
  color: #348551;
`;

export const Cart = styled(BsCartCheckFill)`
  font-size: 30px;
  color: #136c9c;
`;

export const Seller = styled(BsFileEarmarkPersonFill)`
  font-size: 30px;
  color: #9d1407;
`;

export const Money = styled(MdAttachMoney)`
  font-size: 20px;
  color: #348551;
`;

export const CenterContainer = styled.div`
  margin-left: 1%;
  width: 98%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

export const BottomContainer = styled.div`
  width: 98%;
  height: 37%;
  margin-left: 1%;
  margin-top: 0.5%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const RightContainer = styled.div`
  width: 99%;
  height: 78%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

export const Title = styled.span`
 font-family: "Fira sans", sans-serif;
 font-weight: bold;
 font-size: 1.3em;
 color: #27187e;
`;

export const Value = styled.span`
 font-family: "Fira sans", sans-serif;
 font-size: 1rem;
 color: #27187e;
`;

export const Desc = styled.span`
 font-family: "Comfortaa", cursive;
 font-size: 1rem;
 color: #a1a1a1;
`;
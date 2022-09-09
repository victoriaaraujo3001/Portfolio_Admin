import {
  BottomContainer,
  Cart,
  CenterContainer,
  ChartIcon,
  Container,
  ContainerIcon,
  ContainerInfo,
  Desc,
  Faturamento,
  FirstContainer,
  Money,
  PigBank,
  RightContainer,
  SecondContainer,
  Seller,
  Title,
  TopContainer,
  Value,
} from "./style";
import { Chart } from "react-google-charts";
import { dataProd, optionsProd, vendas } from "./Charts/products";
import { dataSel, optionsSel, sellers } from "./Charts/sellers";
import { dataFat, faturamento, media, optionsFat } from "./Charts/faturamento";

export const Products = () => {
  return (
    <Container>
      <FirstContainer>
        <TopContainer>
          <Faturamento>
            <div
              style={{
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ContainerIcon>
                <PigBank />
              </ContainerIcon>
              <ContainerInfo>
                <Title>{faturamento.title}</Title>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    height: "30%",
                  }}
                >
                  <Money />
                  <Value>{faturamento.value}</Value>
                </div>
                <Desc>{faturamento.description}</Desc>
              </ContainerInfo>
            </div>
          </Faturamento>
          <Faturamento>
            <div
              style={{
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ContainerIcon>
                <ChartIcon />
              </ContainerIcon>
              <ContainerInfo>
                <Title>{media.title}</Title>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    height: "30%",
                  }}
                >
                  <Money />
                  <Value>{media.value}</Value>
                </div>
                <Desc>{media.description}</Desc>
              </ContainerInfo>
            </div>
          </Faturamento>
        </TopContainer>
        <CenterContainer>
          <Chart
            chartType="ComboChart"
            width="98%"
            height="98%"
            data={dataProd}
            options={optionsProd}
          />
        </CenterContainer>
        <BottomContainer>
          <Chart
            chartType="ScatterChart"
            width="100%"
            height="100%"
            data={dataFat}
            options={optionsFat}
          />
        </BottomContainer>
      </FirstContainer>
      <SecondContainer>
        <TopContainer>
          <Faturamento>
            <div
              style={{
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ContainerIcon>
                <Cart />
              </ContainerIcon>
              <ContainerInfo>
                <Title>{vendas.title}</Title>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    height: "30%",
                  }}
                >
                  <Value>{vendas.value}</Value>
                </div>
                <Desc>{vendas.description}</Desc>
              </ContainerInfo>
            </div>
          </Faturamento>
          <Faturamento>
            <div
              style={{
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ContainerIcon>
                <Seller />
              </ContainerIcon>
              <ContainerInfo>
                <Title>{sellers.title}</Title>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    height: "30%",
                  }}
                >
                  <Value>{sellers.value}</Value>
                </div>
                <Desc>{sellers.description}</Desc>
              </ContainerInfo>
            </div>
          </Faturamento>
        </TopContainer>
        <RightContainer>
          <Chart
            chartType="BarChart"
            width="100%"
            height="100%"
            data={dataSel}
            options={optionsSel}
          />
        </RightContainer>
      </SecondContainer>
    </Container>
  );
};

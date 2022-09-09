import { Header } from "../../components/Header";

export const Home = (props) => {
  return (
    <>
      <Header />
      <main>{props.component}</main>
    </>
  );
};

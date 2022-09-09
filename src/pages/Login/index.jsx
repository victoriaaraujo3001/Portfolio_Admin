import { FormAuth } from "../../components/FormAuth";
import { BackgroundImage, Container, Form, TextAdmin } from "./style";

export function Login() {
  return (
    <Container>
      <BackgroundImage />
      <Form>
        <TextAdmin>Bem-vindo Admin</TextAdmin>
        <FormAuth />
      </Form>
    </Container>
  );
}

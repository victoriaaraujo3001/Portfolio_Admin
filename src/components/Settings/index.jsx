import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import * as Yup from "yup";
import {
  ButtonCancel,
  ButtonNext,
  Buttons,
  ErroMessage,
  Fields,
  Form,
  Input,
  Inputs,
  Label,
  SettingsTitle,
} from "./style";
export const Settings = () => {
  const navigate = useNavigate();

  const validate = Yup.object().shape({
    user: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  return (
    <>
      <Formik
        initialValues={{
          user: "",
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Fields>
              <SettingsTitle>Update data</SettingsTitle>
              <Inputs>
                <Label>User</Label>
                <Input
                  type={"text"}
                  name="user"
                  spellCheck="false"
                  placeholder="Type your new username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user}
                />
                {errors.user && touched.user ? (
                  <ErroMessage>user is required</ErroMessage>
                ) : null}
                <Label>Email</Label>
                <Input
                  type={"email"}
                  spellCheck="false"
                  name="email"
                  placeholder="Type your new e-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <ErroMessage>email is required</ErroMessage>
                ) : null}
                <Label>Password</Label>
                <Input
                  type={"password"}
                  name="password"
                  spellCheck="false"
                  placeholder="Type your new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <ErroMessage>{errors.password}</ErroMessage>
                ) : null}
                <Buttons>
                  <ButtonCancel type={"reset"}>Cancel</ButtonCancel>
                  {!isSubmitting ? (
                    <ButtonNext type={"submit"}>Update</ButtonNext>
                  ) : (
                    <TailSpin
                      height="40"
                      width="40"
                      color="#27187e"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  )}
                </Buttons>
              </Inputs>
            </Fields>
          </Form>
        )}
      </Formik>
    </>
  );
};

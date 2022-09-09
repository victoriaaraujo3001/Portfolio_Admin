/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsEyeSlashFill } from "react-icons/bs";
import { Formik } from "formik";
import {
  Fields,
  Inputs,
  Label,
  Input,
  DivIcons,
  Footer,
  Links,
  Loading,
} from "./style";
import { ButtonLogin } from "../ButtonLogin";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { api } from "../../services/api";

export const FormAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  async function ValidateUser(req, res, next) {
    try {
      const validation = await api.get("/users");
      setUser(validation.data);

      console.log(setUser(validation.data));
      res.status(200).send({ message: "dados:", validation });
    } catch (error) {
      console.log("erro:", error.message);

      res.status(500);
    }
  }
  useEffect(() => {
    ValidateUser();
  }, []);

  return (
    <>
      {/* <LogoImage /> */}
      {user.length ? <span>{user.login}</span> : (<h1>oiii</h1>)}
      {/* <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            navigate("/home");
          }, 4000);
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
          <Fields onSubmit={handleSubmit} autoComplete="off">
            <Inputs onSubmit={handleSubmit}>
              <Label>Login</Label>
              <DivIcons>
                <Input
                  type="text"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={user.login}
                  name="user"
                />
                <FaUser color="#27187e" size={24} />
              </DivIcons>
              <Label>Senha</Label>
              <DivIcons>
                <Input
                  type="password"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                />
                <BsEyeSlashFill color="#27187e" size={24} />
              </DivIcons>
              {!isSubmitting ? (
                <ButtonLogin type={"submit"} infoText={"Entrar"} />
              ) : (
                <Loading>
                  <InfinitySpin color="#27187e" height={100} width={160} />
                </Loading>
              )}
            </Inputs>
          </Fields>
        )}
      </Formik>
      <Footer>
        <Links>Not registered yet? Create an account</Links>
        <Link to="/home">
          <Links>Forgot password?</Links>
        </Link>
      </Footer> */}
    </>
  );
};


import { Link } from "react-router-dom";
import useRegisterModel from "../../model/useRegisterModel"; 
import InputField from "../../components/InputField/InputField";
import {
  H1,
  Main,
  BackgroundImage,
  Button,
  Container,
  Paragraph,
  ParagraphRegistration
} from "../Login/style";

import { Form } from "./style"

const RegisterView = ({formData, errors, handleChange, handleSubmit}: ReturnType<typeof useRegisterModel>) => {

  return (
    <Main>
      <Container>
        <BackgroundImage />

        <Form onSubmit={handleSubmit} noValidate>
          <H1>Go-Task - Cadastro</H1>
          <Paragraph>
            Preencha as informações abaixo para criar sua conta e começar a organizar suas tarefas de forma simples e eficiente.
          </Paragraph>

          <InputField
            label="Nome"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Seu nome completo"
          />

          <InputField
            label="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ex: example@example.com"
          />

          <InputField
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Crie uma senha"
          />

          <Button type="submit">Cadastrar</Button>

          <ParagraphRegistration>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </ParagraphRegistration>
        </Form>
      </Container>
    </Main>
  );
};

export default RegisterView;

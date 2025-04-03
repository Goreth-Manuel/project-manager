import { Link } from "react-router-dom";
import useLoginModel from "../../model/useLoginModel";
import InputField from "../../components/InputField/InputField";

import { 
  H1,
  Main, 
  Span,
  BackgroundImage, 
  Form, 
  Button, 
  Strong, 
  Container,
  Paragraph,
  LabelRemember,
  InputRemember,
  ParagraphRegistration
} from "./style";

const LoginView = ({formData, errors, handleChange, handleSubmit}:ReturnType<typeof useLoginModel>) => {
 
  return (
    <Main>
      <Container>
      <BackgroundImage/>

      <Form onSubmit={handleSubmit} noValidate>
        <H1>Go-Task</H1>
        <Paragraph>
          Seja benvindo a melhor plataforma de gestão de tarefas,<br/> aqui você organiza, prioriza e realiza. 
          <Strong> Entre agora!</Strong> 
        </Paragraph>
      
        <InputField
            label="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ex:. gorethmanuel0@gmail.com"
          />

          <InputField
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Digite sua senha"
  
          />

        <Span>
          <LabelRemember>
            <InputRemember type="checkbox" /> Remember me

          </LabelRemember>
          <a href=""> Forgot Password?</a>
        </Span>
        <br />

        <Button type="submit">
        Iniciar Sessão
        </Button> 

        <ParagraphRegistration>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </ParagraphRegistration>
      </Form>
      </Container>
    </Main>
  );
};

export default LoginView;

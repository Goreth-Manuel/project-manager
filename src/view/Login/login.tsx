import { Link } from "react-router-dom";
import { 
  H1,
  Main, 
  BackgroundImage, 
  Form, 
  Button, 
  Input, 
  Label,
  Strong, 
  Container,
  Paragraph,
  ParagraphRegistration
} from "./style";

const login = () => {
  return (
    <Main>
      <Container>
      <BackgroundImage></BackgroundImage>

      <Form>
        <H1>Go-Task</H1>
        <Paragraph>
          Seja benvindo a melhor plataforma de gestão de tarefas,<br/> aqui você organiza, prioriza e realiza. 
          <Strong> Entre agora!</Strong> 
        </Paragraph>
        {/* <h2>
          Organize, Priorize e Realize!
        </h2> */}

        <Label htmlFor="">E-mail</Label> <br />
        <Input
          name="email"
          type="email"
          placeholder="Ex:. gorethmanuel0@gmail.com"
          required
        /> <br />
        <Label htmlFor="">Password</Label><br />
        <Input
          name="password"
          placeholder="Digite sua senha"
        />
        <br />
        <small>
          <a href=""> Forgot Password?</a>
         
        </small>
        <br />

        <Button>
          Iniciar Sessão
        </Button> 
        <ParagraphRegistration>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </ParagraphRegistration>
      </Form>
      </Container>
      {/* <Button>Logar</Button> */}
    </Main>
  );
};

export default login;

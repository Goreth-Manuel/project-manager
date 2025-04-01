import { Button, Main, BackgroundImage, Form } from "./style";
const login = () => {
  return (
    <Main>
      <h1>login</h1>
      <BackgroundImage>Imagem</BackgroundImage>

      <Form>
        <h2>
          <span>Organize,</span> <br /> Priorize e Realize!
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Ex:. pedrofranco@gmail.com"
        />
        <input
          name="password"
          placeholder="Digite sua senha"
        />
        <small>
          Esqueceu a senha?
        </small>

        <button>
        Entrar
        </button>
        <button
          type="button"
          className="goToRegister"
        >
          Registar-se
        </button>
      </Form>

      <Button>Logar</Button>
    </Main>
  );
};

export default login;

import { Link } from "react-router-dom";
import useLoginModel from "../../model/useLoginModel";
import InputField from "../../components/InputField/InputField";
import { Typewriter } from "react-simple-typewriter";

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
  ParagraphRegistration,
} from "./style";
import { useTranslation } from "react-i18next";

const LoginView = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}: ReturnType<typeof useLoginModel>) => {
  const { i18n } = useTranslation();
  return (
    <Main>
      <Container>
        <BackgroundImage />

        <Form onSubmit={handleSubmit} noValidate>
          <H1>
            <Typewriter
              words={["Bem-vindo ao Go-Task!"]}
              // words={i18n.t("header_title", { returnObjects: true }) as string[] }
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </H1>
          <Paragraph>
            {i18n.t("the_best_task_management_platform")}
            <br /> {i18n.t("here_you_organize_prioritize_and_accomplish")}
            <Strong> {i18n.t("join_now")} </Strong>
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

          <Button type="submit">Iniciar Sessão</Button>

          <ParagraphRegistration>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </ParagraphRegistration>

          <select
            value={i18n.language}
            onChange={(e) => {
              const selectedLang = (e.target as HTMLSelectElement).value;
               i18n.changeLanguage(selectedLang);
            }}
            style={{
              position: "absolute",
              top: "40rem",
              right: "30rem",
              width: "4rem",
            }}
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="fr">KMB</option>
          </select>
        </Form>
      </Container>
    </Main>
  );
};

export default LoginView;

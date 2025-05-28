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

  const words = i18n.t("login.header_title", { returnObjects: true }) as string[];

  return (
    <Main>
      <Container>
        <BackgroundImage />

        <Form onSubmit={handleSubmit} noValidate>
          <H1>
            <Typewriter
              // words={["Bem-vindo ao Go-Task!"]}
              words={words}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </H1>
          <Paragraph>
            {i18n.t("login.the_best_task_management_platform")}
            <br /> {i18n.t("login.here_you_organize_prioritize_and_accomplish")}
            <Strong> {i18n.t("login.join_now")} </Strong>
          </Paragraph>

          <InputField
            label={i18n.t("login.email")}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ex:. gorethmanuel0@gmail.com"
          />

          <InputField
            label={i18n.t("login.password")}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Digite sua senha"
          />

          <Span>
            <LabelRemember>
              <InputRemember type="checkbox" />{ i18n.t("login.remember_me")}
            </LabelRemember>
            <a href=""> {i18n.t("login.forgot_password")}</a>
          </Span>
          <br />

          <Button type="submit">{i18n.t("login.login")}</Button>

          <ParagraphRegistration>
            {i18n.t("login.do_not_have_an_account")}
            <Link to="/register"> {i18n.t("login.register")}</Link>
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
            <option value="kmb">KMB</option>
          </select>
        </Form>
      </Container>
    </Main>
  );
};

export default LoginView;

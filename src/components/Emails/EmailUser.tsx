import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface IUser {
  user: string;
}

export const EmailUser = ({ user }: IUser) => (
  <Html>
    <Head />
    <Preview>Hola {user}!, Acá te dejo los links!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`http://matisanchezsorondo.com/_next/image?url=%2Fimgs%2Flogo.webp&w=1080&q=75`}
          width="170"
          height="120"
          alt="Logo"
          style={logo}
        />
        <Text style={title}>Hola {user}</Text>
        <Text style={paragraph}>
          Te dejo los links de la app y del grupo de whatsapp para que no los
          pierdas
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href={
              "https://app.harbiz.io/checkout-form/matiassanchezsorondo?product=invitation&tags%5B0%5D=pagina%2520web&lang=es"
            }
          >
            Aplicación
          </Button>
        </Section>
        <Section style={btnContainer}>
          <Button
            style={button}
            href="https://chat.whatsapp.com/JVc0d16WENX5DdXw5rPC7F"
          >
            Grupo de whatsapp
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailUser;

const main = {
  backgroundColor: "#000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "20px",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "100%",
  height: "100%",
  minWidth: "500px",
  backgroundColor: "#ffff",
  borderRadius: "20px",
};

const title = {
  fontSize: "22px",
  color: "#000",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const logo = {
  width: "360px",
  height: "120px",
  borderRadius: "15px",
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "center" as const,
  color: "#000",
  fontWeight: "bold",
};

const btnContainer = {
  textAlign: "center" as const,
  width: "300px",
  margin: "10px auto",
};

const button = {
  backgroundColor: "#000",
  borderRadius: "20px",
  color: "#fff",
  fontSize: "16px",
  fontStyle: "italic",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "10px 20px",
  marginBlock: "10px",
};

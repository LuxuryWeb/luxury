import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface IUser {
  user: string;
  dni: string;
  email: string;
}

export const EmailAdmin = ({ user, dni, email }: IUser) => (
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
        <Section>
          <Text style={title}>¡Hola Matias!</Text>
          <Text style={subTitle}>{user} adquirio un plan</Text>
        </Section>

        <Section>
          <Text style={paragraph}>Datos del cliente</Text>
          <Row style={row}>
            <Column style={column}>
              <Text style={paragraph}>Nombre</Text>
              <Text style={paragraph}>{user}</Text>
            </Column>
            <Column style={column}>
              <Text style={paragraph}>Email</Text>
              <Text style={paragraph}>{email}</Text>
            </Column>
            <Column style={column}>
              <Text style={paragraph}>Dni</Text>
              <Text style={paragraph}>{dni}</Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailAdmin;

const main = {
  backgroundColor: "#000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "20px",
};

const container = {
  margin: "0 auto",
  width: "100%",
  height: "100%",
  minWidth: "900px",
  padding: "20px 0 48px",
  backgroundColor: "#ffff",
  borderRadius: "20px",
};

const logo = {
  width: "500px",
  height: "160px",
  borderRadius: "15px",
  margin: "0 auto",
};

const row = {
  margin: "0 auto",
};

const column = {
  width: "300px",
};

const subTitle = {
  fontSize: "18px",
  color: "#000",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const title = {
  fontSize: "22px",
  color: "#000",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "center" as const,
  color: "#000",
  fontWeight: "bold",
};

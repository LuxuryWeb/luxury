import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface IUser {
  user: string;
}

export const EmailAdmin = ({ user }: IUser) => (
  <Html>
    <Head />
    <Preview>{user} se ha unido a Luxury Gold!</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans px-2">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
          <Section className="mt-[32px]">
            <Img
              src={`https://www.luxurygold.click/imgs/logo.png`}
              width="200"
              height="120"
              alt="Vercel"
              className="my-0 mx-auto rounded-lg"
            />
          </Section>
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            <strong>{user}</strong> se ha unido a Luxury Gold
          </Heading>
          <Text className="text-black text-center text-[14px] leading-[24px]">
            Tenes que actualizar su status para que pueda acceder al curso.
          </Text>
          <Section className="text-center mt-[32px] mb-[32px]">
            <Button
              className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-8 py-3"
              href={"https://www.luxurygold.click/dashboard"}
            >
              Ir al dashboard
            </Button>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailAdmin;

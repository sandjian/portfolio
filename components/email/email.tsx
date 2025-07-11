import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Row,
  Column,
  Hr,
  Tailwind,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject?: string; 
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <Tailwind>
      <Html lang="es">
        <Head />
        <Body className="bg-gray-100 font-sans p-4">
          <Container className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto my-12 border border-gray-200">
            <Section className="text-center my-6">
              <Text className="text-3xl font-bold text-gray-800">
                Nuevo Mensaje desde tu Portfolio
              </Text>
              <Text className="text-lg text-gray-600 mt-2">
                ¡Alguien quiere contactarte!
              </Text>
              <Hr className="border-t border-gray-200 my-6" />
            </Section>

            <Section className="space-y-4">
              <Row>
                <Column>
                  <Text className="text-gray-700 text-base font-semibold">
                    Nombre:
                  </Text>
                </Column>
                <Column className="text-right">
                  <Text className="text-gray-900 text-base">{name}</Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text className="text-gray-700 text-base font-semibold">
                    Email:
                  </Text>
                </Column>
                <Column className="text-right">
                  <Text className="text-gray-900 text-base">
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-600 underline"
                    >
                      {email}
                    </a>
                  </Text>
                </Column>
              </Row>

              {subject && ( 
                <Row>
                  <Column>
                    <Text className="text-gray-700 text-base font-semibold">
                      Empresa:
                    </Text>
                  </Column>
                  <Column className="text-right">
                    <Text className="text-gray-900 text-base">{subject}</Text>
                  </Column>
                </Row>
              )}
            </Section>

            <Section className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
              <Text className="text-gray-700 text-base font-semibold mb-2">
                Mensaje:
              </Text>
              <Text className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
                {message}
              </Text>
            </Section>

            <Section className="text-center mt-8 text-gray-500 text-sm">
              <Text>
                Este email fue enviado automáticamente desde el formulario de
                contacto de tu portfolio.
              </Text>
              <Text>
                Fecha de envío: {new Date().toLocaleDateString('es-ES', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short',
                  timeZone: 'America/Argentina/Buenos_Aires'
                })}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ContactFormEmail;
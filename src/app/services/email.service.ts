import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendPasswordResetEmail(email: string): Promise<void> {
    const apiKey = 'SUA_CHAVE_API_SENDGRID';
    const sendgridEndpoint = 'https://api.sendgrid.com/v3/mail/send';

    const emailData = {
      personalizations: [
        {
          to: [
            {
              email: email,
            },
          ],
        },
      ],
      from: {
        email: 'seu@email.com',
      },
      subject: 'Redefinição de Senha',
      content: [
        {
          type: 'text/plain',
          value: 'Aqui está o link para redefinir sua senha...',
        },
      ],
    };

    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };

    return axios
      .post(sendgridEndpoint, emailData, { headers })
      .then((response) => {
        console.log('Email enviado com sucesso!', response);
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
      });
  }
}
// falta o serviço de envio do email externo
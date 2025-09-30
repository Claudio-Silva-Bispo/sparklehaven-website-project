import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';  /* Instalar npm install nodemailer e npm i --save-dev @types/nodemailer */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Método não permitido' });

  const { name, email, phone, message, rating } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Gerar as estrelas visuais
  const stars = '⭐'.repeat(rating) + '☆'.repeat(5 - rating);

  try {
    await transporter.sendMail({
      from: `"Feedback Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DEST,
      subject: `Novo Feedback - ${rating} estrelas - ${phone}`,
      text: `
      📊 NOVO FEEDBACK RECEBIDO
      
      Avaliação: ${stars} (${rating}/5)
      
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      
      Depoimento:
      ${message}
      `,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">📊 Novo Feedback Recebido</h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 24px; margin: 0;">
            Avaliação: ${stars} <span style="color: #6b7280;">(${rating}/5)</span>
          </p>
        </div>
        
        <div style="margin: 20px 0;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Cargo:</strong> ${email}</p>
          <p><strong>Empresa:</strong> ${phone}</p>
        </div>
        
        <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <p style="margin: 0;"><strong>Depoimento:</strong></p>
          <p style="margin: 10px 0 0 0;">${message}</p>
        </div>
      </div>
      `
    });

    return res.status(200).json({ message: 'Feedback enviado com sucesso!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao enviar feedback' });
  }
}
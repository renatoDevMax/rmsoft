import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'renato.maximianojr@gmail.com',
        pass: 'bqfz uqum vbvm atgl'
      }
    });

    const mailOptions = {
      from: 'renato.maximianojr@gmail.com',
      to: 'renato.maximianojr@gmail.com',
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <h2>Nova mensagem de contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
} 
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { sendEmail, createEmailTemplate } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { name, email, phone, interest, message } = await request.json()

    console.log("Dados recebidos no contato:", { name, email, phone, interest, message })

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Nome, email e telefone são obrigatórios" }, { status: 400 })
    }

    // Criar cliente Supabase
    const supabase = createClient(
      "https://trpgnvhwfnqrvywqkdbu.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycGdudmh3Zm5xcnZ5d3FrZGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkzODMsImV4cCI6MjA2NDU3NTM4M30.iWhuc0SA30Mgu9qRjLFvmyOWP7aEEXPNIlz8RD4XXxA",
    )

    // Salvar dados na tabela de contatos
    const { data: insertData, error: dbError } = await supabase
      .from("contatos")
      .insert([
        {
          nome: name,
          email: email,
          telefone: phone,
          interesse: interest || null,
          mensagem: message || null,
          data_contato: new Date().toISOString(),
        },
      ])
      .select()

    if (dbError) {
      console.error("Erro ao salvar no banco:", dbError)
      return NextResponse.json({ error: "Erro ao salvar os dados: " + dbError.message }, { status: 500 })
    }

    console.log("Dados salvos no Supabase:", insertData)

    // Mapear valores de interesse para labels legíveis
    const interestLabels: { [key: string]: string } = {
      associado: "Tornar-se Associado",
      voluntario: "Ser Voluntário",
      doacao: "Fazer Doações",
      matricula: "Matrícula de Aluno",
      parceria: "Parceria Empresarial",
      outros: "Outros",
    }

    const interestLabel = interest ? interestLabels[interest] || interest : "Não informado"

    // Enviar email de notificação para a administração
    try {
      console.log("Enviando email de notificação para administração")

      const adminContent = `
        <div style="margin: 20px 0;">
          <div style="background: #92400e; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: white; text-align: center;">🔔 Novo Contato Recebido</h2>
          </div>
          
          <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #92400e;">
            <h3 style="color: #92400e; margin-bottom: 15px;">👤 Dados do Contato:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #92400e; width: 30%;">Nome:</td>
                <td style="padding: 8px 0; color: #374151;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #92400e;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #92400e;">Telefone:</td>
                <td style="padding: 8px 0; color: #374151;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #92400e;">Interesse:</td>
                <td style="padding: 8px 0; color: #374151;"><strong>${interestLabel}</strong></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #92400e;">Data:</td>
                <td style="padding: 8px 0; color: #374151;">${new Date().toLocaleString("pt-BR")}</td>
              </tr>
              ${
                message
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #92400e; vertical-align: top;">Mensagem:</td>
                <td style="padding: 8px 0; color: #374151; background: #f9fafb; border-radius: 4px; padding: 12px;">${message}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <h4 style="color: #16a34a; margin-bottom: 15px;">🚀 Ações Recomendadas:</h4>
            <ul style="margin: 0; padding-left: 20px; color: #15803d;">
              <li style="margin-bottom: 8px;">Entrar em contato em até 24 horas</li>
              <li style="margin-bottom: 8px;">Responder por email: <a href="mailto:${email}" style="color: #2563eb;">${email}</a></li>
              <li style="margin-bottom: 8px;">Ou ligar/WhatsApp: ${phone}</li>
              <li style="margin-bottom: 8px;">Registrar o atendimento no sistema</li>
            </ul>
          </div>
        </div>
      `

      await sendEmail({
        to: "coramdeo.aep@gmail.com",
        subject: "🔔 Novo Contato Recebido - Site Coram Deo",
        html: createEmailTemplate(adminContent),
      })

      console.log("Email de notificação enviado com sucesso")
    } catch (error) {
      console.error("Erro ao enviar email para administração:", error)
      // Não falha a operação se o email não for enviado
    }

    // Retornar resposta de sucesso
    return NextResponse.json({
      success: true,
      message: "Contato enviado com sucesso! Entraremos em contato em breve.",
      data: insertData,
    })
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json(
      {
        error: "Erro ao processar a solicitação: " + (error instanceof Error ? error.message : "Erro desconhecido"),
      },
      { status: 500 },
    )
  }
}

import { Resend } from "resend"

// Inicializar o Resend com a chave API
const resend = new Resend("re_JF32MeBu_4XrVZRCiLsvvnn68GnckMKHp")

type EmailProps = {
  to: string
  subject: string
  html: string
  from?: string
  attachments?: Array<{
    filename: string
    content: string
    type: string
  }>
}

export async function sendEmail({
  to,
  subject,
  html,
  from = "Coram Deo <onboarding@resend.dev>",
  attachments,
}: EmailProps) {
  try {
    // Sempre enviar apenas para o email da administração
    const adminEmail = "coramdeo.aep@gmail.com"

    // Construir o objeto de dados para o Resend
    const emailData: any = {
      from,
      to: adminEmail,
      subject,
      html,
    }

    // Adicionar anexos se existirem
    if (attachments && attachments.length > 0) {
      emailData.attachments = attachments
    }

    // Log para debug
    console.log("Enviando email para administração:", {
      from,
      to: adminEmail,
      subject,
      attachmentsCount: attachments?.length || 0,
    })

    // Enviar o email usando o Resend
    const { data, error } = await resend.emails.send(emailData)

    // Verificar se houve erro
    if (error) {
      console.error("Erro detalhado do Resend:", JSON.stringify(error, null, 2))
      throw new Error(`Falha ao enviar email: ${error.message}`)
    }

    // Log de sucesso
    console.log("Email enviado com sucesso:", data)
    return { success: true, data }
  } catch (error) {
    // Log detalhado do erro
    console.error("Erro completo ao enviar email:", error)

    // Verificar se é um erro do Resend ou outro tipo de erro
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao enviar email"

    // Lançar o erro para ser tratado pelo chamador
    throw new Error(errorMessage)
  }
}

// Template base para emails - Simplificado
export function createEmailTemplate(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Coram Deo</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #f59e0b;">
          <h1 style="color: #92400e; font-size: 24px; font-weight: bold; margin: 0;">Coram Deo</h1>
          <p style="color: #b45309; font-size: 14px; margin: 5px 0 0 0;">Associação de Ensino Integral</p>
        </div>
        
        ${content}
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p><strong>Coram Deo - Associação de Ensino Integral</strong></p>
          <p>Rua Romano Albe, 987 - São José, Caxias do Sul, RS - CEP: 95042-740</p>
          <p>WhatsApp: (54) 9 9950-1468 | Email: coramdeo.aep@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

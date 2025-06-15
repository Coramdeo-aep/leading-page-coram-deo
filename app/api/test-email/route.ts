import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET(request: Request) {
  try {
    // Inicializar o Resend com a chave API
    const resend = new Resend("re_hrEKpqGm_EbMgXQuW2oMWyXW26w38beu5")

    // Obter o email de destino da query string
    const { searchParams } = new URL(request.url)
    const to = searchParams.get("email") || "coramdeo.aep@gmail.com"

    // Enviar um email de teste simples
    const { data, error } = await resend.emails.send({
      from: "Coram Deo <onboarding@resend.dev>",
      to: [to],
      subject: "Teste de Email - Coram Deo",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #92400e;">Teste de Email - Coram Deo</h1>
            <p>Este é um email de teste enviado às ${new Date().toLocaleString("pt-BR")}.</p>
            <p>Se você está vendo esta mensagem, o sistema de email está funcionando corretamente.</p>
            <p>Detalhes técnicos:</p>
            <ul>
              <li>Serviço: Resend</li>
              <li>Remetente: onboarding@resend.dev</li>
              <li>Destinatário: ${to}</li>
            </ul>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">Este é um email automático de teste. Por favor, não responda.</p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Erro ao enviar email de teste:", error)
      return NextResponse.json({ success: false, error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: `Email de teste enviado com sucesso para ${to}`,
      data,
    })
  } catch (error) {
    console.error("Erro ao processar teste de email:", error)
    return NextResponse.json(
      {
        error: "Erro ao processar a solicitação: " + (error instanceof Error ? error.message : "Erro desconhecido"),
      },
      { status: 500 },
    )
  }
}

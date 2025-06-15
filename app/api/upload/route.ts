import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!file || !name || !email) {
      return NextResponse.json({ error: "Arquivo, nome e email são obrigatórios" }, { status: 400 })
    }

    // Verificar se é um PDF
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Apenas arquivos PDF são permitidos" }, { status: 400 })
    }

    // Criar cliente Supabase
    const supabase = createClient(
      "https://trpgnvhwfnqrvywqkdbu.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycGdudmh3Zm5xcnZ5d3FrZGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTkzODMsImV4cCI6MjA2NDU3NTM4M30.iWhuc0SA30Mgu9qRjLFvmyOWP7aEEXPNIlz8RD4XXxA",
    )

    // Gerar nome único para o arquivo
    const timestamp = new Date().getTime()
    const fileName = `${timestamp}_${file.name.replace(/\s+/g, "_")}`

    // Converter o arquivo para ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    // Fazer upload do arquivo para o Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("comprovantes")
      .upload(fileName, buffer, {
        contentType: file.type,
      })

    if (uploadError) {
      console.error("Erro ao fazer upload:", uploadError)
      return NextResponse.json({ error: "Erro ao fazer upload do arquivo" }, { status: 500 })
    }

    // Obter URL pública do arquivo
    const { data: urlData } = await supabase.storage.from("comprovantes").getPublicUrl(fileName)

    const fileUrl = urlData.publicUrl

    // Salvar dados na tabela de doações
    const { error: dbError } = await supabase.from("doacoes").insert([
      {
        nome: name,
        email: email,
        telefone: phone || null,
        comprovante: message || null,
        comprovante_pdf_url: fileUrl,
        comprovante_pdf_nome: file.name,
        data_doacao: new Date().toISOString(),
      },
    ])

    if (dbError) {
      console.error("Erro ao salvar no banco:", dbError)
      return NextResponse.json({ error: "Erro ao salvar os dados" }, { status: 500 })
    }

    // Enviar email com o Resend (implementação futura)
    // Aqui seria implementado o código para enviar o email com o anexo

    return NextResponse.json({
      success: true,
      message: "Comprovante enviado com sucesso",
      fileUrl,
    })
  } catch (error) {
    console.error("Erro ao processar upload:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}

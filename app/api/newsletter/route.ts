import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
try {
  const { nome, email } = await request.json()

  console.log("Dados recebidos na newsletter:", { nome, email })

  if (!nome || !email) {
    return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
  }

  // Validar formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Por favor, insira um email válido" }, { status: 400 })
  }

  // Criar cliente Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yrisqrcazpgoorcpzsae.supabase.co",
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyaXNxcmNhenBnb29yY3B6c2FlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODk5ODM0MCwiZXhwIjoyMDY0NTc0MzQwfQ.Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8Ej8",
  )

  // Verificar se o email já existe
  const { data: existingSubscriber, error: checkError } = await supabase
    .from("newsletter_subscribers")
    .select("email")
    .eq("email", email.toLowerCase())
    .single()

  if (checkError && checkError.code !== "PGRST116") {
    console.error("Erro ao verificar email existente:", checkError)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }

  if (existingSubscriber) {
    return NextResponse.json({ error: "Este email já está cadastrado em nossa newsletter" }, { status: 409 })
  }

  // Salvar dados na tabela newsletter_subscribers
  const { data: insertData, error: dbError } = await supabase
    .from("newsletter_subscribers")
    .insert([
      {
        nome: nome.trim(),
        email: email.toLowerCase().trim(),
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (dbError) {
    console.error("Erro ao salvar no banco:", dbError)
    return NextResponse.json({ error: "Erro ao cadastrar na newsletter: " + dbError.message }, { status: 500 })
  }

  console.log("Dados salvos no Supabase:", insertData)

  // Retornar resposta de sucesso
  return NextResponse.json({
    success: true,
    message: "Inscrição realizada com sucesso! Obrigado por se juntar à nossa newsletter.",
    data: insertData,
  })
} catch (error) {
  console.error("Erro ao processar newsletter:", error)
  return NextResponse.json(
    {
      error: "Erro ao processar a solicitação: " + (error instanceof Error ? error.message : "Erro desconhecido"),
    },
    { status: 500 },
  )
}
}

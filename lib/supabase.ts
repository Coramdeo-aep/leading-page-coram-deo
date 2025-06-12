import { createClient } from "@supabase/supabase-js"

// Cria uma instância singleton do cliente Supabase para uso no lado do cliente
let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClient(
      "https://yrisqrcazpgoorcpzsae.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyaXNxcmNhenBnb29yY3B6c2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTgzNDAsImV4cCI6MjA2NDU3NDM0MH0.uqiPV4LO1ipcOy9lkSLo3ARBGrXtcDXmNtFjX1Tvnkk",
    )
  }
  return supabaseClient
}

// Função para criar um cliente Supabase no lado do servidor
export function createServerSupabaseClient() {
  return createClient(
    "https://yrisqrcazpgoorcpzsae.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyaXNxcmNhenBnb29yY3B6c2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTgzNDAsImV4cCI6MjA2NDU3NDM0MH0.uqiPV4LO1ipcOy9lkSLo3ARBGrXtcDXmNtFjX1Tvnkk",
  )
}

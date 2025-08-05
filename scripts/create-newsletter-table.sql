-- Criação da tabela newsletter_subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Criar índices para melhorar a performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_subscribers(created_at);

-- Criar função para atualizar o timestamp de atualização
CREATE OR REPLACE FUNCTION update_newsletter_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger para atualização automática do timestamp
DROP TRIGGER IF EXISTS update_newsletter_modtime ON newsletter_subscribers;
CREATE TRIGGER update_newsletter_modtime
BEFORE UPDATE ON newsletter_subscribers
FOR EACH ROW
EXECUTE FUNCTION update_newsletter_modified_column();

-- Adicionar comentários à tabela para documentação
COMMENT ON TABLE newsletter_subscribers IS 'Armazena os assinantes da newsletter da Coram Deo';
COMMENT ON COLUMN newsletter_subscribers.id IS 'Identificador único do assinante';
COMMENT ON COLUMN newsletter_subscribers.nome IS 'Nome completo do assinante';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email do assinante (único)';
COMMENT ON COLUMN newsletter_subscribers.created_at IS 'Data e hora da inscrição';
COMMENT ON COLUMN newsletter_subscribers.updated_at IS 'Data e hora da última atualização';

-- Verificar se a tabela foi criada corretamente
SELECT 
    table_name, 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'newsletter_subscribers' 
ORDER BY ordinal_position;

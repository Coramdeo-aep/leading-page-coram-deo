-- Criação da tabela de contatos
CREATE TABLE IF NOT EXISTS contatos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  interesse TEXT,
  mensagem TEXT,
  data_contato TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  respondido BOOLEAN DEFAULT FALSE,
  data_resposta TIMESTAMP WITH TIME ZONE,
  observacoes TEXT
);

-- Criação da tabela de doações
CREATE TABLE IF NOT EXISTS doacoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  comprovante TEXT NOT NULL,
  valor DECIMAL(10,2),
  data_doacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  recibo_enviado BOOLEAN DEFAULT FALSE,
  data_recibo TIMESTAMP WITH TIME ZONE,
  observacoes TEXT
);

-- Criação da tabela de associados
CREATE TABLE IF NOT EXISTS associados (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cpf TEXT,
  endereco TEXT,
  cidade TEXT,
  estado TEXT,
  cep TEXT,
  data_associacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'ativo',
  tipo_associado TEXT,
  valor_contribuicao DECIMAL(10,2),
  observacoes TEXT
);

-- Criação da tabela de newsletters
CREATE TABLE IF NOT EXISTS newsletters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  nome TEXT,
  data_inscricao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ativo BOOLEAN DEFAULT TRUE
);

-- Criação de índices para melhorar a performance
CREATE INDEX IF NOT EXISTS idx_contatos_email ON contatos(email);
CREATE INDEX IF NOT EXISTS idx_doacoes_email ON doacoes(email);
CREATE INDEX IF NOT EXISTS idx_associados_email ON associados(email);
CREATE INDEX IF NOT EXISTS idx_newsletters_email ON newsletters(email);

-- Criação de função para atualizar o timestamp de atualização
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Adicionar coluna de atualização e trigger para cada tabela
ALTER TABLE contatos ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE doacoes ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE associados ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE newsletters ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Criar triggers para atualização automática do timestamp
DROP TRIGGER IF EXISTS update_contatos_modtime ON contatos;
CREATE TRIGGER update_contatos_modtime
BEFORE UPDATE ON contatos
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

DROP TRIGGER IF EXISTS update_doacoes_modtime ON doacoes;
CREATE TRIGGER update_doacoes_modtime
BEFORE UPDATE ON doacoes
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

DROP TRIGGER IF EXISTS update_associados_modtime ON associados;
CREATE TRIGGER update_associados_modtime
BEFORE UPDATE ON associados
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

DROP TRIGGER IF EXISTS update_newsletters_modtime ON newsletters;
CREATE TRIGGER update_newsletters_modtime
BEFORE UPDATE ON newsletters
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Adicionar comentários às tabelas para documentação
COMMENT ON TABLE contatos IS 'Armazena informações de contatos recebidos pelo site';
COMMENT ON TABLE doacoes IS 'Armazena informações de doações e comprovantes recebidos';
COMMENT ON TABLE associados IS 'Armazena informações dos associados da Coram Deo';
COMMENT ON TABLE newsletters IS 'Armazena emails para envio de newsletters';

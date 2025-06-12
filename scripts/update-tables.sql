-- Atualização da tabela de doações para incluir o campo de arquivo PDF
ALTER TABLE doacoes ADD COLUMN IF NOT EXISTS comprovante_pdf_url TEXT;
ALTER TABLE doacoes ADD COLUMN IF NOT EXISTS comprovante_pdf_nome TEXT;

-- Adicionar comentário para documentação
COMMENT ON COLUMN doacoes.comprovante_pdf_url IS 'URL do arquivo PDF do comprovante armazenado no Supabase Storage';
COMMENT ON COLUMN doacoes.comprovante_pdf_nome IS 'Nome original do arquivo PDF do comprovante';

-- Criar bucket no Storage se não existir (isso precisa ser feito manualmente no console do Supabase)
-- Não é possível criar buckets via SQL, mas deixamos a instrução como comentário
-- CREATE BUCKET IF NOT EXISTS comprovantes;

-- Criar política de acesso para o bucket (isso também precisa ser feito manualmente)
-- Exemplo de política que poderia ser criada:
-- 1. Para upload: (role() = 'authenticated' OR role() = 'anon')
-- 2. Para download: role() = 'authenticated'

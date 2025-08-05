-- Atualizar tabela newsletter_subscribers para incluir campo de interesses
ALTER TABLE newsletter_subscribers ADD COLUMN IF NOT EXISTS interesses TEXT;

-- Adicionar comentário para documentação
COMMENT ON COLUMN newsletter_subscribers.interesses IS 'Interesses selecionados pelo usuário (separados por vírgula)';

-- Verificar estrutura atualizada da tabela
SELECT 
    table_name, 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'newsletter_subscribers' 
ORDER BY ordinal_position;

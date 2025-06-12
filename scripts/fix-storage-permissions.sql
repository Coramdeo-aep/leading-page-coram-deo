-- Criar políticas de acesso para o bucket comprovantes
-- Estas políticas precisam ser executadas no console do Supabase ou via SQL Editor

-- Política para permitir upload de arquivos (INSERT)
CREATE POLICY "Permitir upload de comprovantes" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'comprovantes');

-- Política para permitir leitura de arquivos (SELECT)
CREATE POLICY "Permitir leitura de comprovantes" ON storage.objects
FOR SELECT USING (bucket_id = 'comprovantes');

-- Política para permitir atualização de arquivos (UPDATE)
CREATE POLICY "Permitir atualização de comprovantes" ON storage.objects
FOR UPDATE USING (bucket_id = 'comprovantes');

-- Política para permitir exclusão de arquivos (DELETE)
CREATE POLICY "Permitir exclusão de comprovantes" ON storage.objects
FOR DELETE USING (bucket_id = 'comprovantes');

-- Verificar se o bucket existe e está configurado corretamente
SELECT * FROM storage.buckets WHERE id = 'comprovantes';

-- Se o bucket não existir, criar com as configurações adequadas
-- (Isso precisa ser feito manualmente no console do Supabase)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('comprovantes', 'comprovantes', true);

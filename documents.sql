-- Create a table to store your documents
create table documents(
    id bigserial primary key,
    context text,  -- corresponds to the "text chunk"
    embedding vector(1536) -- 1536 works for OpenAI embeddings
)
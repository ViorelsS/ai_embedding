import { openai, supabase } from "./config";

const query = "What can I listen to in half of hour?";

const main = async (input) => {
    /* Create a vector embedding representing the input text */
    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input,
    });

    /* The vector generate by OpenAI */
    const embedding = embeddingResponse.data[0].embedding;

    /* Query supabase for nearest vector match */
    const { data } = await supabase.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 3,
    });

    console.log(data[0].context, data[0].similarity);
};

main(query);

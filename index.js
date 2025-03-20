import { openai, supabase } from "./config";
import podcasts from "./content";

const main = async (input) => {
    const data = await Promise.all(
        input.map(async (textChunk) => {
            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-ada-002",
                input: textChunk,
            });

            return {
                context: textChunk,
                embedding: embeddingResponse.data[0].embedding,
            };
        })
    );

    /* Insert content ad embedding into Supabase */
    await supabase.from("documents").insert(data);

    console.log("Embedding and storing complete!");
};

main(podcasts);

import openai from "./config";

const content = [
    "Beyond Mars: spectacular life on distant planets.",
    "Jazz under stars: a night in New Orleans' musci scene.",
    "Mysteries of the deep: exploring uncharted ocean caves.",
    "Rediscovering lost melodies: the rebirth of vinyl culture.",
    "Tables from the tech frontier: decoding AI ethics.",
];

const main = async (input) => {
    input.map(async (textChunk) => {
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: textChunk,
        });

        const data = {
            content: textChunk,
            embedding: embeddingResponse.data[0].embedding,
        };
        console.log(data);
    });

    console.log("Embedding complete!");
};

main(content);

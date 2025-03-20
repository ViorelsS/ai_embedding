import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
/* Ensure the OpenAI API key is available and correctly configured */
if (!apiKey) {
    throw new Error("OpenAI API key is missing or invalid.");
}

/* OpenAI config */
export default new OpenAI({
    apiKey,
    /* DANGER: use this line only in development */
    dangerouslyAllowBrowser: true,
});

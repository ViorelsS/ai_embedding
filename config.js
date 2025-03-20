import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
/* Ensure the OpenAI API key is available and correctly configured */
if (!apiKey) {
    throw new Error("OpenAI API key is missing or invalid.");
}

/* OpenAI config */
export const openai = new OpenAI({
    apiKey,
    /* DANGER: use this line only in development */
    dangerouslyAllowBrowser: true,
});

/* Supabase config */
const privateKey = import.meta.env.VITE_SUPABASE_API_KEY;
if (!privateKey) {
    throw new Error("Expected env var VITE_SUPABASE_API_KEY");
}
const url = import.meta.env.VITE_SUPABASE_URL;
if (!url) {
    throw new Error("Expected env var VITE_SUPABASE_URL");
}
export const supabase = createClient(url, privateKey);

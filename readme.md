# AI Embedding Project

This project demonstrates how to generate embeddings for text data using OpenAI's API and store them in a Supabase database.

## Features

-   Generate text embeddings using the `text-embedding-ada-002` model.
-   Store embeddings and their corresponding text in a Supabase database.
-   Process multiple text chunks in parallel.

## Prerequisites

-   Node.js installed on your system.
-   An OpenAI API key.
-   A Supabase project with a `documents` table.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/ViorelsS/ai_embedding
    ```
2. Navigate to the project directory:
    ```bash
    cd ai_embedding
    ```
3. Install dependencies using Vite:

    ```bash
    npm install
    ```

4. Configure the project:

    - Create a `config.js` file exporting `openai` and `supabase` instances.
    - Ensure the `documents` table in Supabase has the following structure:
        ```sql
        CREATE TABLE documents (
          id SERIAL PRIMARY KEY,
          context TEXT NOT NULL,
          embedding FLOAT8[] NOT NULL
        );
        ```

5. Add your content:
    - Update the `content.js` file with the text chunks you want to process.

## Usage

1. Add your OpenAI API key in the `.env` file:
    ```yml
    VITE_OPENAI_API_KEY=<your api key>
    ```
2. Start the development server with Vite:

```bash
node index.js
```

## Notes

-   Ensure your OpenAI and Supabase credentials are correctly configured in `env.js`.
-   Modify the `content.js` file to include your desired text data.

## License

This project is licensed under the MIT License.

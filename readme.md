# AI Embedding Project

This project demonstrates how to generate text embeddings using OpenAI's API. Text embeddings are numerical representations of text that can be used for various machine learning tasks, such as clustering, similarity search, and classification.

## Features

-   Generates embeddings for a list of text inputs.
-   Uses the `text-embedding-ada-002` model from OpenAI (because it's cheap).
-   Outputs the embedding data for each text input.

## Prerequisites

-   Node.js installed on your system.
-   An OpenAI API key.

## Installation

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

## Usage

1. Add your OpenAI API key in the `.env` file:
    ```yml
    VITE_OPENAI_API_KEY=<your api key>
    ```
2. Start the development server with Vite:
    ```bash
    npm run dev
    ```
3. The script will output the embeddings for the predefined text inputs.

## File Structure

-   `index.js`: Main script to generate embeddings.
-   `config.js`: Configuration file for OpenAI API setup.

## License

This project is licensed under the MIT License.

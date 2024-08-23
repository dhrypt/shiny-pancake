# shiny-pancake

Shiny Pancake is a fully functional, interactive notes application built with **React** for the frontend and **Appwrite.io** as the backend-as-a-service platform. This application allows users to create, edit, drag, drop, and customize notes with different colors. It features real-time updates and automatic note saving, providing a smooth and seamless user experience.

## Demo

![image](https://github.com/user-attachments/assets/2296285d-eda5-4802-ba38-bd52e761a752)

## Features

- **Create & Edit Notes:** Add new notes with just a click, and edit existing ones effortlessly.
- **Drag & Drop:** Reposition notes on the board by simply dragging and dropping them.
- **Customization:** Choose from a variety of colors to customize your notes.
- **Real-Time Updates:** Changes are instantly saved and synced across sessions.
- **Backend Powered by Appwrite.io:** Utilizing Appwrite.io's database and real-time features.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **Appwrite.io Account** (If you don't have one, sign up at [Appwrite.io](https://appwrite.io))

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/dhrypt/shiny-pancake.git
    cd shiny-pancake
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    - Rename the `.env.example` file to `.env`.

    - Fill in the following values in your `.env` file:

    ```env
    VITE_ENDPOINT=https://cloud.appwrite.io/v1
    VITE_PROJECT_ID=your_project_id
    VITE_DATABASE_ID=your_database_id
    VITE_COLLECTION_NOTES_ID=your_collection_notes_id
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    The app should now be running on `http://localhost:5173`.

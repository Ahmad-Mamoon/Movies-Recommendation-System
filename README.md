# Movie Recommendation System

This project is a movie recommendation system that allows users to search for movies and receive recommendations based on their search. The system fetches movie data from the OMDb API and uses a recommendation model to suggest similar movies.

## Features

- **Search Movies**: Users can search for movies by title using the OMDb API.
- **Movie Recommendations**: Based on the searched movie, the system provides a list of recommended movies.
- **Movie Details**: Display movie details including posters and titles.
- **Theme Toggle**: Users can switch between light and dark themes.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Styling**: CSS
- **API**: OMDb API
- **Vectorization**: sklearn CountVectorizer
- **Similarity Calculation**: sklearn cosine_similarity

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python and pip installed

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/movie-recommendation-system.git
    cd movie-recommendation-system
    ```

2. **Install frontend dependencies:**

    ```bash
    cd frontend
    npm install
    ```

3. **Install backend dependencies:**

    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

4. **Set up OMDb API key:**

    Create a `.env` file in the `frontend` directory with the following content:

    ```env
    REACT_APP_OMDB_API_KEY=your_omdb_api_key_here
    ```

5. **Run the backend server:**

    ```bash
    cd backend
    python server.py
    ```

6. **Run the frontend server:**

    ```bash
    cd ../frontend
    npm start
    ```

### Usage

1. Open your browser and go to `http://localhost:3000`.
2. Use the search bar to find a movie by title.
3. View the search results and recommended movies.

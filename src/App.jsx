import { Routes, Route } from 'react-router'
import { ReactQueryDevtools } from 'react-query/devtools'
import './assets/scss/App.scss'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import NotFound from './pages/NotFound'
import ActorPage from './pages/ActorPage'
import MoviePage from './pages/MoviePage'
import GenresPage from './pages/GenresPage'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actors/:id" element={<ActorPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage /> } />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Only used in development mode */}
      {/* <ReactQueryDevtools /> */}
    </div>
  )
}

export default App

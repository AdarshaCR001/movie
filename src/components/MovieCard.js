import React from 'react'
import { Card } from 'react-bootstrap';
import '../css/Custom.css'

function MovieCard({ movie }) {
  var date1 = new Date(movie.releasedDate);
  return (
    <Card style={{ width: '25rem', marginBottom: 5 }}>
      <Card.Body className="flex-row">
        <Card.Text className="flex-column justify-content">{movie.totalVoted}</Card.Text>
        <img className="img" src={movie.poster} />
        <Card.Text className="flex-column">
          <Card.Text><h6>{movie.title}</h6></Card.Text>
          <Card.Text>Genere: {movie.genre}</Card.Text>
          <Card.Text>Director: {movie.director}</Card.Text>
          <Card.Text>Starring: {movie.stars}</Card.Text>
          <Card.Text>{movie.runtime} mins| {movie.language}|{date1.getDate()}</Card.Text>
          <Card.Text>{movie.pageViews} views| {movie.totalVoted} people</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MovieCard

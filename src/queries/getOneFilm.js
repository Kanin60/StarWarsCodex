
export const getOneFilm =`query Film
($filmId: ID) {
    film(id: $filmId) {
      id
      title
      producers
      releaseDate
    }
  }`
export const getOnePerson = `query Person($personId: ID) {
    person(id: $personId) {
      name
      height
      hairColor
      gender
      eyeColor
      birthYear
      filmConnection {
        films {
          title
        }
      }
      species {
        name
        language
        homeworld {
          name
          population
          terrains
        }
      }
    }
  }`
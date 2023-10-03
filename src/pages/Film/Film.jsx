import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { request } from 'graphql-request'
import { getAllFilms } from "../../queries/getAllFilm";

export function Film()  {
    const [isModelOpen, setModelOpen] = useState(false)
    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsFilms'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`
            , getAllFilms)
    })
    console.log(data);

    const showModel = () => {
        setModelOpen(true)
    }

    const closeModel = () => {
        setModelOpen(false)
    }

    if (isLoading) return (
        <div>
            <p>Loading</p>
        </div>
    )
    // if (error) return
    //     <div>
    //         Error:{error.massage}
    //     </div>

    return (
        <section>
            <p>Her er FILMSIDEN!</p>
            <div>
                {data.allFilms.films.map((item, index) => {
                    return (
                        <p onClick={showModel} key={index}>
                            {item.title}
                        </p>
                    )
                })}
                <Modal show={isModelOpen}>
                    Message in Modal
                    <button onClick={closeModel}>Close Model</button>
                </Modal>
            </div>
        </section>

    )
}
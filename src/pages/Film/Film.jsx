import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { request } from 'graphql-request'
import { getAllFilms } from "../../queries/getAllFilms";
import { getOneFilm } from '../../queries/getOneFilm'
import Modal from 'react-modal';


export function Film() {
    const Allfilms = useQuery({
        queryKey: ['getStarWarsFilms'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`
            , getAllFilms)
    })
    console.log('AlleFilm', Allfilms.data);
    
    const [id, setId]=useState()

    const OneFilm = useQuery({
        queryKey: ['getFilm',id],
        enabled:!!id,
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`
        , getOneFilm, {filmId: id})
    })
    console.log('OneFilm',OneFilm.data);

    //MODAL
    Modal.setAppElement('#root');

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(id) {
        setIsOpen(true);
        setId(id)
    }
    function closeModal() {
        setIsOpen(false);
    }

    if (Allfilms.isLoading) return (<div> <p>Loading</p> </div >)

    return (
        <section>
            <p>Her er FILMSIDEN!</p>
            <div>
                {Allfilms.data?.allFilms.films.map((item, index) => {
                    return (
                        <button key={index} onClick={() => openModal(item.id)
                        }>{item.title}</button>
                    )
                })}
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <p>HER ER MODALEN{Allfilms.data?.allFilms.films.id}</p>

                <p>{OneFilm?.data?.film?.id}</p>
                <p>{OneFilm?.data?.film?.producers}</p>
                <p>{OneFilm?.data?.film?.title}</p>
            

                <button onClick={closeModal}>Luk</button>
            </Modal>
        </section>

    )
}
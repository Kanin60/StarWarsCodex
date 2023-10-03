import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request";
import { getAllPeople } from "../../queries/getAllPeople";
import { getOnePerson } from "../../queries/getOnePerson";
import Modal from 'react-modal';
import { useState } from "react";

export function Karakterer() {

    const characters = useQuery({
        queryKey: ['getStarWarsPeople'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`,
            getAllPeople)
    })
    const [id, setId] = useState()
    const onePerson = useQuery({
        queryKey: ['getOneStarWarsPerson', id],
        enabled: !!id,
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`,
            getOnePerson, { personId: id })
    })

    //MODAL START
    Modal.setAppElement('#root');//Sætter modalen på root
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(id) {
        setIsOpen(true);
        setId(id)
    }
    function closeModal() {
        setIsOpen(false);
    }
    console.log('En enkelt karakters id: ', onePerson.data);

    if (characters.isLoading) return (<p>Loading...</p>)

    return (
        <section style={{ backgroundColor: "#fafafa", maxWidth: "1200px", margin: "auto" }}>
            <p>Her er karakterersiden</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: "100%" }}>
                {characters.data?.allPeople.people.map((item, index) => {//optional chaining
                    return (
                        <button key={index} onClick={() => openModal(item.id)}> {item.name}</button>
                    )
                })}
            </div >
            <Modal isOpen={modalIsOpen}>
                <h2 style={{ fontFamily: "sans-serif" }}>{onePerson?.data?.person?.name}</h2>
                <p style={{ fontFamily: "sans-serif" }}>RACE: {onePerson?.data?.person?.species}</p>
                <p style={{ fontFamily: "sans-serif" }}>FØDT: {onePerson?.data?.person?.birthYear}</p>
                <p style={{ fontFamily: "sans-serif" }}>HØJDE: {onePerson?.data?.person?.height}cm</p>
                <p style={{ fontFamily: "sans-serif" }}>HÅR: {onePerson?.data?.person?.hairColor}</p>
                <p style={{ fontFamily: "sans-serif" }}>ØJNFARVE: {onePerson?.data?.person?.eyeColor}</p>



                <button onClick={closeModal}>Luk</button>
            </Modal>
        </section >
    )
}




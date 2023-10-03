import { useState } from "react"


export function Model (){
    const showModal =()=>{
        setModelOpen(true)
    }

    const closeModel=()=>{
        setModelOpen(false)
    }

    return(
        <>
        <div><p>Hello Model</p></div>
        <button onClick={e=>{this.ShowModal()}}>Show Modal</button>
        </>




    )
}
const { useState } = require("react")


function updatepage() {

    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [device,setDevice]=useState("")
    const [comment,setComment]=useState("")


    return (
        <>
            <h1>Update</h1>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
            <input type="text" placeholder="device" />
            <input type="text" placeholder="no_of_comments" />
            <button>Submit</button>
        </>
    )
}
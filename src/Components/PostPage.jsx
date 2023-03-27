import { useEffect, useState } from "react"


function Posts(){

    const [post,setPost]=useState([])

    useEffect(() => {
        fetch("https://kind-lime-bear-veil.cyclic.app/posts", {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                setPost(res)
            })
            .catch(err => console.log(err))
    }, [])



console.log(post)
    return (
        <>
        <h1>Posts</h1>

        </>
    )
}

export default Posts
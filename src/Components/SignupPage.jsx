import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [ismarried, setIsmarried] = useState("")


    const HandleSubmit = (e) => {

        fetch("https://kind-lime-bear-veil.cyclic.app/users/register", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                gender: gender,
                password: password,
                age: age,
                city: city,
                is_married: ismarried == "true" ? true : false

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        setEmail("")
        setPassword("")
        setAge("")
        setName("")
        setGender("")
        setCity("")
    }


    return (
        <><br />
            <h1>Registration</h1>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
            <input type="text" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} /><br /><br />
            <input type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} /><br /><br />
            <select onChange={(e) => setIsmarried(e.target.value)} name="" id="">
                <option value="true">Married</option>
                <option value="false">Not Married</option>
            </select>

            <button onClick={HandleSubmit}>Submit</button>
        </>
    )
}

export default Signup
import { useState } from 'react'


export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();

        console.log({ username, password });
        

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({ username, password })
            })
            const result = await response.json();
            console.log(result);

            setToken(result.token);

            //return result.token;


        } catch (error) {
            setError(error.message = "oh no!");
        }

    }

    return (
        <div>
            <h2>Sign Up!</h2>
            {username && <p>hi {username}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:{" "}
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} /><br />
                </label><br />

                <label>
                    Password:{" "}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} /><br />
                </label><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
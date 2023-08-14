import { useState } from 'react'


export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
            method: "POST",
            body: {
                username,
                password
            }
        })
        const result = await response.json();
        console.log(result);

        } catch (error) {
            setError(error.message = "oh no!");
        }

    }

    return (
        <div>
            <h2>Sign Up!</h2>
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
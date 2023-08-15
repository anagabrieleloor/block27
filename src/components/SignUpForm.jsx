import { useState } from 'react'


export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);

    //validation for username 
    const usernameMinLength = 8;
    const passwordMinLength = 6;


    async function handleSubmit(e) {
        e.preventDefault();


        //validation
        if (username.length < usernameMinLength) {
            setError(`Username must be at least ${usernameMinLength} characters long.`);
            return;
        }

        if (password.length < passwordMinLength) {
            setError(`Password must be at least ${passwordMinLength} characters long.`);
            return;
        }
        console.log({ username, password });


        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({ username, password })
            })
            const result = await response.json();
            console.log(result);

            setToken(result.token);
            setError(null);
            setUserData(result.user);
            //return result.token;

            setUsername("");
            setPassword("");

        } catch (error) {
            setError(error.message = "oh no!");
        }

    }

    return (
        <div>
            <h2>Sign Up!</h2>
            {username && <p>hi {username}</p>}
            {userData && (
                <p>yeeee success! welcome, {userData.username}!</p>
            )}
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
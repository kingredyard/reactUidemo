import React, { useEffect, useState } from "react";
import './apiStyle.css'

import{ Link } from "react-router-dom";
function FetchDetailsFromApi() {

    const [inputId, setInputId] = useState('');
    const [lastInputId, setLastInputId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8080/jarus/person';

        url += '/?firstName='+firstName+'&lastName='+lastName;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setPosts(Array.isArray(res) ? res : [res]);
            });
    }, [firstName,lastName]);

    // handle click evnet of the button
    const handleButtonClick = () => {
        setFirstName(inputId);
        setLastName(lastInputId);
    }

    return (
        <div className="App">
            <h3>Search</h3>
            <div className="form">
                <label>First Name:</label>
                <input
                    type="text"
                    value={inputId}
                    onChange={e => setInputId(e.target.value)}
                    style={{ marginRight: 10 }} />
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastInputId}
                    onChange={e => setLastInputId(e.target.value)}
                    style={{ marginRight: 10 }} />
                <input
                    type="button" className="button"
                    value={inputId || lastInputId ? 'Search' : 'Search'}
                    onClick={handleButtonClick} />
            </div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Date Of Birth</td>
                </tr>
                {posts.map(x =>
                    <tr>
                        <td>
                            <Link to={"/insurance/"+x.id}>
                                {x.name}</Link></td>

                        <td>{x.dateOfBirth}

                        </td>

                    </tr>
                )}
            </table>

        </div>
    );


}

export default FetchDetailsFromApi;
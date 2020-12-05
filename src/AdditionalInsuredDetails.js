import React from "react";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";


function AdditionalInsuredDetails() {

    const {slug} = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        let url = 'http://localhost:8080/jarus/person/additionalInsured/'+slug;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setPost(res);
            });
    }, [slug]);




    return (
        <div className="App">
            <h3>Additional Insured</h3>
            <div className="form">
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Date Of Birth</td>
                        <td>Coverage</td>
                    </tr>
                        <tr>
                            <td>{post.name}</td>

                            <td>{post.dateOfBirth}</td>
                            <td>{post.coverage}</td>

                        </tr>
                    )}
                </table>
            </div>

        </div>
    );

}

export default AdditionalInsuredDetails;

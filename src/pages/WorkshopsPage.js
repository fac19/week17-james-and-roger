import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {SiteContext} from "../App";
import {AuthContext} from "../App";
import {getWorkshops} from "../fireStoreUtils";
import Markdown from "markdown-to-jsx";

function WorkshopsPage() {
    const [workshopList, setWorkshopList] = useState([]);
    const Auth = useContext(AuthContext);

    const {isLoggedIn, setLoggedIn} = useContext(SiteContext);

    const logOut = () => {
        Auth.signOut()
            .then(res => {
                setLoggedIn(false);
            })
            .catch(function (error) {
                // An error happened
            });
    };

    useEffect(() => {
        getWorkshops().then(val => {
            // console.log("WE SHOULD HAVE A VAL:", val.docs);
            setWorkshopList(
                val.docs.map((doc, idx) => {
                    const data = doc.data();
                    return (
                        <>
                            <div key={idx}>
                                <h2>{data.workshop_title}</h2>
                                <h3>{data.Author}</h3>
                                <Markdown>
                                    {data.workshop_content == null ? "" : data.workshop_content}
                                </Markdown>
                            </div>
                        </>
                    );
                })
            );
        });
    }, []);

    return (
        <>
            <h1>Workshops...</h1>
            {console.log(isLoggedIn)}
            {!isLoggedIn && (
                <>
                    <Link to="/signin">Sign In</Link>
                    <br />
                </>
            )}
            {isLoggedIn && (
                <>
                    <button onClick={logOut}>Log out</button>
                    <br />
                </>
            )}
            <Link to="/create">Create a workshop</Link>

            {workshopList && workshopList}
        </>
    );
}
export default WorkshopsPage;

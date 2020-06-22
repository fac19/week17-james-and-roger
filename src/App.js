import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditPage from "./pages/EditPage.js";
import CreatePage from "./pages/CreatePage.js";
import SignInPage from "./pages/SignInPage.js";
import WorkshopsPage from "./pages/WorkshopsPage.js";
import {auth} from "./FirebaseConfig";
import styled from "styled-components";
import StarfieldAnimation from "react-starfield-animation";

import "./App.css";
import background from "./stars.jpg";
console.log("BG:", background);

export const AuthContext = React.createContext(null);
export const SiteContext = React.createContext(null);

const Wrapper = styled.div`
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
`;

const Background = styled.div`
    /* background: url(${background}); */
    /* background: black; */
    background-size: "stretch";
    min-height: 100vh;
    align-items: center;
    color: white;
    z-index: 1;
`;

function App() {
    const [isLoggedIn, setLoggedIn] = React.useState(false);

    return (
        <>
            <StarfieldAnimation
                numParticles={400}
                style={{
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
            />

            <SiteContext.Provider value={{isLoggedIn, setLoggedIn}}>
                <AuthContext.Provider value={auth}>
                    <Background>
                        <Wrapper>
                            {/* <StarfieldAnimation> */}
                            <Router>
                                <Switch>
                                    <Route path="/create" component={CreatePage} />
                                    <Route path="/edit/:workshopID" component={EditPage} />
                                    <Route path="/signin" component={SignInPage} />
                                    <Route exact path="/" component={WorkshopsPage} />
                                </Switch>
                            </Router>
                        </Wrapper>
                    </Background>
                    {/* </StarfieldAnimation> */}
                </AuthContext.Provider>
            </SiteContext.Provider>
        </>
    );
}

export default App;

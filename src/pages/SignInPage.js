import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import {AuthContext} from "../App";
import {SiteContext} from "../App";

function SignInPage() {
    const history = useHistory();

    const Auth = useContext(AuthContext);
    const {setLoggedIn} = useContext(SiteContext);

    const {register, handleSubmit, errors} = useForm();
    function onSubmit(data) {
        console.log(data);
        Auth.signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                setLoggedIn(true);
                history.push("/");
            })
            .catch(e => {
                console.error("OOPS!", e);
            });
    }

    return (
        <>
            <h1>Sign in...</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="email">Email</label>
                <input id="email" name="email" ref={register({required: true})} />
                {errors.email && errors.email.message}

                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="password">Password</label>
                <input id="password" name="password" ref={register({required: true})} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                {errors.password && errors.password.message}

                <input type="submit" />
            </form>
        </>
    );
}
export default SignInPage;

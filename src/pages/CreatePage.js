import React from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {addWorkshop} from "../fireStoreUtils";

const TextArea = styled.textarea`
    width: 50vw;
    height: 50vh;
`;

function onSubmit(data) {
    console.log("SUBMIT:", data);
    addWorkshop(data.text, data.title, "AuthorName");
}

function CreatePage() {
    const {register, handleSubmit, errors} = useForm();

    const params = useParams();

    return (
        <>
            <h1>Create a workshop page {params.workshopID}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Workshop Title</label>
                <br />
                <input id="title" name="title" ref={register({required: true})} />
                <br />
                <br />
                <label htmlFor="text">Workshop Content</label>
                <TextArea id="text" name="text" ref={register({required: true})} />
                {errors.text && errors.text.message}
                <br />
                <button>Submit</button>
            </form>
        </>
    );
}
export default CreatePage;

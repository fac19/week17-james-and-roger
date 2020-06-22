import React from "react";
import {useParams} from "react-router-dom";
function EditPage() {
    const params = useParams();

    return <h1>Edit page {params.workshopID}</h1>;
    // If logged in
    //   If page exists populate fields
}
export default EditPage;

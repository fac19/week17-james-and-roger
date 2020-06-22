import {firestore} from "./FirebaseConfig";

const db = firestore;

export const addWorkshop = (workshopContent, WorkshopTitle, AuthorName) => {
    return db.collection("Workshops").add({
        Author: AuthorName,
        workshop_content: workshopContent,
        workshop_title: WorkshopTitle
    });
};

export const getWorkshops = () => {
    return db
        .collection("Workshops")
        .get()
        .then(res => {
            console.log("this is our returned object from GET", res);
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};

// async getMarker() {
//     const snapshot = await firebase.firestore().collection('events').get()
//     return snapshot.docs.map(doc => doc.data());
// }

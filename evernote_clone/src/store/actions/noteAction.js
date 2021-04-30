import { useSelector } from 'react-redux';

export const addNote = (note) => {
    return ({ useFirestore }) => {
        const firestore = useFirestore();
        const { uid } = useSelector((state) => state.firebase.auth);
        firestore
            .collection("users")
            .doc(uid)
            .collection("notes")
            .add({
                ...note,
                favorite: false,
                createdAt: new Date ()
            })
            .then((docRef) => {
                docRef.update({
                    noteId: docRef.id,
                })
            })
            .then(() => {
                console.log('added the note successfully')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const deleteNote = (note) => {
    return ({ useFirestore }) => {
        const firestore = useFirestore();
        const { uid } = useSelector((state) => state.firebase.auth);    
        firestore
            .collection("users").doc(uid)
            .collection("notes").doc(note.id)
            .delete()
            .then(() => {
                console.log('deleted the note successfully')
            })
            .catch((err) => {
                console.log(err)
            })
    };
}
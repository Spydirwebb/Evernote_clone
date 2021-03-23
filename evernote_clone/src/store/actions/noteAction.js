export const addNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        console.log("hello from addNote");
        const firestore = getFirestore();
        console.log(note)

        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt: new Date()
            })
            .then(() => {
                console.log('added the note successfully')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
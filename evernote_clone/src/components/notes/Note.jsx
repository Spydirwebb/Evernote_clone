import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase'
//import { deleteNote } from "../../store/actions/noteAction"
import moment from 'moment'

const Note = ({ note }) => {
    const firestore = useFirestore();
    const { uid } = useSelector((state) => state.firebase.auth);
    
    const deleteNote = (note) => {
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
    }

    const toggleFav = (note) => {
        const favStatus = !note.favorite;
        firestore
            .collection("users").doc(uid)
            .collection("notes").doc(note.id)
            .update({
                favorite: favStatus
            })
            .then(() => {
                console.log('Toggle Favorite successfully')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteNoteHandler = () => {
        deleteNote(note);
    };

    const favoriteHandler = () => {
        toggleFav(note)
    }

    const heartMarkup = note.favorite ? 'favorite': 'favorite_border'

    return(
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={favoriteHandler}>{heartMarkup}</i>
                <i className="material-icons" style={{cursor:'pointer'}} onClick={deleteNoteHandler}>delete</i> 
            </div>
            <h5 className="black-text">{note.title}</h5>
            <p className="truncate">{note.content}</p>
            <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align"><i className="material-icons black-text">edit</i></div>
        </div>
    )
}

export default Note
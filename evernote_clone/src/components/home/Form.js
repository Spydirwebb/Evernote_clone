import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase'
import useInput from '../../customhook/useInput';
//import{ addNote } from '../../store/actions/noteAction';
//import { useDispatch } from 'react-redux'


const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    const firestore = useFirestore();
    const { uid } = useSelector((state) => state.firebase.auth);
    
    const addNote = (note) => {
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
    };
    

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
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("you clicked submit");
        addNote({title,content});
        console.log("this is after dispatch")
        resetTitle();
        resetContent();
    }
    return (
        <div className='section'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <input  id="note_title" type="text" className="validate" {...bindTitle}/>
                    <label  htmlFor="note_title">Note Title</label>
                </div>
                <div className='input-field'>
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="note_content">Note Content</label>
                </div>
                <button className='btn green'>Add</button>
            </form>
        </div>
    )
}

export default Form;
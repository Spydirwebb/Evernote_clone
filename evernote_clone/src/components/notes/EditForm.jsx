import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import useInput from '../../customhook/useInput'
import { useHistory } from "react-router-dom"

const EditForm = (props) => {
    const id = props.match.params.id
    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect(
        {collection:`users/${uid}/notes/`});
    const note = useSelector(({firestore:{data}}) => data[`users/${uid}/notes/`] && data[`users/${uid}/notes/`][id])
    const firestore = useFirestore();
    
    const updateNote = (note) => {
        firestore
            .collection("users").doc(uid)
            .collection("notes").doc(id)
            .update({
                title: note.title,
                content: note.content
            })
            .then(() => {
                console.log('updated note successfully')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const [title, bindTitle, resetTitle] = useInput(note?.title);
    const [content, bindContent, resetContent] = useInput(note?.content);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        updateNote({id:note.id, title, content});
        resetTitle();
        resetContent();
        history.push('/home');
    }
    
    return (
        <div className='section'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Update Note</h5>
                <div className="input-field">
                    <input  id="note_title" type="text" className="validate" {...bindTitle}/>
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className='input-field'>
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label className="active" htmlFor="note_content">Note Content</label>
                </div>
                <button className='btn green'>Update</button>
            </form>
        </div>
    )
}

export default EditForm
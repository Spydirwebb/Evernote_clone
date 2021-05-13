import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'
import NotesList from './NotesList'

const NoteDetail = (props) => {
    const id = props.match.params.id
    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect(
        {collection:`users/${uid}/notes/`});
        
    //const notes = useSelector((state) => state.firestore.data[`users/${uid}/notes/`][id])
    const note = useSelector(({firestore:{data}}) => data[`users/${uid}/notes/`] && data[`users/${uid}/notes/`][id])

    console.log("note id:"+ id)
    console.log("Notes:"+JSON.stringify(note))
    
    const PlaceHolder = (note) => {
        if(note!==undefined){
            return (
                <div>hi<h1>{note.title}</h1></div>
            )
        }
        return (
            <div>Placeholder</div>   
        )
    }
    return (
        /*<div>
           <PlaceHolder note={note}/>
        </div>
        /* */
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note?.title}</span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>   
        </div>
    )
}

export default NoteDetail
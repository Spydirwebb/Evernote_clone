import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'

const NoteDetail = (props) => {
    const id = props.match.params.id
    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect(
        {collection:`users/${uid}/notes/${id}`});
    const note = useSelector(({ firestore: { data } }) => data.users)

    console.log("note id:"+ id)
    console.log("Note:"+note)
    return (
        <div className="container section">   
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note?.title}</span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note?.createdAt.toDate())}</div>
                </div>
            </div>
        </div>
    )
}

export default NoteDetail
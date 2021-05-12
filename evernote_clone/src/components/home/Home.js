import React from 'react';
import Form from './Form'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import NotesList from '../notes/NotesList'

const Home = () => {
    const { displayName, uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect(
        {collection:`users/${uid}/notes`, 
            orderBy: ['createdAt', 'desc'], 
            storeAs: 'notes'
    });
    const notes = useSelector((state) => state.firestore.ordered.notes)

    return (
        <div className="container">
            <div className="row center-align">
                <h4>Hello {displayName}</h4>
                <div className="col s7"><Form /></div>
                <div className="col s5"><NotesList notes={notes}/></div> 
            </div> 

        </div>
    )
}

export default Home;
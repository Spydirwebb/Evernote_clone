import React from 'react';
import useInput from '../../customhook/useInput';

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    
    const handSubmit = (e) => {
        e.preventDefault();
        console.log({title, content})
        resetTitle();
        resetContent();
    }
    return (
        <div className='section'>
            <form action="">
                <h5 className="grey-text">New Note</h5>
                <div className="input-field">
                    <input  id="note_title" type="text" className="validate" {...bindTitle}/>
                    <label  for="note_title">Note Title</label>
                </div>
                <div className='input-field'>
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label for="note_content">Note Content</label>
                </div>
                <button className='brn-green'>Add</button>
            </form>
        </div>
    )
}

export default Form;
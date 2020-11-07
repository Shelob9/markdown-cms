import * as React from 'react';
import Main from '../../components/Main';
import Editor, { saveData } from '../../components/Editor';
import { apiRequestUpdateContent } from '../../lib/apiTypes';

const fetchGitSave = (update: apiRequestUpdateContent) => {
    return fetch('/api/content', {
        method: 'POST',
        body: JSON.stringify(update)
    }).then(r => r.json())
        .then(
        r => {
            console.log(r);
            return r;
        }
    ).catch(e => {
        console.log(e);
        throw e;
    })
}

const Edit = () => {
    const onSave = (data:saveData) => {
        console.log(data);
        fetchGitSave({
            content: data.content,
            filePath: data.filePath,
            repo: {
                owner: 'shelob9',
                repo: 'meadow-foam'
            }
        })
     }
    return (
        <Editor onSave={onSave} /> 
    )
}
  
export default Edit;
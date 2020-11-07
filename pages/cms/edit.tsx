import * as React from 'react';
import Main from '../../components/Main';
import Editor, { saveData } from '../../components/Editor';
import { apiRequestUpdateContent } from '../../lib/apiTypes';
import GitApi from '../../lib/GitApi';

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

const Edit = ({ name, path,content}) => {
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
        <Editor onSave={onSave} initialContent={content} initialPath={path} /> 
    )
}

export async function getServerSideProps({ query }) {

    let { name, path } = query;
    let content = '';
    if (name && path) {
        let git = GitApi({ owner: "shelob9", repo: "meadow-foam" }, "master");
        try {
            let file = await git.getFile(path);
            content = file.content;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    return {
        props: { name, path,content },
    }
  }
  
export default Edit;
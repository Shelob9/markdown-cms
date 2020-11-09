import * as React from 'react';
import Editor, { saveData } from '../../components/Editor';
import { useLocalGitApi } from '../../hooks/useLocalGitApi';
import GitApi from '../../lib/GitApi';



const Edit = ({ name, path, content }) => {
    const { fetchGitSave } = useLocalGitApi();

    const onSave = async (data:saveData) => {
        return fetchGitSave({
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
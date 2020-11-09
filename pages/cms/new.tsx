import * as React from 'react';
import Editor, { saveData } from '../../components/Editor';
import { useLocalGitApi } from '../../hooks/useLocalGitApi';


const New = () => {
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
        <Editor onSave={onSave}  /> 
    )
}


export default New;
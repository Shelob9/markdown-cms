import * as React from 'react';
import Main from '../../components/Main';
import Editor from '../../components/Editor';

const Edit = () => {

    return (
        <Main>
            <Editor onSave={(title, content) => {
                console.log(title, content);
             }} />
        </Main>
    )
}
  
export default Edit;
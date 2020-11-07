import React,{ FC, forwardRef,  useRef } from 'react';
import CmsLayout from './CmsLayout';
import { TextInput, TextInputProps } from './FieldAreas';
import MarkdownEditor from './MarkdownEditor';



const TitleField: FC<TextInputProps> = forwardRef((props, ref) => (
    <TextInput {...{
        ...props,
        required: true,
    }}
        //@ts-ignore
        ref={ref}
    />
));



export type saveData = { title: string, content: string, filePath: string };
export type editorProps = {
    onSave: (update: saveData) => void;
    initialPath?: string;
    initialContent?: string;
};

const Editor : FC<editorProps> = ({onSave,initialPath,initialContent}) => {
    let titleRef = useRef<HTMLInputElement>();
    let filePathRef = useRef<HTMLInputElement>();
    const [content, setContent] = React.useState(initialContent);

    return (
        <CmsLayout TopBar={() => (
            <>
                <button title={'Save'} onClick={() => {
                    onSave({
                        title: titleRef.current.value,
                        content,
                        filePath:filePathRef.current.value
                    });
                }}>
                    Save
                </button>
            </>
        )}>
           
            <TitleField
                label="Title"
                ref={titleRef}
                id={'the-title'}
            />
            <TextInput
                label={'File Name'}
                ref={filePathRef}
                id={'file-name'}
                defaultValue={initialPath}
            />
            <MarkdownEditor value={content} setValue={setContent} /> 
        </CmsLayout>
    )
}

export default Editor;
  

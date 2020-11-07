import React,{ FC, forwardRef,  useRef } from 'react';
import content from '../pages/api/content';
import { TextInput,TextArea, TextInputProps } from './FieldAreas';


const ContentField: FC<TextInputProps> = forwardRef((props, ref) => (<TextArea {...{
    ...props,
    required: true,
}}
    //@ts-ignore
    ref={ref} />));

const TitleField: FC<TextInputProps> = forwardRef((props, ref) => (
    <TextInput {...{
        ...props,
        required: true,
    }}
        //@ts-ignore
        ref={ref}
    />
));

const FileNameField : FC<TextInputProps> = forwardRef((props, ref) => (
    <TextInput {...{
        ...props,
        required:true,
    }}
        //@ts-ignore
        ref={ref}
    />
));

export type saveData = { title: string, content: string, filePath: string };
export type editorProps = {
    onSave: (update:saveData) => void;
};
const Editor : FC<editorProps> = ({onSave}) => {
    let titleRef = useRef<HTMLInputElement>();
    let contentRef = useRef<HTMLTextAreaElement>();
    let filePathRef = useRef<HTMLInputElement>();
    return (
        <>
            <button title={'Save'} onClick={() => {
                onSave({
                    title: titleRef.current.value,
                    content: contentRef.current.value,
                    filePath:filePathRef.current.value
                });
            }}>
                Save
             </button>
            <TitleField label="Title" ref={titleRef} id={'the-title'} />
            <FileNameField label={'File Name'} ref={filePathRef} id={'file-name'} />
            <ContentField label={'Content'} ref={contentRef} id={'the-content'} />
        </>
    )
}

export default Editor;
  

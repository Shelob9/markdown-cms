import React,{ FC, forwardRef,  useRef } from 'react';
import content from '../pages/api/content';
import { FieldProps, TextInputField,TextFieldArea } from './FieldAreas';


const ContentField: FC<FieldProps> = forwardRef((props, ref) => (<TextInputField {...{
    ...props,
    required: true,
}} ref={ref} />));

const TitleField: FC<FieldProps> = forwardRef((props, ref) => (
    <TextFieldArea {...{
        ...props,
        required: true,
    }}
        //@ts-ignore
        ref={ref}
    />
));

const FileNameField : FC<FieldProps> = forwardRef((props, ref) => (
    <TextFieldArea {...{
        ...props,
        required:true,
    }}
        //@ts-ignore
        ref={ref}
    />
));

export type editorProps = {
    onSave: (update:{ title: string, content: string,filePath:string }) => void;
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
  

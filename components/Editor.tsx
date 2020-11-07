import React,{ FC, forwardRef,  useRef } from 'react';
import { FieldProps, TextAreadField,TextFieldArea } from './FieldAreas';


const ContentField: FC<FieldProps> = forwardRef((props, ref) => (<TextFieldArea {...props} ref={ref} />));

const TitleField: FC<FieldProps> = forwardRef((props, ref) => (
    <TextAreadField {...props} ref={ref} />
));

export type editorProps = {
    onSave: (title: string, content: string) => void;
};
const Editor : FC<editorProps> = ({onSave}) => {
    let titleRef = useRef<HTMLInputElement>();
    let contentRef = useRef<HTMLTextAreaElement>();

    return (
        <>
            <button title={'Save'} onClick={() => {
                onSave(titleRef.current.value, contentRef.current.value);
            }}>
                Save
             </button>
            <TitleField label="Title" ref={titleRef} id={'the-title'} />
            <ContentField label={'Content'} ref={contentRef} id={'the-content'} />
        </>
    )
}

export default Editor;
  

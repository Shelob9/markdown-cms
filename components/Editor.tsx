import React,{ FC, forwardRef,  useRef } from 'react';
import CmsLayout from './CmsLayout';
import { TextInput,TextArea, TextInputProps, TextAreaProps } from './FieldAreas';

const ContentField: FC<TextAreaProps> = forwardRef((props, ref) => (<TextArea {...{
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



export type saveData = { title: string, content: string, filePath: string };
export type editorProps = {
    onSave: (update: saveData) => void;
    initialPath?: string;
    initialContent?: string;
};
const Editor : FC<editorProps> = ({onSave,initialPath,initialContent}) => {
    let titleRef = useRef<HTMLInputElement>();
    let contentRef = useRef<HTMLTextAreaElement>();
    let filePathRef = useRef<HTMLInputElement>();
    return (
        <CmsLayout TopBar={() => (
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
            <ContentField
                label={'Content'}
                ref={contentRef}
                id={'the-content'}
                defaultValue={initialContent}
            />
        </CmsLayout>
    )
}

export default Editor;
  

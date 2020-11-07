import React,{ FC, forwardRef, Ref, useRef } from 'react';
import { useTextField } from '@react-aria/textfield'

type FieldProps = {
    label: string;
    id?: string;
    ref: Ref<HTMLTextAreaElement|HTMLInputElement>
}
const ContentField: FC<FieldProps> = forwardRef((props, ref) => {
    const { label, id } = props;
    let { labelProps, inputProps } = useTextField({ label, id },
        //@ts-ignore
        ref
    );
  
    return (
        <div className="field-group">
            <label {...labelProps}>{label}</label>
            <textarea
                {...inputProps}
                //@ts-ignore
                ref={ref}
            />
        </div>
    );
});


const TitleField: FC<FieldProps> = forwardRef((props, ref) => {
    const { label, id } = props;
    let { labelProps, inputProps } = useTextField({ label, id },
        //@ts-ignore
        ref
    );
  
    return (
        <div className="field-group">
            <label {...labelProps}>{label}</label>
            <input
                {...inputProps}
                //@ts-ignore
                ref={ref}
            />
        </div>
    );
});

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
  

import { useTextField } from "@react-aria/textfield";
import React,{ FC, forwardRef, Ref } from "react";



export interface TextInputProps  {
    ref: Ref<HTMLInputElement>;
    label: string;
    id?: string;
    defaultValue?: string;
}

export const TextInput : FC<TextInputProps> = forwardRef((props, ref) => {
    const { label, id,defaultValue } = props;
    let { labelProps, inputProps } = useTextField({ label, defaultValue,id },
        //@ts-ignore
        ref
    );
  
    return (
        <div className="field-group">
            <label {...labelProps}>{label}</label>
            <input
                {...inputProps}
                ref={ref}
            />
        </div>
    );
});


export interface TextAreaProps  {
    ref: Ref<HTMLTextAreaElement>;
    label: string;
    id?: string;
    defaultValue?: string;
}

export const TextArea : FC<TextAreaProps> = forwardRef((props, ref) => {
    const { label, id,defaultValue } = props;
    let { labelProps, inputProps } = useTextField(
        { label, defaultValue, id },
        //@ts-ignore
        ref
    );
  
    return (
        <div className="field-group">
            <label {...labelProps}>{label}</label>
            <textarea
                {...inputProps}
                ref={ref}
            />
        </div>
    );
});
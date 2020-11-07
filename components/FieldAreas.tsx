import { useTextField } from "@react-aria/textfield";
import React,{ FC, forwardRef, Ref } from "react";

export interface FieldProps {
    label: string;
    id?: string;
    ref: Ref<HTMLTextAreaElement | HTMLInputElement>,
    defaultValue?: string;
}

interface TextFieldAreaProps extends FieldProps {
    ref: Ref<HTMLInputElement>,
}

export const TextFieldArea : FC<TextFieldAreaProps> = forwardRef((props, ref) => {
    const { label, id,defaultValue } = props;
    let { labelProps, inputProps } = useTextField({ label, defaultValue,id },
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

export const TextInputField : FC<FieldProps> = forwardRef((props, ref) => {
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
                //@ts-ignore
                ref={ref}
            />
        </div>
    );
});
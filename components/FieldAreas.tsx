import { useTextField } from "@react-aria/textfield";
import React,{ FC, forwardRef, Ref } from "react";

export type FieldProps = {
    label: string;
    id?: string;
    ref: Ref<HTMLTextAreaElement|HTMLInputElement>
}

export const TextFieldArea : FC<FieldProps> = forwardRef((props, ref) => {
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

export const TextAreadField : FC<FieldProps> = forwardRef((props, ref) => {
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
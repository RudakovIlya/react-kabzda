import React, {ChangeEvent, DetailedHTMLProps, ReactNode, TextareaHTMLAttributes, KeyboardEvent} from 'react';

export type DefaultTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export type HooliTextAreaPropsType = DefaultTextAreaProps & {
    onChangeText?: (value: string) => void
    error?: ReactNode
    onEnter?: () => void
}

const HooliTextArea: React.FC<HooliTextAreaPropsType> = ({
                                                             onChangeText,
                                                             error,
                                                             onEnter,
                                                             className,
                                                             onChange,
                                                             ...restProps
                                                         }) => {
    const onChangeTextCallback = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event)
        onChangeText?.(event.currentTarget.value)
    }

    const onKeyDownTextCallback = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) event.preventDefault()
        onEnter && event.key === 'Enter' && !event.shiftKey && onEnter();
    }

    return (
        <textarea onKeyDown={onKeyDownTextCallback} onChange={onChangeTextCallback} {...restProps}/>
    );
};

export default HooliTextArea;
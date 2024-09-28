import { Input as AntdInput, InputProps as AntdInputProps, InputRef } from 'antd';
import { FC, Ref } from 'react';

export interface InputProps extends AntdInputProps {
    className?: string;
    placeholder?: string;
    inputRef?: Ref<InputRef>;
    type?: string | undefined;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className, placeholder, inputRef, type, ...otherProps
    } = props;

    const getInputByType = (type: string | undefined) => {
        switch (type) {
            case 'password':
                return (
                    <AntdInput.Password
                        className={className}
                        ref={inputRef}
                        placeholder={placeholder}
                        {...otherProps}
                    />
                );
            default:
                return (
                    <AntdInput
                        className={className}
                        ref={inputRef}
                        placeholder={placeholder}
                        {...otherProps}
                    />
                );
        }
    };

    return getInputByType(type);
};
// export const Input:FC<InputProps> = (props) => {
//     const {
//         className, placeholder, inputRef, ...otherProps
//     } = props;
//     return <AntdInput className={className} ref={inputRef} placeholder={placeholder} {...otherProps} />;
// };
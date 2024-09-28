import {useForm, Controller, SubmitHandler} from "react-hook-form"
import {Input, Form} from 'antd';
import FormItem from "antd/es/form/FormItem";
import {Dispatch, FC, SetStateAction} from "react";
import {FormData} from "./types";
import {Button} from "../../ui/Button/Button";
import {useAppDispatch} from "../../../store/hook/reduxHooks";
import {addFormData} from "../../../store/slices/forms/formSlice";

interface ReactHookFormProps  {
    formData: FormData[]
    setFormData: Dispatch<SetStateAction<FormData[]>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ReactHookForm: FC<ReactHookFormProps> = ({setFormData,formData,setIsModalOpen}: ReactHookFormProps) => {
    const dispatch = useAppDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(addFormData(data))
        reset();
        setIsModalOpen(false)
    };
    return (
        <Form
            name="myForm"
            onFinish={handleSubmit(onSubmit)}
            layout="vertical"
            style={{ maxWidth: '400px'}}
        >
            <FormItem
                label="Имя"
                validateStatus={errors.name ? 'error' : ''}
                help={errors.name ? errors.name.message : ''}
            >
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Имя обязательно' }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="Введите ваше имя"
                        />
                    )}
                />
            </FormItem>

            <FormItem
                label="Возраст"
                validateStatus={errors.age ? 'error' : ''}
                help={errors.age ? errors.age.message : ''}
            >
                <Controller
                    name="age"
                    control={control}
                    rules={{
                        required: 'Возраст обязаателен',
                    }}
                    render={({ field }) => (
                        <Input
                            type='number'
                            {...field}
                            placeholder="Введите ваш возраст"
                        />
                    )}
                />
            </FormItem>

            <FormItem
                label="Почта"
                validateStatus={errors.email ? 'error' : ''}
                help={errors.email ? errors.email.message : ''}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Почта обязательна',
                    }}
                    render={({ field }) => (
                        <Input
                            type='email'
                            {...field}
                            placeholder="Введите вашу почту"
                        />
                    )}
                />
            </FormItem>

            <FormItem
                label="Пароль"
                validateStatus={errors.password ? 'error' : ''}
                help={errors.password ? errors.password.message : ''}
            >
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Пароль обязателен',
                    }}
                    render={({ field }) => (
                        <Input
                            type="password"
                            {...field}
                            placeholder="Введите ваш пароль"
                        />
                    )}
                />
            </FormItem>

            <Form.Item
                label="Комментарий"
            >
                <Controller
                    name="comments"
                    control={control}
                    render={({ field }) => (
                        <Input.TextArea
                            rows={6}
                            {...field}
                            placeholder="Введите комментарий"
                        />
                    )}
                />
            </Form.Item>
            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    text='Отправить'
                />
            </FormItem>
        </Form>
    );
};
export default ReactHookForm


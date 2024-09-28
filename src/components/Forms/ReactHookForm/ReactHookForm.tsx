import {useForm, Controller, SubmitHandler} from "react-hook-form"
import {Input, Button, Form} from 'antd';
import FormItem from "antd/es/form/FormItem";
import {FC} from "react";

type Inputs = {
    name: string
    password: string
    comments: string
}
const ReactHookForm: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        reset();
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
                        <Input {...field} placeholder="Введите ваше имя" />
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
                        <Input.Password {...field} placeholder="Введите ваш пароль" />
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
                            {...field} placeholder="Введите комментарий" />
                    )}
                />
            </Form.Item>
            <FormItem>
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </FormItem>
        </Form>
    );
};
export default ReactHookForm


import React from "react";
import FormItem from "antd/es/form/FormItem";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Form, Input} from "antd";
import {Button} from "components/ui/Button/Button";
import styles from "./FormAuthorization.module.scss";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "store/hook/reduxHooks";
import {setIsAuth} from "store/slices/auth/authSlice";

interface DataAuthorization {
    username: string;
    password: string;
}

const FormAuthorization: React.FC = ()  => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DataAuthorization>();

    const onSubmit: SubmitHandler<DataAuthorization> = (data) => {
        if (data.username === "admin" && data.password === "admin") {
            navigate("/")
            dispatch(setIsAuth(true))
        };
        reset();

    };
    return (
        <div className={styles.form}>
        <Form
            name="myForm"
            layout="vertical"
            style={{ width: "350px" }}
            onFinish={handleSubmit(onSubmit)}
        >
            <FormItem
                label="Логин"
                validateStatus={errors.username ? "error" : ""}
                help={errors.username ? errors.username.message : ""}
            >
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: "Логин обязателен" }}
                    render={({field}) => (
                    <Input
                        {...field}
                        placeholder="Введите ваш логин"
                    />
                )} />
            </FormItem>
            <FormItem
                label="Пароль"
                validateStatus={errors.password ? "error" : ""}
                help={errors.password ? errors.password.message : ""}
            >
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Пароль обязателен" }}
                    render={({field}) => (
                        <Input type="password"
                               {...field}
                               placeholder="Введите ваш пароль"
                        />
                    )} />
          пше   </FormItem>
            <div>
                <FormItem style={{  textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" text="Отправить" />
                </FormItem>
            </div>
        </Form>
        </div>
    )
}
export default FormAuthorization;
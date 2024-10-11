import React from "react";
import Heading from "components/Heading/Heading";
import FormAuthorization from "components/Forms/FormAuthorization/FormAuthorization";

const Authorization: React.FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "91vh" }}>
            <Heading text="Авторизация" />
            <FormAuthorization />
        </div>
    );
};

export default Authorization;
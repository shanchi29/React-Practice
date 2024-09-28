import React, {SetStateAction, useEffect, useState} from 'react';
import TableAccount from "../../components/Tables/TableAccount/TableAccount";
import FormModal from "../../components/Modals/FormModal/FormModal";
import UserCardModal from "../../components/Modals/UserCardModal/UserCardModal";


const MainPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<SetStateAction<any>>([]);
    const [isModalOpenCard, setIsModalOpenCard] = useState(false)
    const [selectedRow, setSelectedRow] = useState<SetStateAction<any>>();


    return (
        <div>
            {isModalOpenCard &&
                <UserCardModal
                    selectedRow={selectedRow}
                    setIsModalOpenCard={setIsModalOpenCard}
                    isModalOpenCard={isModalOpenCard}
                />
            }
        <TableAccount
            setSelectedRow={setSelectedRow}
            setIsModalOpenCard={setIsModalOpenCard}
            formData={formData}
            setIsModalOpen={setIsModalOpen}
        />
            {isModalOpen &&
                <FormModal
                    setFormData={setFormData}
                    formData={formData}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                />
            }
        </div>

    )
}
export default MainPage;






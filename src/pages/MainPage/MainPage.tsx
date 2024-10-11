import React from "react";
import TableAccount from "components/Tables/TableAccount/TableAccount";
import FormModal from "components/Modals/FormModal/FormModal";
import UserCardModal from "components/Modals/UserCardModal/UserCardModal";
import {
  selectIsModalOpen,
  selectIsModalOpenCard,
} from "store/selectors/selectors";
import { useAppSelector } from "store/hook/reduxHooks";

const MainPage: React.FC = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const isModalOpenCard = useAppSelector(selectIsModalOpenCard);

  return (
    <div>
      {isModalOpenCard && <UserCardModal />}
      <TableAccount />
      {isModalOpen && <FormModal />}
    </div>
  );
};
export default MainPage;

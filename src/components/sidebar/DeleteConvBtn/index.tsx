import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CustomButton } from '../../ui';

const DeleteConvBtn: FC = () => {
  return (
    <CustomButton
      mode="delete"
      icon={AiOutlineDelete}
      text="Delete Conversations"
    />
  );
};

export default DeleteConvBtn;

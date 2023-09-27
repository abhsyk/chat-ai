import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CustomButton } from '../../ui';
import { useActions } from '../../../hooks/useActions';
import { deleteAllConvs } from '../../../util/socketConnection';

const DeleteConvBtn: FC = () => {
  const { deleteAllConversations } = useActions();

  const handleDeleteAllConversations = () => {
    deleteAllConversations([]); // empty conversations array (redux)
    deleteAllConvs(); // socket server
  };

  return (
    <CustomButton
      mode="delete"
      icon={AiOutlineDelete}
      text="Delete Conversations"
      onClick={handleDeleteAllConversations}
    />
  );
};

export default DeleteConvBtn;

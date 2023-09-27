import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CustomButton } from '../../ui';
import { Conversation } from '@backend/types';

type Props = {
  onSelect: (id: Conversation['id']) => void;
};

const NewChatButton: FC<Props> = ({ onSelect }) => {
  return (
    <CustomButton
      mode="newChat"
      icon={AiOutlinePlus}
      text="New Chat"
      // if it's a new conv, create it as "new"
      onClick={() => onSelect('new')}
    />
  );
};

export default NewChatButton;

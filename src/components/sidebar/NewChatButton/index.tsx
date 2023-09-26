import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CustomButton } from '../../ui';
import { Message } from '@backend/types';

type Props = {
  onChooseChat: (id: Message['id']) => void;
};

const NewChatButton: FC<Props> = ({ onChooseChat }) => {
  return (
    <CustomButton
      mode="newChat"
      icon={AiOutlinePlus}
      text="New Chat"
      // if it's a new conv, create it as "new"
      onClick={() => onChooseChat('new')}
    />
  );
};

export default NewChatButton;

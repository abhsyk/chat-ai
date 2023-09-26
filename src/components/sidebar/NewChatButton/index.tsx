import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CustomButton } from '../../ui';
import { Message } from '../../../interfaces';

type Props = {
  onChooseChat: (id: Message['id']) => void;
};

const NewChatButton: FC<Props> = ({ onChooseChat }) => {
  return (
    <CustomButton
      mode="newChat"
      icon={AiOutlinePlus}
      text="New Chat"
      onClick={() => onChooseChat('new')}
    />
  );
};

export default NewChatButton;

import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CustomButton } from '../ui';

const NewChatButton: FC = () => {
  return <CustomButton mode="newChat" icon={AiOutlinePlus} text="New Chat" />;
};

export default NewChatButton;

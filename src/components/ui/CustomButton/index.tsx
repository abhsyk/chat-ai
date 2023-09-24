import { FC } from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  text: string;
  mode: 'newChat' | 'listItem' | 'delete';
};

const CustomButton: FC<Props> = ({ icon: Icon, text, mode }) => {
  const newChat: boolean = mode === 'newChat';

  return (
    <div
      className={
        newChat
          ? 'new_chat_button'
          : `list_item ${mode === 'delete' ? 'delete_conv_button' : ''}`
      }
      onClick={() => {}}
    >
      <div className={newChat ? 'new_chat_button_icon' : 'list_item_icon'}>
        <Icon color="white" />
      </div>
      <p className={newChat ? 'new_chat_button_text' : 'list_item_text'}>
        {text}
      </p>
    </div>
  );
};

export default CustomButton;

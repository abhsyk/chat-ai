import { FC } from 'react';
import { BsSend } from 'react-icons/bs';

const NewMessageInput: FC = () => {
  return (
    <div className="new_message_input_container">
      <input
        className="new_message_input"
        placeholder="Send a message..."
        value=""
        onChange={() => {}}
        onKeyDown={() => {}}
      />
      <div className="new_message_icon_container" onChange={() => {}}>
        <BsSend color="grey" />
      </div>
    </div>
  );
};

export default NewMessageInput;

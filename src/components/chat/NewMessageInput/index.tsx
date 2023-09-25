import { FC, KeyboardEvent, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';
import { Content } from '../../../interfaces';

const NewMessageInput: FC = () => {
  const [content, setContent] = useState<string>('');

  const proceedMessage = () => {
    // create message obj
    const message: Content = {
      id: uuid(),
      content,
      isAiMessage: false,
    };
    console.log(message);

    // append the message to the local store (redux)

    // send message to the server

    // reset value of the input
    setContent('');
  };

  const handleSendMessage = () => {
    if (content.length > 0) proceedMessage();
  };

  // press the enter key
  const handleEnterPressed = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && content.length > 0) {
      proceedMessage();
    }
  };

  return (
    <div className="new_message_input_container">
      <input
        className="new_message_input"
        placeholder="Send a message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleEnterPressed}
      />
      <div className="new_message_icon_container" onClick={handleSendMessage}>
        <BsSend color="grey" />
      </div>
    </div>
  );
};

export default NewMessageInput;

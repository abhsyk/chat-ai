import { FC } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { CustomButton } from '../../ui';
import { Conversation } from '@backend/types';

type Props = {
  title: string; // conv title
  conversationId: string;
  onSelect: (id: Conversation['id']) => void;
};

const ListItem: FC<Props> = ({ title, conversationId, onSelect }) => {
  return (
    <CustomButton
      mode="listItem"
      icon={BsChatLeft}
      text={title}
      onClick={() => onSelect(conversationId)}
    />
  );
};

export default ListItem;

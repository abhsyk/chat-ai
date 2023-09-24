import { FC } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { CustomButton } from '../ui';

const ListItem: FC = () => {
  return <CustomButton mode="listItem" icon={BsChatLeft} text="History" />;
};

export default ListItem;

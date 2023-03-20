import { message as MessageComponent } from 'antd';

function NotificationPopup({type, message}) {
  const content = message;
  MessageComponent[type](
    content, '3'
  );
}

export default NotificationPopup;
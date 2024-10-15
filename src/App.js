import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { receiveMessage } from './redux/slices/chatSlice';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate receiving a message after 5 seconds
    const simulateIncomingMessage = () => {
      setTimeout(() => {
        dispatch(receiveMessage({
          id: Date.now(),
          user: 'User2',
          text: 'Hello from User2!',
          timestamp: new Date().toISOString(),
        }));
      }, 5000);
    };

    simulateIncomingMessage();
  }, [dispatch]);

  return (
    <div>
      <ChatWindow />
      <MessageInput />
    </div>
  );
};

export default App;

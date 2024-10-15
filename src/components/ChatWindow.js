import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ height: '400px', overflowY: 'auto', padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText
              primary={<Typography variant="body1">{message.user}: {message.text}</Typography>}
              secondary={<Typography variant="caption">{new Date(message.timestamp).toLocaleTimeString()}</Typography>}
            />
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </Box>
  );
};

export default ChatWindow;

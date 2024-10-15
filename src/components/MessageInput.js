import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/slices/chatSlice';

const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.chat.currentUser);

  const handleSend = () => {
    if (text.trim() === '') return;

    dispatch(sendMessage({
      id: Date.now(),
      user: currentUser,
      text,
      timestamp: new Date().toISOString(),
    }));

    setText('');
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, padding: 2 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        placeholder="Type a message..."
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;

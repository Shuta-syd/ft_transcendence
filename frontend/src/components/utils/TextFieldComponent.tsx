import { IconButton, InputAdornment, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import '../../styles/Chat.css';

type TextFieldComponentProps = {
  handleOnChange: any;
  handleOnClick: any;
  value: string;
}


function TextFieldComponent(props: TextFieldComponentProps) {
  const { handleOnChange, handleOnClick, value } = props;

  return (
    <div>
      <TextField
        fullWidth
        type={"text"}
        value={value}
        style={{ position: 'absolute', bottom: 20 }}
        onChange={(e) => { handleOnChange(e.target.value) }}
        InputProps={{
          placeholder: 'Write your message...',
          style: {
            color: '#3C444B',
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={handleOnClick}>
                <SendIcon/>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}

export default TextFieldComponent;

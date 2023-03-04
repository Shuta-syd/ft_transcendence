import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import ChatGroupComponent from "./ChatGroupComponent";


/**
 * @returns chat画面のコンポーネント
 */
export default function ChatComponent() {
  const socket: Socket = io('http://localhost:8080/chat')

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Connect: ${socket.id}`);
    });

    return () => {
      console.log(`Disconnect: ${socket.id}`);
      socket.disconnect();
    }
  }, [socket])

  return (
    <Grid container>
      <ChatGroupComponent socket={socket} />
      <Outlet context={socket}/>
    </Grid>
  )
}

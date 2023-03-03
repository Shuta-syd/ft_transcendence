/* eslint-disable no-unused-vars */
import { Avatar, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { ChatRoom } from "../../types/PrismaType";
import '../../styles/Chat.css'

/**
 * @returns Message送信可能なChannel一覧を表示するコンポーネント
 */
export default function ChannelListComponent() {
  const [channels, setChannels] = useState<ChatRoom[]>([]);

  const getChannels = async ():Promise<ChatRoom[]> => {
    try {
      const res = await axios.get(`http://localhost:8080/chat/group`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }


  useLayoutEffect(() => {
    getChannels().then((data) => { setChannels(data); })
  }, [])

    const handleClick = (roomId: string) => {
      console.log('click channel button');
      // socket.emit('create_dmRoom', { id: roomId})
    }

  return (
    <>
      {channels.map((room, idx) => (
        <Link to={`/channel/room/${room.id}`} onClick={() => handleClick(room.id)} key={idx} className={'ChannelLink'}>
          <Grid container padding={1} className={'ChannelList'}>
            <Grid item mr={2}>
              <Avatar ><PersonIcon /></Avatar>
              </Grid>
              <Grid item>
              <Typography variant="subtitle1" sx={{fontWeight: 700}} >{room.name}</Typography>
              </Grid>
            </Grid>
        </Link>
      ))}
    </>
  )
}

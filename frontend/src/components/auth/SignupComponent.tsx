import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SignupStepper from "./SignupStepper";
import UserProfileFormComponent from "./UserProfileFormComponent";

type SignupData = {
  username: string;
  email: string;
  password: string;
}


function SignupComponent() {
  // eslint-disable-next-line no-unused-vars
  const [activeStep, SetActiveStep] = useState(0);
  const { control, handleSubmit, reset } = useForm<SignupData>({ defaultValues: { email: '', password: '' } });

  const onSubmit: SubmitHandler<SignupData> = async (data) => {
    try {
      await axios.post('http://localhost:8080/auth/signup', {
        name: data.username,
        email: data.email,
        password: data.password,
      });
      reset();
    } catch (error) {
      alert('ユーザ作成に失敗しました。もう一度ユーザ作成をしてください');
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{ width: '100%'}}
        height={'30rem'}
        border={2}
        borderRadius={'5px'}
        borderColor={'#e0e3e9'}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          height={'100%'}
        >
          <Stack
            spacing={3}
            width={'90%'}
            textAlign='center'
          >
            <Typography variant="h5">Signup</Typography>
            <SignupStepper activeStep={activeStep}/>
            <UserProfileFormComponent control={control} />
          </Stack>
        </Box>
        <Link to='/login'>login user</Link>
        </Box>
      </form>
  )
}

export default SignupComponent;

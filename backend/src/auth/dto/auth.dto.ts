import { IsEmail, IsNotEmpty, IsNumber, MinLength } from 'class-validator';
export class Msg {
  message: string;
}
export class AuthDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
export class OtpCodeDao {
  @IsNumber()
  otpcode: string;
}

export class SignUpUserDto {
  @IsNotEmpty()
  @MinLength(4)
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(9)
  password?: string;
  image?: string;
  isFtLogin?: boolean;
}

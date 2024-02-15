import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "Email unique de l'utilisateur",
    example: 'exemple@student.42.fr',
    type: String,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Password',
    example: 'superMDP',
    type: String,
  })
  password: string;
}

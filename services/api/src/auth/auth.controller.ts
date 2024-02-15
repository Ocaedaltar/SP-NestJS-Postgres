import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: "Connection d'un utilisateur a l'application",
  })
  @ApiResponse({ status: 201, description: 'Creation de compte reussite' })
  @ApiResponse({
    status: 400,
    description: "Echec de la creation d'utilisateur",
  })
  @ApiBody({
    description: "Information de connection d'un utilisateur",
    type: AuthDTO,
    required: true,
  })
  @Post('signup')
  async signup(@Body() dto: AuthDTO, @Res() res: Response) {
    try {
      const token = await this.authService.signup(dto);
      console.log('token : ', token);
      return res.status(201).json({
        success: false,
        message: `Welcome ${dto.email}`,
        token: token,
      });
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }

  @ApiOperation({
    summary: "Connection d'un utilisateur a l'application",
  })
  @ApiResponse({ status: 200, description: 'Connection reussite' })
  @ApiResponse({ status: 400, description: 'Echec de la connection' })
  @ApiBody({
    description: "Information de connection d'un utilisateur",
    type: AuthDTO,
    required: true,
  })
  @Post('signin')
  async signin(@Body() dto: AuthDTO, @Res() res: Response) {
    try {
      return await this.authService.signin(dto);
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
}

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('session/:id')
  async validateSession(@Param('id') id: string) {
    return this.authService.validateIdSession(id);
  }
  @Post('login')
  async login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }
}

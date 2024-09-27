import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  /**
   * @param email
   * @returns  boolean
   * @description Check if a user exists in the database by email
   */
  async checkIfUserExists(email: string): Promise<boolean> {
    const user = await this.userModel.findOne({ email });
    return !!user;
  }

  async checkIfUserExistsByPhoneNumber(phoneNumber: string): Promise<boolean> {
    const user = await this.userModel.findOne({ phoneNumber });
    return !!user;
  }
  /**
   * @param createUserDto
   * @returns Promise<User>
   * @description Create a new user
   * @throws HttpException if user already exists
   * @throws HttpException if user cannot be created
   */
  async createUser(createUserDto: CreateUserDto): Promise<unknown> {
    try {
      const exists = await this.checkIfUserExists(createUserDto.email);
      const phoneNumberExists = await this.checkIfUserExistsByPhoneNumber(
        createUserDto.phoneNumber,
      );

      if (exists) {
        throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }

      if (phoneNumberExists) {
        throw new HttpException(
          'Phone number already exists',
          HttpStatus.CONFLICT,
        );
      }

      const user = new this.userModel(createUserDto);
      await user.save(); // Aquí es importante esperar la operación

      return {
        message: 'User created successfully',
        status: 'code-sended',
      };
    } catch (error) {
      // Loggear el error para obtener más información
      console.error('Error creating user:', error);

      // Enviar un mensaje de error detallado si es necesario
      throw new HttpException(
        error.message || 'User cannot be created',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  /**
   * @param email
   * @returns Promise<User>
   * @description Get a user by email
   */
  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }
}

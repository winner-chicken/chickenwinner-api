import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsOptional,
  IsEmail,
  IsBoolean,
  IsDate,
  Length,
  IsUrl,
  IsNotEmpty,
  IsCreditCard,
  Matches,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  firstName: string;

  @IsString()
  @IsOptional()
  middleName?: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido paterno es requerido' })
  lastName: string;

  @IsString()
  @IsOptional()
  maternalSurname?: string;

  @IsDate()
  @IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
  birthDate: Date;

  @IsEmail({}, { message: 'Correo electrónico inválido' })
  email: string;

  @IsString()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres',
  })
  password: string;

  @IsString()
  @Length(10, 10, { message: 'El número de teléfono debe tener 10 dígitos' })
  phoneNumber: string;

  @IsString()
  @Length(16, 16, {
    message: 'El número de la tarjeta de crédito debe tener 16 dígitos',
  })
  @IsCreditCard({ message: 'Número de tarjeta de crédito inválido' })
  creditCardNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'La institución bancaria es requerida' })
  bankInstitution: string;

  @IsString()
  @Length(3, 3, { message: 'El CVV debe tener 3 dígitos' })
  @Matches(/^\d{3}$/, { message: 'CVV inválido' })
  cvv: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'El campo "Está bloqueado" es requerido' })
  isBlocked: boolean;

  @IsString()
  @IsNotEmpty({ message: 'El username es requerido' })
  username: string;

  @IsUrl({}, { message: 'URL de imagen inválida' })
  @IsOptional()
  profileImageUrl?: string;
}

export class CreateUserDto extends PartialType(UserDto) {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido paterno es requerido' })
  lastName: string;

  @IsDate()
  @IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
  birthDate: Date;

  @IsEmail({}, { message: 'Correo electrónico inválido' })
  email: string;

  @IsString()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres',
  })
  password: string;

  @IsString()
  @Length(10, 10, { message: 'El número de teléfono debe tener 10 dígitos' })
  phoneNumber: string;

  @IsString()
  @Length(16, 16, {
    message: 'El número de la tarjeta de crédito debe tener 16 dígitos',
  })
  @IsCreditCard({ message: 'Número de tarjeta de crédito inválido' })
  creditCardNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'La institución bancaria es requerida' })
  bankInstitution: string;

  @IsString()
  @Length(3, 3, { message: 'El CVV debe tener 3 dígitos' })
  @Matches(/^\d{3}$/, { message: 'CVV inválido' })
  cvv: string;
}

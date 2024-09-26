import { UserBaseSchema } from 'src/shared/entities/user.base.entity';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class User extends UserBaseSchema {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  middleName: string;

  @Prop()
  lastName: string;

  @Prop()
  maternalSurname: string;

  @Prop()
  birthDate: Date;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ required: true, unique: true, minlength: 10, maxlength: 10 })
  phoneNumber: string;

  @Prop({ required: true })
  creditCardNumber: string;

  @Prop({ required: true })
  bankInstitution: string;

  @Prop()
  profilePicture: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop()
  verificationCode: string;

  @Prop()
  resetPasswordCode: string;

  @Prop({ required: true, minlength: 3, maxlength: 4 })
  cvv: string;

  @Prop({ required: false, default: 0.0, min: 0.0 })
  balance: number;

  @Prop()
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

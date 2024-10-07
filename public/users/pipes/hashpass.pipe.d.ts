import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateEmailUserDto } from 'src/users/dtos';
export declare class HashpassPipe implements PipeTransform {
    transform(createUserDto: CreateEmailUserDto, metadata: ArgumentMetadata): Promise<CreateEmailUserDto>;
}

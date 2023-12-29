import { IsIn, IsString } from 'class-validator';

export class ChangeStatusDto {
  @IsString()
  @IsIn(['available', 'busy', 'unavailable'])
  status: string;
}

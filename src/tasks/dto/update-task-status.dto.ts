import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks-statuts.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

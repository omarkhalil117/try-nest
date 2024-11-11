import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { TaskStatus } from './task.model';

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: String,
    enum: Object.values(TaskStatus),
    required: true,
  })
  status: TaskStatus;
}

// Create the schema using SchemaFactory
export const TaskSchema = SchemaFactory.createForClass(Task);

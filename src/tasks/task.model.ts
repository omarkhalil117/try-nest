export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export enum TaskStatus {
  new = 'new',
  in_progress = 'in_progress',
  done = 'done',
}

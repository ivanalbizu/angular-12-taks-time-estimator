export interface Task {
  id?: string;
  name?: string;
  page: string;
  description: string;
  estimatedTime: number,
  realTime: number
}
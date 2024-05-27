type Status = "done" | "in progress" | "not done";

type Todo = {
  title: string;
  description: string;
  status: Status;
  created_at?: string;
  id?: string;
};

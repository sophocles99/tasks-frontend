type Status = "done" | "in progress" | "not done";

interface NewTask {
    title: string;
    description: string;
    status: Status;
}

interface FullTask extends NewTask {
    created_at: string;
    id: string;
}

type TaskPatch = Partial<NewTask>;

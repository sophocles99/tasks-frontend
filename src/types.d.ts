type Status = "done" | "in progress" | "not done";

interface NewTask {
    title: string;
    description: string;
}

interface FullTask extends NewTask {
    status: Status;
    created_at: string;
    id: string;
}

type TaskPatch = Partial<NewTask> & {
    status?: Status;
};

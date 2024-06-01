import StatusIcon from "./StatusIcon";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <section>
      <StatusIcon status={task.status} />
      <p>{task.title}</p>
    </section>
  );
};

export default TaskCard;

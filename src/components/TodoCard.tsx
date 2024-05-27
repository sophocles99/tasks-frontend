import StatusIcon from "./StatusIcon"

type TodoCardProps = {
    todo: Todo
}

const TodoCard = ({ todo }: TodoCardProps) => {
    return <section>
        <StatusIcon status={todo.status} />
        <p>{todo.title}</p>
    </section>
}

export default TodoCard

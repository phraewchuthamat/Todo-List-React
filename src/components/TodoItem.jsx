export const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const { id, name, dueDate, description, completed } = todo;

  return (
    <div
      className={`border-2 border-black p-4 relative transition-colors ${
        completed ? "bg-gray-100" : "bg-primary/10"
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1.5 w-5 h-5 accent-secondary cursor-pointer shrink-0 border-2 border-black"
        />

        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-lg leading-tight warp-break-words ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {name}
          </h3>
          <p className="text-gray-500 text-sm leading-tight mt-1 wrap-break-words">
            {description}
          </p>
          <p className="text-accent font-bold mt-3 text-xs uppercase tracking-wider">
            Due: {dueDate}
          </p>
        </div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="text-blue-600 hover:scale-125 transition-transform p-1"
          title="Edit Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:scale-125 transition-transform p-1"
          title="Delete Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

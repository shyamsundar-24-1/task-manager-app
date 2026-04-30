import { deleteTask, updateTask } from '../services/taskService';

function TaskList({ tasks, onRefresh }) {

  const handleComplete = async (task) => {
    try {
      await updateTask(task.id, { ...task, status: 'COMPLETED' });
      onRefresh();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      onRefresh();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.status === 'COMPLETED' ? 'completed' : ''}`}
        >
          <div className="task-info">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className={`badge ${task.status === 'COMPLETED' ? 'badge-done' : 'badge-pending'}`}>
              {task.status}
            </span>
          </div>

          <div className="task-actions">
            {task.status === 'PENDING' && (
              <button className="btn-complete" onClick={() => handleComplete(task)}>
                ✔ Complete
              </button>
            )}
            <button className="btn-delete" onClick={() => handleDelete(task.id)}>
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
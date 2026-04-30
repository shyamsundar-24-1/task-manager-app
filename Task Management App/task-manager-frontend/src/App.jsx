import { useState, useEffect } from 'react';
import { getAllTasks } from './services/taskService';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks]     = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      {loading
        ? <p className="loading">Loading tasks...</p>
        : <TaskList tasks={tasks} onRefresh={fetchTasks} />
      }
    </div>
  );
}

export default App;
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React and Native",
  description:
    "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
  tags: ["Web", "React", "JavaScript"],
  priority: "High",
  isFavorite: false,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);
  const [updateTask, setUpdateTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUpdateTask = (updatedTask) => {
    setUpdateTask(updatedTask);
    setShowModal(true);
  };

  // Create or  Update task submit handler
  const handleSubmit = (newTask, isAdd) => {
    if (isAdd) {
      const nextTasks = [...tasks, newTask];
      setTasks(nextTasks);
    } else {
      const nextTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return { ...task, ...newTask };
        }
        return task;
      });
      setTasks(nextTasks);
    }

    // Close modal
    handleClose();
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    const nextTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(nextTasks);
  };

  // Favourite a task
  const handleFavouriteTask = (taskId) => {
    const nextTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isFavorite: !task.isFavorite };
      }
      return task;
    });

    setTasks(nextTasks);
  };

  // Close modal
  const handleClose = () => {
    setUpdateTask(null);
    setShowModal(false);
  };

  return (
    <section className="mb-20 relative" id="tasks">
      {showModal && (
        <TaskForm
          onSubmit={handleSubmit}
          updateTask={updateTask}
          onClose={handleClose}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onShow={() => setShowModal(true)} />
          <TaskList
            tasks={tasks}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
            onFavourite={handleFavouriteTask}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

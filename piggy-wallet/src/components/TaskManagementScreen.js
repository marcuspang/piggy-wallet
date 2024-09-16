import React, { useState } from 'react';
import { ChevronLeft, Plus, Home, Flag, ClipboardList, Settings } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

const TaskItem = ({ task, onComplete, onDelete }) => (
  <div className="flex items-center p-4 rounded-lg mb-2 bg-gray-100 border border-gray-300">
    <div className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center text-2xl bg-white">
      {task.icon}
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="font-bold">Earn ${task.reward}</p>
    </div>
    <button 
      onClick={() => onComplete(task.id)} 
      className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200"
    >
      {task.completed && <span className="text-green-500 text-lg">✓</span>}
    </button>
    <button 
      onClick={() => onDelete(task.id)}
      className="ml-2 text-red-500 hover:text-red-700"
    >
      ×
    </button>
  </div>
);

const TaskManagementScreen = ({ onBack }) => {
  const [tasks, setTasks] = useState([]);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    icon: '📝',
    reward: 1,
  });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addTask = () => {
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
      setNewTask({ title: '', icon: '📝', reward: 1 });
      setShowNewTaskForm(false);
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const onEmojiClick = (emojiObject) => {
    setNewTask({...newTask, icon: emojiObject.emoji});
    setShowEmojiPicker(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <ChevronLeft onClick={onBack} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">Tasks</h1>
        <Plus onClick={() => setShowNewTaskForm(true)} className="cursor-pointer" />
      </header>

      {/* Task List */}
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="font-bold mb-2">Today's Tasks</h2>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        ))}
        {tasks.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No tasks yet. Click the + to add a new task.</p>
        )}
      </div>

      {/* New Task Form */}
      {showNewTaskForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-lg w-full max-w-sm">
            <h2 className="font-bold mb-4">Add New Task</h2>
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              className="w-full p-2 mb-2 border rounded"
            />
            <div className="flex items-center mb-2">
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 border rounded mr-2"
              >
                {newTask.icon}
              </button>
              <span>Select Task Icon</span>
            </div>
            {showEmojiPicker && (
              <div className="mb-2">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
            <input
              type="number"
              placeholder="Reward"
              value={newTask.reward}
              onChange={(e) => setNewTask({...newTask, reward: parseFloat(e.target.value)})}
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end">
              <button onClick={() => setShowNewTaskForm(false)} className="mr-2 px-4 py-2 bg-gray-200 rounded">Cancel</button>
              <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <footer className="bg-gray-100 p-4">
        <div className="flex justify-between">
          <button className="flex flex-col items-center">
            <Home size={24} color="#737373" />
            <span className="text-xs text-gray-500">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Flag size={24} color="#737373" />
            <span className="text-xs text-gray-500">Goals</span>
          </button>
          <button className="flex flex-col items-center">
            <ClipboardList size={24} color="#8B5CF6" />
            <span className="text-xs text-purple-600">Tasks</span>
          </button>
          <button className="flex flex-col items-center">
            <Settings size={24} color="#737373" />
            <span className="text-xs text-gray-500">Settings</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TaskManagementScreen;

import useTasks from "../hooks/useTasks";

const MainContent: React.FC = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {task.title}
            </h3>
            <p className="text-gray-600 mt-2">{task.description}</p>
            <p
              className={`mt-2 font-semibold ${
                task.status === "Completed"
                  ? "text-green-600"
                  : task.status === "In Progress"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {task.status}
            </p>
            <p className="mt-2 text-gray-500 text-sm">{task.dueDate}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;

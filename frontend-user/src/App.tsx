import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  const tasks = [
    {
      title: "Task 1",
      description: "This is the description of Task 1.",
      status: "Completed",
      dueDate: "2025-03-10",
    },
  ];

  return (
    <div className="App">
      <Header userName="Federico"></Header>
      <MainContent tasks={tasks}></MainContent>
    </div>
  );
};

export default App;

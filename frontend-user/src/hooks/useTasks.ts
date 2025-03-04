import { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  title: string;
  description: string;
  status: string;
  dueDate: string;
}

const API_URL = "http://localhost:3000/api/tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError("Error fetching tasks");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading, error };
};

export default useTasks;

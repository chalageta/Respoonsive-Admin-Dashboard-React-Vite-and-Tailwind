import Title from "../../ui/Title";
import { FiSend } from "react-icons/fi";
import BarChart from "./BarChart";
const Balance = ({ darkMode }) => {
  return (
    <div className="bg-white p-4 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1">
      <div className="flex items-center justify-between">
        <Title>Added Books</Title>
        <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 h-8 w-8" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          600 <span className="text-xl font-medium"></span>
        </h1>
        <span>On july 2024</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;

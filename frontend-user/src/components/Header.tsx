interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="w-full p-4 bg-blue-600 text-white flex justify-between items-center">
      <div className="text-2xl font-semibold">TaskFlow</div>

      <div className="flex items-center space-x-4">
        <span>{userName}</span>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

const Member = ({ user }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-12 h-12 rounded-full flex"
        />
        <div>
          <h2 className="font-bold">{user.name} </h2>
          <span className="font-semibold text-gray-400 text-sm">
            {user.country}
          </span>
        </div>
      </div>
      <span
        className={`${user.bgColor} p-3 rounded-full text-xs text-gray-700 
        font-semibold dark:bg-gray-500 dark:text-gray-300`}
      >
        {user.role}
      </span>
    </div>
  );
};

export default Member;

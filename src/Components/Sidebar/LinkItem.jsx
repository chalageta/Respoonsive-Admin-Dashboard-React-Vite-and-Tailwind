const LinkItem = ({ href, icon: Icon, text, badge }) => {
  return <li>
    <a href={href} className="flex items-center p-2 text-gray-900 rounded-lg
     dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <Icon className="mr-3" />
      <span className="flex-1 me-3">{text}</span>
      {badge && <span className={`flex items-center justify-center
         ms-3 px-2 text-sm font-medium rounded-full
         ${badge.color} ${badge.darkColor}`}>{badge.text}</span>}
    </a>
   </li>;
};

export default LinkItem;

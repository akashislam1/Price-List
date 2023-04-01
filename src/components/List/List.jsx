import React from "react";

const List = ({ route }) => {
  return (
    <li className="px-10 py-2 hover:bg-purple-800">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default List;

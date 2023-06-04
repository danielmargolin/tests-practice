import { useMemo } from "react";

const RecentlySearchedList = ({ searchHistory }) => {
  const recentHistory = useMemo(
    () => searchHistory.slice(-3),
    [searchHistory]
  );

  return (
    <div>
      {recentHistory.map((search, index) => (
        <h2 key={index}>{search}</h2>
      ))}
    </div>
  );
};

export default RecentlySearchedList;

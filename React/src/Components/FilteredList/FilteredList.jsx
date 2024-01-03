import { useMemo, useState } from "react";

export const FilteredList = ({ data }) => {

  const [list, setList] = useState([]);

  useMemo(() => {
    const currentList = data.filter((e) => e.age > 18);
    setList(currentList);
  }, [data]);

  return (
    <div>
      <h3>People filtered (age greater than 18):</h3>
      <ul>
        {list.map((e) => (
          <li key={e.id}>
            <h4>{`${e.name} is ${e.age} years old.`}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

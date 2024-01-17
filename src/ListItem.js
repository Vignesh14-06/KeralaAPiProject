import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router";

const ListItem = ({ value }) => {
  const [data, setData] = useState([]);
//   const [viewData, setViewData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleClick = (val) => {
    // const filterdData = data.filter((data) => data.id === val);
    // setViewData(filterdData);
    navigate(`/viewDetails/${val}`)
  };
  return (
    <div>
      <table>
        <thead>
          <th>Title</th>
        </thead>
        {data
          .filter((data) =>
            value === ""
              ? data
              : data.title.toLowerCase().includes(value.toLowerCase())
          )
          .map((data) => (
            <tbody onClick={() => handleClick(data.id)}>
              <>
                <td>{data.title}</td>
              </>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default ListItem;

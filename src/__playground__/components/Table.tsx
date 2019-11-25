import React from 'react';

export default ({ event, handleEvent }: {
  event: string; handleEvent: (e: React.MouseEvent<HTMLTableElement, MouseEvent>) => void;
}) => {
  const table = [];
  const range = Array.from(Array(5).keys());
  for (let index = 0; index < 10; index++) {
    table.push(
      <tr key={index}>
        {range.map(k => (
          <td key={k} {...{ [`${event}`]: handleEvent }} />
        ))}
      </tr>
    );
  }

  return (
    <div>
      This is a table
      <table className="grid">
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};

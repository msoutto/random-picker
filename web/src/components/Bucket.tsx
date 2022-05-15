import { useState } from "react";

export function Bucket() {
  const items = ["Teste 1", "Teste 2", "Teste 3"];
  const listItems = items.map((item) =>
    <li key={item}>
      {item}
    </li>
  );
  return (
    <div className="flow-root">
      <ul>{listItems}</ul>
    </div>
    
  );
}
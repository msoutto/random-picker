import { useState } from "react";

export function Bucket() {
  const items = ["Teste 1", "Teste 2", "Teste 3"];
  const listItems = items.map((item) =>
    <li key={item} className="rounded border border-zinc-400">
      {item}
    </li>
  );
  return (
    <div className="m-8">
      <ul className="flex flex-col gap-2">
        {listItems}
      </ul>
    </div>
    
  );
}
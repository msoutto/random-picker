import { useEffect, useState } from "react";

interface BucketProps {
  items: Array<string>;
}

export function Bucket({ items }: BucketProps) {

  const populateList = () => {
    return items.map((item) =>
      <li key={item} className="rounded p-1 border border-zinc-400">
        {item}
      </li>
    );
  }
  
  const listItems = populateList();

  useEffect(() => { 
    populateList() 
  }, [items]);

  return (
    <div className="m-8">
      <ul className="flex flex-col gap-2">
        {listItems}
      </ul>
    </div>
    
  );
}
import { useState } from 'react';
import { AddForm } from './components/AddForm';
import { Bucket } from './components/Bucket'

export function App() {
  const [items, setItems] = useState(['Teste 1', 'Teste 2', 'Teste 3']);

  const addToBucket = (item: string) => {
    setItems([...items, item]);
  };

  return (
    <div className="flex justify-center w-[100%] mt-16">
      <div className="flex flex-col w-[75%]">
        <AddForm addToBucket={addToBucket} />
        <Bucket items={items} />
        <button className="button">Pick random</button>
      </div>
    </div>
  );
}
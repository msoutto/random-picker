import { useState } from 'react';
import { AddForm } from './components/AddForm';
import { Bucket } from './components/Bucket'
import { PickRandomButton } from './components/PickRandomButton';

export function App() {
  const [items, setItems] = useState(['Teste 1', 'Teste 2', 'Teste 3']);
  const [pickedItem, setPickedItem] = useState<number>();

  const addToBucket = (item: string) => {
    setItems([...items, item]);
  };

  const pickItem = (index: number) => {
    if (index >= 0) {
      setPickedItem(index);
      console.log(index, items[index]);
    }
  }

  return (
    <div className="flex justify-center w-[100%] mt-16">
      <div className="flex flex-col w-[75%]">
        <AddForm addToBucket={addToBucket} />
        <Bucket items={items} />
        <PickRandomButton items={items} pickItem={pickItem} />
      </div>
    </div>
  );
}
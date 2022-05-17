import { AddForm } from './components/AddForm';
import { Bucket } from './components/Bucket'

export function App() {
  return (
    <div className="flex justify-center w-[100%] mt-16">
      <div className="flex flex-col w-[75%]">
        <AddForm />
        <Bucket />
        <button className="button">Pick random</button>
      </div>
    </div>
  );
}
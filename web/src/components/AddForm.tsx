import { FormEvent, useState } from "react";

interface AddFormProps {
    addToBucket: (item: string) => void;
}

export function AddForm({ addToBucket }: AddFormProps) {
    const [item, setItem] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        addToBucket(item);
    }

    return (
        <form 
            className="flex justify-between"
            onSubmit={handleSubmit}
        >
            <input 
                className="left-2 w-[75%] rounded p-1 text-zinc-700 bg-zinc-200"
                placeholder="Add to bucket..."
                onChange={event => setItem(event.target.value)}
            ></input>
            <button type="submit" className="button right-5 w-[15%]">Add</button>
        </form>
    );
}
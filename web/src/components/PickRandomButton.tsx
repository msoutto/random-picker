interface PickRandomButtonProps {
    items: Array<string>;
    pickItem: (index: number) => void;
}

export function PickRandomButton({ items, pickItem }: PickRandomButtonProps) {
    const pickRandom = () => {
        if (items.length < 1)
            pickItem(-1);
        
        // random from 0 to items.length
        let index = Math.floor(Math.random() * items.length);
        console.log(index);
        pickItem(index);
    }

    return (
        <div className="flex justify-center items-center mx-4">
            <button 
                className="button w-full"
                onClick={pickRandom}
            >Pick random</button>
        </div>
    );
}
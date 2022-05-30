interface PickRandomButtonProps {
    items: Array<string>;
}

export function PickRandomButton({ items }: PickRandomButtonProps) {
    const pickRandom = () => {
        
    }

    return (
        <button 
            className="button"
            onClick={pickRandom}
        >Pick random</button>
    );
}
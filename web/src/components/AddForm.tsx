export function AddForm() {
    return (
        <form className="flex justify-between">
            <input className="left-2 w-[75%] rounded bg-zinc-400"></input>
            <button type="submit" className="button right-5 w-[15%]">Add</button>
        </form>
    );
}
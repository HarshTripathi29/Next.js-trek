import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState<string>(''); 
  // Specify string type for todo
  const [list, setList] = useState<string[]>([]); 
  // Specify string array type for list

  const handleClick = () => {
    setList([...list, todo]);
    setTodo(''); 
    console.log(list);
  };

  const handleDelete = (index: number) => { 
    // Specify number type for index
    setList(list.filter((_, i) => i !== index));
    console.log(list);
  };

  return (
    <main className="">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl">ToDo App</h1>
        <div className="mt-8">
          <input
            type='text'
            value={todo}
            placeholder="Create a todo"
            className="border-2 p-2 rounded-md"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="border-none rounded-md ml-2 py-2 px-5 bg-blue-600 text-white text-md"
          >
            Create
          </button>
        </div>
        <div className="w-[40%] mt-8 border-t-2">
          <ol>
            {list.map((item, index) => (
              <li key={index} className="flex p-4 mt-1 justify-between">
                <div className="flex">
                  <p>{index + 1}. </p>
                  <div>{item}</div>
                </div>
                
                <button
                  className="border-none rounded-md ml-2 py-2 px-5 bg-red-600 text-white text-md"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

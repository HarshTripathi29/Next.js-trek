'use client'
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState<string>(''); 
  // Specify string type for todo
  const [list, setList] = useState<string[]>([]); 
  // Specify string array type for list

  const[editIndex, setEditIndex]=useState<number|null>(null);
  const [editTodo, setEditTodo]=useState<string>('');

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

  const handleEdit=(index:number)=>{
    setEditIndex(index);
    setEditTodo(list[index]);
  }

  const handleSave=()=>{
    const updatedList = list.map((item, i)=>i==editIndex?editTodo:item)
    setList(updatedList);
    setEditIndex(null);
    setEditTodo('');
  }

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
                  <p className="text-center">{index + 1}. </p>
                  {
                    index===editIndex?
                    (
                    <input 
                      type='text' 
                      placeholder="New todo"
                      onChange={(e)=>setEditTodo(e.target.value)}
                      className='ml-2 ' 
                    />
                  ):(
                  <>
                    <div>{item}</div>
                  </>
                  )
                  }
                </div>
                
                <div>
                <button
                  className="border-none rounded-md ml-2 py-2 px-5 bg-red-600 text-white text-md"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </button>
                {
                  index===editIndex?(
                    <button
                    className="border-none rounded-md ml-2 py-2 px-5 bg-cyan-600 text-white text-md"
                    onClick={handleSave}
                    >
                    Save
                    </button>
                  ):(
                <button
                  className="border-none rounded-md ml-2 py-2 px-5 bg-cyan-600 text-white text-md"
                  onClick={()=>handleEdit(index)}
                >
                  Edit
                </button>
                  )
                }
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

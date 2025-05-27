import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SelectPlayer from "../SelectPlayer/SelectPlayer";


const Blogs = () => {
    const [details, setDetails]=useState([]);
    

    useEffect(()=>{
        fetch('/src/assets/data.json')
        .then(response=>response.json())
        .then(data=>setDetails(data))
    },[])

    const [visited, setVisited]=useState([]);
    const handlerCount=(blog)=>{
        console.log(blog)
        const newVisit=[...visited, blog]
        setVisited(newVisit)
    }
    
    const [color, setColor]=useState(false)
    const handleColor=()=>{
        setColor(!color)
    }

    return (
        <div>
            <div className="flex justify-between font-bold m-8">
                <div className="">
                    <h1 className="text-3xl">Available Players</h1>
                    <h1>Select Items:</h1>
                </div>


                <div >
                    <div className="text-2xl space-x-3 border-1 rounded-md p-3">
                        <button style={{backgroundColor: color? 'yellow':''}} onClick={handleColor}>Available</button>
                        <button>Seleted:({visited.length})</button>
                        
                    </div>
                    
                    
                </div>
            </div>

            <div>
                 {
                 visited.map(selectPlayer=><SelectPlayer selectPlayer={selectPlayer}></SelectPlayer>)
                 }
            </div>

            <div className="grid grid-cols-3 gap-4 p-4">
                {
                details.map(blog=><Blog
                     key={details.id}
                     blog={blog}
                     handlerCount={handlerCount}
                     >
                    </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;
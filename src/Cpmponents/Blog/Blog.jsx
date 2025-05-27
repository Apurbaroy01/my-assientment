import { CgProfile } from "react-icons/cg";

import { IoFlag } from "react-icons/io5";

const Blog = ({blog,handlerCount}) => {
    const {cover,name,nationality,price}=blog
    return (
        <div className="border-1 rounded-2xl ">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className="rounded"
                    src={cover}
                    alt="Loading.." />
                </figure>
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <CgProfile />
                        <h2 className="card-title"> {name}</h2>
                    </div>
                    <div className="border-b-1">
                        <div className="flex items-center gap-2 pb-2">
                            <IoFlag />
                        <p>{nationality}</p>
                        <div>
                            <h2 className="bg-gray-300 p-1 rounded">All-Rounder</h2>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="font-bold">Rating</h2>
                        <div>
                            <div class="rating">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="2 star"  />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="5 star" checked="checked"/>
                             </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="font-bold">Left-Hand-Bat</h2>
                        <h2>Left-Hand-Bat</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold">Price: {price}</h2>
                        <button onClick={()=>handlerCount(blog)} className="btn ">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;


const SelectPlayer = ({selectPlayer}) => {
    console.log(selectPlayer)
    const {cover,id, name,price}=selectPlayer;
    return (
        <div className="border-2 m-2 rounded">
            <div className="flex gap-3">
                <div className="w-30 p-2 ">
                    <img className="rounded" src={cover}  />
                </div>
                <div className=" flex justify-between items-center font-bold w-full">
                    <div>
                        <p >Jurcy no: {id}</p>
                        <h1 className="text-2xl">Name: {name}</h1>
                    </div>
                    <div className="pr-9 text-2xl">
                        <h1>Price: {price}</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SelectPlayer;
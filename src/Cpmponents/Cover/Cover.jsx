

const Cover = ({handlerCoin}) => {
    return (
        
        
        <div className=" justify-center bg-amber-200 text-center py-5 rounded-4xl" >
            <div className="items-center my-10">
                <img src="/src/img/banner-main.png " alt="" class="mx-auto" />
                <h1 className="text-4xl font-bold ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className="text-2xl">Beyond Boundaries Beyond Limits</h3>
                <button className="btn btn-primary" onClick={()=>handlerCoin(6000)}>Claim Free creadit</button>
            </div>
            
        </div>
    );
};

export default Cover;
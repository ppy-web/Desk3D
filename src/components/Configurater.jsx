import textures from "../store/detail.js";
import useConfigStore from "../store/configStore.js";
const Configurater = () => {
    const deskConfig = useConfigStore();
    return (
        <div className="flex flex-col h-full overflow-y-auto space-y-4 select-none">
            <h2 className='font-semibold text-xl pl-2'>面板选择</h2>
            <hr/>
            <div className="flex flex-col">
                {Object.values(textures).map(item=>{
                    return (
                        <button className={`flex
                        items-center
                        border-2
                        space-x-2
                        w-full
                        hover:bg-zinc-300
                        p-2
                        mt-4
                        rounded-3xl
                        cursor-pointer
                        ${deskConfig.topMaterial === item.id ? 'bg-zinc-300':'bg-white'}
                        `
                        }
                        onClick={()=> {
                            deskConfig.setTopMaterial(item.id)
                        }}
                        >
                            <img src={item.texture.map} alt="texturemap" className='w-14 h-14 rounded-full'/>
                            <div>{item.name}</div>
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Configurater;
import textures, {frameTypes, frameColors} from "../store/detail.js";

import useConfigStore from "../store/configStore.js";
const Configurater = () => {
    const deskConfig = useConfigStore();
    return (
        <div className="flex flex-col h-full overflow-y-auto space-y-4 select-none">
            <h2 className='font-semibold text-xl pl-2'>选择您喜欢的桌板</h2>
            <hr/>
            <div className="flex flex-col">
                {Object.values(textures).map(item=>{
                    return (
                        <button key={item.id} className={`flex
                        items-center
                        border-1
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
                            <div className='font-light'>{item.name}</div>
                        </button>
                    )
                })}
            </div>
            <h2 className="font-semibold text-xl pl-2">选择您喜欢的桌腿</h2>
            <hr/>
            <div className='flex flex-row justify-between'>
                {
                    frameTypes.map((item)=>(
                        <button key={item.id} className={`
                        hover:bg-zinc-300
                        border-1
                        space-x-2
                        w-5/12
                        p-2 mt-4
                        rounded-3xl
                        cursor-pointer
                        text-center
                        ${deskConfig.frameType === item.id ? 'bg-zinc-300':'bg-white'}
                        `
                        }
                                onClick={()=> {
                                    if ( deskConfig.frameType === "adjustable") {
                                        deskConfig.setElectric(false)
                                    }
                                    deskConfig.setFrameType(item.id)
                                }}
                        >
                            <div className='font-light'>{item.name}</div>
                        </button>
                    ))
                }
            </div>
            <div className='flex flex-col'>
                {
                    frameColors.map((item)=>(
                        <button key={item.id} className={`
                        hover:bg-zinc-300
                        border-1
                        w-full
                        p-2 mt-4
                        rounded-3xl
                        cursor-pointer
                        flex
                        items-center
                        ${deskConfig.frameColor === item.id ? 'bg-zinc-300':'bg-white'}
                        `
                        }
                                onClick={()=> {
                                    deskConfig.setFrameColor(item.id)
                                }}
                        >
                            <div className="h-14 w-14 rounded-full border shadow-sm" style={ {backgroundColor: item.id} }></div>
                            <div className='font-light ml-2'>{item.name}</div>
                        </button>
                    ))
                }
            </div>
            {
                deskConfig.frameType === "adjustable" && <>
                    <h2 className="font-semibold text-xl pl-2">电动升降功能</h2>
                    <hr/>
                    <div className='flex flex-row justify-between'>
                        <button className={`
                        hover:bg-green-100
                        border-1
                        space-x-2
                        w-3/12
                        p-2 mt-4
                        rounded-3xl
                        cursor-pointer
                        text-center
                        ${deskConfig.electric ? 'bg-green-100':'bg-white'}
                        `
                        }
                                onClick={()=> {
                                    deskConfig.setElectric(!deskConfig.electric)
                                }}
                        >
                            <div className='font-light'>{deskConfig.electric ? "已选":"未选"}</div>
                        </button>
                    </div>
                </>
            }

        </div>
    );
}

export default Configurater;
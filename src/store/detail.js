const textures = {
    oak: {
        id: 'oak',
        name: '橡木面板',
        texture: {
            map: `${import.meta.env.VITE_BASE_URL}textures/oak_veneer_01_diff_1k.jpg`,
        }
    },
    plywood: {
        id: 'plywood',
        name: '合成木板',
        texture: {
            map: `${import.meta.env.VITE_BASE_URL}textures/plywood_diff_1k.jpg`,
        }
    },
    rosewood: {
        id: 'rosewood',
        name: '红木面板',
        texture: {
            map: `${import.meta.env.VITE_BASE_URL}/textures/rosewood_veneer1_diff_1k.jpg`,
        }
    },
    carbon: {
        id: 'carbon',
        name: '碳纤维面板',
        texture: {
            map: `${import.meta.env.VITE_BASE_URL}/textures/carbon-fiber_metallic.png`,
        }
    },
    walnut: {
        id: 'walnut',
        name: '胡桃木面板',
        texture: {
            map: `${import.meta.env.VITE_BASE_URL}/textures/walnut_diff_1k.jpg`,
        }
    },

}

export default textures;

export const frameTypes = [
    {
        id: 'standard',
        name: '标准支架',
    },
    {
        id: 'adjustable',
        name: '可调节支架',
    },
]

export const frameColors = [
    {
        id: '#565656',
        name: '金属灰',
    },
    {
        id: '#ceb9a3',
        name: '原木黄',
    },
    {
        id: '#f8f8f8',
        name: '菱花白',
    },
    {
        id: '#a0a0a0',
        name: '典雅灰',
    },
]



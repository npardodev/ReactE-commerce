export const categories = {
    NOTEBOOK: {
        name: 'Notebook',
        id: '1'
    },
    DISCOS: {
        name: 'Discos',
        id: '2'
    },
    MONITORES: {
        name: 'Discos',
        id: '3'
    },
    COMBO_PC: {
        name: 'Combos de pc',
        id: '4'
    },
    PLACAS_VIDEO: {
        name: 'Placas de video',
        id: '5'
    }
};

export const myProducts = [{
        id: 1,
        title: 'Notebook Bangho',
        descrip: 'Notebook Bangho ',
        longDescipt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, vero cum corrupti iusto officia quis voluptatem totam dicta? Accusantium sunt vel ex non voluptas recusandae dicta rerum iste atque sapiente!",
        price: 55000,
        img: {
            src: '/img/notebook.jpeg',
            alt: "Imagen Notebook Bangho core i5"
        },
        category: categories.NOTEBOOK,
        stock: 14
    },
    {
        id: 2,
        title: 'Combo AMD',
        descrip: 'Combo actualizacion PC',
        longDescipt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, vero cum corrupti iusto officia quis voluptatem totam dicta? Accusantium sunt vel ex non voluptas recusandae dicta rerum iste atque sapiente!",
        price: 122000,
        img: {
            src: 'https://mexx-img-2019.s3.amazonaws.com/40133_1.jpeg',
            alt: "Imagen como para PC"
        },
        category: categories.COMBO_PC,
        stock: 44
    },
    {
        id: 3,
        title: 'Disco SSD Nvme',
        descrip: 'Disco SSD NVME',
        longDescipt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, vero cum corrupti iusto officia quis voluptatem totam dicta? Accusantium sunt vel ex non voluptas recusandae dicta rerum iste atque sapiente!",
        price: 122000,
        img: {
            src: 'https://mexx-img-2019.s3.amazonaws.com/36663_1.jpeg',
            alt: "Imagen SSD NVME"
        },
        category: categories.DISCOS,
        stock: 124
    },
    {
        id: 4,
        title: 'Combo AMD',
        descrip: 'Combo actualizacion PC',
        longDescipt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, vero cum corrupti iusto officia quis voluptatem totam dicta? Accusantium sunt vel ex non voluptas recusandae dicta rerum iste atque sapiente!",
        price: 122000,
        img: {
            src: 'https://mexx-img-2019.s3.amazonaws.com/40133_1.jpeg',
            alt: "Imagen como para PC"
        },
        category: categories.COMBO_PC,
        stock: 9
    }
];
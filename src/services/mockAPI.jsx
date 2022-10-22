const data = [
    {
        id: 1,
        title: "Lienzo Canvas",
        price: 990,
        detail: "Una experiencia envolvente y una perspectiva texturizada única.",
        img: "/assets/p/Lienzo_Canvas.webp",
        stock: 5,
        offer: true,
        category: "canvas",
    },
    {
        id: 2,
        title: "Mural box",
        price: 400,
        detail: "Diseño minimalista, terminaciones limpias y precisas. Con vidrio.",
        img: "/assets/p/Mural_Box.webp",
        stock: 18,
        offer: false,
        category: "box",
    },
    {
        id: 3,
        title: "Bastidor simple",
        price: 500,
        detail: "Un bastidor realizado en madera masiza. Sin vidrio.",
        img: "/assets/p/Bastidor_Simple.webp",
        stock: 200,
        offer: true,
        category: "bastidor",
    },
    {
        id: 4,
        title: "Mural bombe",
        price: 600,
        detail: "Un clásico entre los clásicos, con porte y gracia únicos. Con vidrio.",
        img: "/assets/p/Mural_Bombe.webp",
        stock: 30,
        offer: false,
        category: "bombe",
    },
    {
        id: 5,
        title: "Mural italiano",
        price: 790,
        detail: "Exquisito, detallado y elegante diseño italiano. Con vidrio.",
        img: "/assets/p/Mural_Italiano.webp",
        stock: 15,
        offer: false,
        category: "italiano",
    },
    {
        id: 6,
        title: "Mural chato",
        price: 590,
        detail: "Tradicional mural de varilla chata. Con vidrio.",
        img: "/assets/p/Mural_Chato.webp",
        stock: 10,
        offer: false,
        category: "chato",
    },
    {
        id: 7,
        title: "Triptico Lienzo Canvas",
        price: 1900,
        detail: "Una experiencia envolvente, con imagen repartida y una perspectiva texturizada única.",
        img: "/assets/p/Lienzo_Canvas_triptico.webp",
        stock: 30,
        offer: true,
        category: "canvas",
    },
    {
        id: 8,
        title: "Lienzo Canvas Rectangular",
        price: 1550,
        detail: "Una experiencia envolvente y una perspectiva texturizada única.",
        img: "/assets/p/Lienzo_Canvas_rectangular.webp",
        stock: 15,
        offer: true,
        category: "canvas",
    },
    {
        id: 9,
        title: "Mural italiano colores",
        price: 1990,
        detail: "Exquisito, detallado y coloridos de diseño italiano. Con vidrio.",
        img: "/assets/p/Mural_Italiano_multicolor.webp",
        stock: 10,
        offer: false,
        category: "italiano",
    },
    {
        id: 10,
        title: "Mural italiano rojo",
        price: 2700,
        detail: "Exquisito, detallado y llamativo diseño italiano. Con vidrio.",
        img: "/assets/p/Mural_Italiano_rojo.webp",
        stock: 12,
        offer: true,
        category: "italiano",
    },
];

export default function getProducts() {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 3000);
    })
}

export function getProductsByCategory(cat) {
    return new Promise( (resolve, reject) => {
        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout( () => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("No encontramos este item"));
        }, 1500)
    })
}

export function getSingleProduct(idItem) {

    return new Promise( (resolve, reject) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(idItem);
        });
        setTimeout( () => {
            if (itemFind) resolve (itemFind);
            else reject(new Error("No encontramos este item"));
        }, 1500)
    })
}
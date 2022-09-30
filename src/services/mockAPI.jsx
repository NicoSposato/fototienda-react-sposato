const data = [
    {
        id: 1,
        title: "Lienzo Canvas",
        price: 990,
        detail: "Una experiencia envolvente y una perspectiva texturizada única.",
        img: "/assets/p/Lienzo_Canvas.webp",
        stock: 5,
        category: "Canvas",
    },
    {
        id: 2,
        title: "Mural box",
        price: 400,
        detail: "Diseño minimalista, terminaciones limpias y precisas. Con vidrio.",
        img: "/assets/p/Mural_Box.webp",
        stock: 18,
        category: "Box",
    },
    {
        id: 3,
        title: "Bastidor simple",
        price: 500,
        detail: "Un bastidor realizado en madera masiza. Sin vidrio.",
        img: "/assets/p/Bastidor_Simple.webp",
        stock: 200,
        category: "Bastidor",
    },
    {
        id: 4,
        title: "Mural bombe",
        price: 600,
        detail: "Un clásico entre los clásicos, con porte y gracia únicos. Con vidrio.",
        img: "/assets/p/Mural_Bombe.webp",
        stock: 30,
        category: "Bombe",
    },
    {
        id: 5,
        title: "Mural italiano",
        price: 790,
        detail: "Exquisito, detallado y elegante diseño italiano. Con vidrio.",
        img: "/assets/p/Mural_Iitaliano.webp",
        stock: 15,
        category: "Italiano",
    },
    {
        id: 6,
        title: "Mural chato",
        price: 590,
        detail: "Tradicional mural de varilla chata. Con vidrio.",
        img: "/assets/p/Mural_Chato.webp",
        stock: 10,
        category: "Chato",
    },
];

export default function getProducts() {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 3000);
    })
}

export function getSingleProduct() {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(data[3]);
        }, 1500);
    })
}
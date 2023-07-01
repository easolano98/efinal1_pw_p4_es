const vectorDatos = [Math.floor(Math.random() * (601 - 1) + 1), Math.floor(Math.random() * (601 - 1) + 1), Math.floor(Math.random() * (601 - 1) + 1), Math.floor(Math.random() * (601 - 1) + 1), Math.floor(Math.random() * (601 - 1) + 1)];


async function consumirApi(id) {
    const vector = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json())
    return vector
}



async function generarDatos() {

    const id1 = vectorDatos[Math.floor(Math.random() * (5 - 0) + 0)];
    const id2 = vectorDatos[Math.floor(Math.random() * (5 - 0) + 0)];
    const id3 = vectorDatos[Math.floor(Math.random() * (5 - 0) + 0)];

    const data1 = await consumirApi(id1);
    const data2 = await consumirApi(id2);
    const data3 = await consumirApi(id3);

    const ob1 = {
        nombre: data1.name,
        id: data1.id,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + data1.id + ".svg"
    };
    const ob2 = {
        nombre: data2.name,
        id: data2.id,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + data2.id + ".svg"
    };
    const ob3 = {
        nombre: data3.name,
        id: data3.id,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + data3.id + ".svg"
    };

    const vectorPokemons = [ob1, ob2, ob3]; 
    console.log(vectorPokemons)
    return vectorPokemons
}

async function fachadaConsumir() {
    return await generarDatos();
}

export default fachadaConsumir
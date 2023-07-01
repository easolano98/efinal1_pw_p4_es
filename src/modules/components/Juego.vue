<template>
  <div class="container">
    <div class="juego">
      <img
        v-for="pokemons in contenido"
        :key="pokemons.id"
        :src="pokemons.img || urlImg"
        alt="no se puede mostrar imagen"
      />
      <p v-for="pokemons in contenido" :key="pokemons.id">
        {{ pokemons.nombre || "xxxxxxxxx" }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImg:
        "https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg",
    };
  },
  props: {
    contenido: { type: Array, required: true },
  },
};
</script>

<style>
img {
  height: 250px;
  width: 250px;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.juego{
    display: grid;
    grid-template-columns: repeat(3, 260px);
}
</style>
<template>
  <div>
    <section class="container">
      <article class="tile">
        <figure class="tile__figure">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            data-hover="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            class="tile__image"
            alt="My image"
            width="400"
          >
        </figure>
      </article>
    </section>

    <canvas id="stage"></canvas>
  </div>
</template>

<script>
import Scene from "@/assets/scene.js";

export default {
  name: "projets",
  data: () => {
    return {
      scene: null
    };
  },
  mounted() {
    this.scene = new Scene();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  background-color: #e4e0dd;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
}

.tile {
  width: 60vmin;
  flex: 0 0 auto;
}

.tile__figure {
  margin: 0;
  padding: 0;
}

.tile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
}
</style>

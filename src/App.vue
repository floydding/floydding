<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
}

@media only screen and (min-width: 768px) {
  .wrapper {
    width: 50%;
    margin: auto;
  }
}
</style>

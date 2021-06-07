<template>
  <div class="portCard" id="portfolio">
    <b-card
      overlay
      :title="portCard.title"
      :img-src="require('../assets/' + portCard.image)"
      :img-alt="portCard.imageAlt"
      text-variant="white"
      >
      <b-card-text class="text">{{ portCard.text }}</b-card-text>
      <b-card-text class="text">Highlights</b-card-text>
      <b-list-group>
        <b-list-group-item
          v-for="list of portCard.highlights"
          :key="list.highlight">
          {{ list.highlight }}
        </b-list-group-item>
    </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPiece',
  props: {
    portCard: {
      required: false,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

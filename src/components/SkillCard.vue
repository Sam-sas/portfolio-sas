<template>
  <div class="skillCard">
    <b-card
      :img-src="require('../assets/' + skillCard.skillImage)"
      img-top
    >
      <b-card-text class="text">{{ skillCard.skillName }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skillCard: {
      required: false,
      type: Object,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.skillCard {
  width: 50vh;
  height: 50vh;
}
.card-body {
  color: #000;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

<template>
  <div id="about">
    <div>
        <h4 class="Whomst">Who I am</h4>
    </div>
    <div class="bio">
         <p class="aboutMe">{{ bio.aboutMe }}</p>
        <p class="talk">{{ bio.talk }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    bio: {
      required: false,
      type: Object,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<template>
  <div class="hello" id="home">
    <div id="me">
      <h1>Sam Shepard</h1>
      <h2>Web Designer / Developer</h2>
      <div class="quickLink" id="scrollIndicator">
        <p>Scroll down</p>
        <hr/>
      </div>
    </div>
    <div class="quickLink">
      <h3><a href="#portfolio">Projects</a></h3>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background-image: url('../assets/landingBackgroundJellyfish.jpg');
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  font-family: 'Amatic SC', cursive;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
}

#me {
  width: 80vh;
  display: flex;
  flex-direction: column;
  padding-left: 3em;
   h1 {
    font-size: 10em;
   }
   h2 {
     font-size: 3em;
   }
}

.quickLink {
  width: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3em;
  h3, p {
    padding-right: 0.3em;
    font-size: 2em;
  }
  hr {
    border: 1px solid #fff;
    width: 3em;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}

#scrollIndicator {
  transform: rotate(90deg) translateY(14vh) translateX(28vh);
  p {
    margin-bottom: 0;
    letter-spacing: .2em;
  }
}
</style>

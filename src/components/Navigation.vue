<template>
  <div id="floatNav" role="navigation" >
    <b-navbar variant="faded">
      <b-navbar-brand href="#home">Sam Shepard</b-navbar-brand>
      <div id="alignRight">
        <b-nav-item href="#home">Home</b-nav-item>
        <b-nav-item href="#portfolio">Portfolio</b-nav-item>
        <b-nav-item href="#about">About</b-nav-item>
        <b-nav-item href="#contact">Contact</b-nav-item>
        <b-nav-item href="https://tinyurl.com/k5yapmxd" target="_blank" download>Resume</b-nav-item>
      </div>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #floatNav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    transition: all 0.5s ease-in-out;
    padding-top: 15px;
    padding-bottom: 5px;
    background-color: rgba(3, 14, 39, 0.3);
    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }
  }

.navbar-light .navbar-brand, .nav-link, #alignRight a {
  color: #fff;
}

a.navbar-brand {
  padding-left: 3em;
}

#alignRight {
  display: flex;
  text-align: right;
}

.navbar-expand {
  justify-content: space-between;
}

</style>

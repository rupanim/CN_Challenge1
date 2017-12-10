


<template>
  <div id="app" class="container">
  <div class="page-header">
  <h1><router-link class="navLink" v-bind:to="'/'">Home</router-link>
  
<router-link class="navLink" v-bind:to="'/about'">About</router-link></h1>
</span>
  <router-view></router-view>
  </div>
  <footer id="footer">
        <p style="text-align:center">&copy; Career Now Demo Application</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navLink {
 color: green;
    background-color:white;
    transform: scale(1.3,1.3);
    -webkit-transform: scale(1.3,1.3);
    -moz-transform: scale(1.3,1.3);
}
</style>
<template>
  <div id="app">
      <router-view/>
  </div> 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100vw;
  
}
  .navbar-layout {
    align-items: center;
    position: relative;
  }

#nav {
  margin : 20px auto;
  justify-content: center;
  border-radius: 11px;
}


#nav a {
  box-shadow:  0px 0px 4px rgba(158,161,165,0.5);
  font-weight: bold;
  color: #2E3137;
  background-color: #f3f3f3;
  margin-top: 50px;
  padding: 9px 52px;
  border-radius: 12px;
  text-decoration: none;
  outline: none;
}

#nav a.router-link-exact-active {
  color: #5A5F69 ;
  background-color: #fff;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>

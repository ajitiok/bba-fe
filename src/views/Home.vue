<template>
  <div class="container d-flex flex-column bd-highlight mb-3">
    <Menu/>
    <div class="">
      <img class="img__apps" src="../assets/undraw_result_5583.png" alt="">
      <p class="p1">Oops! Its lonely here</p>
      <p class="p2">Your applied gigs will show up here.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  },
}
</script>

<style>

.img__apps {
    width : 142.05px;
    height: 142.92px;
    margin-top: 115.93px;
  }

.p1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-style: normal;
  left: 25.15%;
  right: 25.15%;
  top: calc(50% - 22px/2 + 182px);
}

.p2 {
  height: 17px;
  left: 16.77px;
  right: 16.77px;
  top: calc(50% - 17px/2 + 206.5px);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
}
</style>
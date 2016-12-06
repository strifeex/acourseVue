<template>
  <div id="app">
    <top-menu></top-Menu>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'

export default {
  components: {
    TopMenu
  }

}
</script>

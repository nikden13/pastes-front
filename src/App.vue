<template>
  <div class="container">
    <header-component>

    </header-component>

    <router-view :key="$route.fullPath"></router-view>

    <paste-list>
      Last pastes
    </paste-list>
  </div>
</template>

<script>
import PasteList from "@/components/pastes/paste-list";
import HeaderComponent from "@/components/ui/header-component";

export default {
  name: 'App',
  components: {
    PasteList,
    HeaderComponent,
  }
}
</script>

<style>
  .container {
    max-width: 1280px;
    padding: 0 10px;
    margin: 0 auto;
  }
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>

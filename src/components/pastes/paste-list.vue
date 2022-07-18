<template>
  <h1><slot></slot></h1>
  <div class="pastes" v-if='pastes.length > 0'>
    <paste-item
        class="paste"
        :paste="paste"
        v-for="paste in pastes" :key="paste.id"
    />
  </div>
  <div class="pastes__not-found" v-else>Not found.</div>
</template>

<script>
import PasteItem from '@/components/pastes/paste-item.vue'

export default {
  name: "paste-list",
  props: {
    pastes: {
      type: Array,
      required: true
    },
  },
  components: {
    PasteItem,
  },
}
</script>

<style scoped>
  h1 {
    display: block;
    text-align: center;
  }

  .pastes {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .paste {
    margin: 0 5px 5px 0;
  }

  .pastes__not-found {
    margin-top: 50px;
    text-align: center;
  }
</style>
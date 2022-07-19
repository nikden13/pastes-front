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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "paste-list",
  components: {
    PasteItem,
  },
  computed: {
    ...mapGetters([
      'pastes',
      'lastCreatedPaste',
    ])
  },
  methods: {
    ...mapActions([
      'getPastes',
    ]),
  },
  mounted() {
    this.getPastes();
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
    padding: 0 100px;
  }

  .paste {
    margin: 0 5px 5px 0;
  }

  .pastes__not-found {
    margin-top: 50px;
    text-align: center;
  }
</style>
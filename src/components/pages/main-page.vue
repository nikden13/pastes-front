<template>
  <div class="wrapper">
    <paste-create-form
    >Creating of paste</paste-create-form>

    <paste-list
        :pastes="pastes"
    >Last pastes</paste-list>
  </div>
</template>

<script>
import PasteList from '@/components/pastes/paste-list'
import {mapActions, mapGetters} from "vuex";
import PasteCreateForm from "@/components/pastes/paste-create-form";

export default {
  name: "main-page",
  components: {
    PasteCreateForm,
    PasteList,
  },
  computed: {
    ...mapGetters([
        'pastes',
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
  .wrapper {
    width: 50%;
    margin: 0 auto;
  }
</style>
<template>
  <div class="wrapper">
    <paste-create-form
        v-model:showModal="showModal"
        v-model:linkCreatedPaste="linkCreatedPaste"
    >
      Creating of the paste
    </paste-create-form>

    <modal-window
        v-model:showModal="showModal"
    >
      Access link: <br> <a class="modal__link" :href="this.linkCreatedPaste">{{ this.linkCreatedPaste }}</a>
    </modal-window>
  </div>
</template>

<script>
import PasteCreateForm from "@/components/pastes/paste-create-form";
import ModalWindow from "@/components/ui/modal-window";

export default {
  name: "main-page",
  data() {
    return {
      showModal: false,
      linkCreatedPaste: '',
    };
  },
  components: {
    PasteCreateForm,
    ModalWindow,
  },
  watch: {
    showModal: function (now, was) {
      if (was === true && now === false) {
        location.reload();
      }
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 74%;
    margin: 0 auto;
  }

  .modal__link {
    color: #3e58ef;
  }
</style>
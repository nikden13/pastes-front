<template>
  <div class="modal-window"
       v-if="showModal"
       @click="hideModal"
  >
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-window',
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:showModal', false);
    }
  }
}
</script>

<style>
.modal-window {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  display: flex;
}
.modal__content {
  align-self: center;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  padding: 25px;
  min-width: 300px;
  min-height: 150px;
}
</style>
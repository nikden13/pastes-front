<template>
  <textarea
      :value="modelValue"
      @input="update"
      class="default-textarea"
      @keydown.tab.prevent="tabber($event)"
  >
  </textarea>
</template>

<script>
export default {
  name: "default-textarea",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    update(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    tabber(event) {
      if (event) {
        event.preventDefault()
        let startText = event.target.value.slice(0, event.target.selectionStart)
        let endText = event.target.value.slice(event.target.selectionStart)
        event.target.value = `${startText}\t${endText}`
        event.target.selectionEnd = event.target.selectionStart + 1
      }
    }
  }
}
</script>

<style scoped>
  .default-textarea {
    border: 1px solid green;
    padding: 10px 15px;
    resize: none;
    height: 400px;
    margin-bottom: 15px;
  }
</style>
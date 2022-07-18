<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="default-input"
      type="text"
  >
</template>

<script>
export default {
  name: 'default-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.default-input {
  border: 1px solid green;
  padding: 10px 15px;
  margin-bottom: 15px;
}
</style>
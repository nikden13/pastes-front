<template>
  <textarea
      :value="modelValue"
      @input="update"
      class="default-textarea"
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
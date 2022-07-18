<template>
  <button class="default-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'default-button'
}
</script>

<style>
.default-btn {
  align-self: flex-start;
  padding: 10px 15px;
  background: none;
  color: green;
  border: 1px solid green;
  cursor: pointer;
  border-radius: 50px;
  font-size: 16px;
}
.default-btn:hover {
  background-color: rgba(0, 128, 0, .6);
  color: inherit;
}
</style>
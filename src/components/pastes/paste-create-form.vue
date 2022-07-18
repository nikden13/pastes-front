<template>
  <form @submit.prevent>
    <h1><slot></slot></h1>
    <default-input
        v-model="paste.title"
        type="text"
        placeholder="Title"
    />
    <default-textarea
        class="textarea"
        placeholder="Text"
        v-model="paste.body"
    >
    </default-textarea>

    <span>Visibility: </span>
    <select size="1" class="select" v-model="paste.visibility">
      <option value="0" selected>Public</option>
      <option value="1">Private</option>
    </select>

    <span>Expiration time: </span>
    <select size="1" class="select" v-model="paste.expiration_time">
      <option value="null" selected>Indefinitely</option>
      <option value="600" selected>10 minutes</option>
      <option value="3600">1 hour</option>
      <option value="10800">3 hours</option>
      <option value="86400">1 day</option>
      <option value="604800">1 week</option>
      <option value="2592000">1 month</option>
    </select>

    <default-button
        class="create-paste"
        @click="createPaste"
    >
      Create
    </default-button>
  </form>
</template>

<script>
import DefaultButton from "@/components/ui/default-button";
import DefaultInput from "@/components/ui/default-input";
import DefaultTextarea from "@/components/ui/default-textarea";

export default {
  data () {
    return {
      paste: {
        title: 'test',
        body: 'test',
        visibility: 0,
        expiration_time: null,
      }
    }
  },
  components: {
    DefaultTextarea, DefaultButton, DefaultInput,
  },
  methods: {
    createPaste() {
      this.$emit('create', this.paste)
      this.paste = {
        title: '',
        body: '',
        visibility: 0,
        expiration_time: null,
      }
      this.$emit('update:show', false);
    },
  },
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  .create-paste {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
  }

  .select {
    margin-bottom: 15px;
  }
</style>
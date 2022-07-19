<template>
  <form @submit.prevent>
    <h1><slot></slot></h1>
    <default-input
        v-model="paste.title"
        type="text"
        placeholder="Title"
        required
    />
    <default-textarea
        class="textarea"
        placeholder="Text"
        v-model="paste.body"
        required
    >
    </default-textarea>

    <span>Visibility: </span>
    <select size="1" class="select" v-model="paste.visibility">
      <option value="0" selected>Public</option>
      <option value="1">Private</option>
    </select>

    <span>Expiration time: </span>
    <select size="1" class="select" v-model="paste.expiration_time">
      <option value="0" selected>Indefinitely</option>
      <option value="600" selected>10 minutes</option>
      <option value="3600">1 hour</option>
      <option value="10800">3 hours</option>
      <option value="86400">1 day</option>
      <option value="604800">1 week</option>
      <option value="2592000">1 month</option>
    </select>

    <default-button
        class="create-paste"
        @click="createPasteForm(this.paste)"
    >
      Create
    </default-button>
  </form>
</template>

<script>
import DefaultButton from "@/components/ui/default-button";
import DefaultInput from "@/components/ui/default-input";
import DefaultTextarea from "@/components/ui/default-textarea";
import {mapActions} from "vuex";

export default {
  data () {
    return {
      paste: {
        title: '',
        body: '',
        visibility: 0,
        expiration_time: 0,
      },
    }
  },
  components: {
    DefaultTextarea,
    DefaultButton,
    DefaultInput,
  },
  methods: {
    async createPasteForm(paste) {
      const createdPaste =  await this.createPaste(paste);
      if (createdPaste) {
        this.paste = {
          title: '',
          body: '',
          visibility: 0,
          expiration_time: 0,
        };
        this.$emit('update:linkCreatedPaste', 'http://localhost:8080/pastes/' + createdPaste.hash);
        this.$emit('update:showModal', true);
      }
    },
    ...mapActions([
      'createPaste',
    ]),
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
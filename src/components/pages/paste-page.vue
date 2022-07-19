<template>
  <div class="paste">
    <div class="paste__title">
      <h2>Title: {{ paste.title }}</h2>
    </div>
    <div class="paste__body">
        <textarea class="paste__body-textarea" :value="paste.body" readonly></textarea>
    </div>
    <div class="paste__other">
      <div class="paste__visibility">
        <p>
          <span class="visibility-public" v-if="paste.visibility === 0">
            Visibility:
          </span>
          <span class="visibility-private" v-else-if="paste.visibility === 1">
            Visibility:
          </span>
        </p>
      </div>

      <div class="paste__createdDate">
        <p>Created: {{ paste.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "paste-page",
  computed: {
    ...mapGetters([
      'paste',
    ]),
  },
  methods: {
    ...mapActions([
      'getPaste',
    ]),
    getNewPaste() {
      const hash = this.$route.params.hash;
      this.getPaste(hash);
    }
  },
  mounted() {
    this.getNewPaste();
  },

}
</script>

<style scoped>
  .paste__title {
    margin-bottom: 15px;
  }

  .paste {
    margin-top: 50px;
  }

  .paste__body-textarea {
    width: 100%;
    height: 600px;
    resize: none;
  }

  .paste__other {
    display: flex;
    justify-content: space-between;
  }

  .visibility-public::after {
    content: '';
    margin-bottom: -3px;
    display: inline-block;
    background-color: green;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }

  .visibility-private::after {
    content: '';
    margin-bottom: -3px;
    display: inline-block;
    background-color: red;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
</style>
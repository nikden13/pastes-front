<template>
  <div class="pastes__item">
    <div class="pastes__item-text">
      <div class="pastes__item-title"> {{ paste.title }}</div>
      <div class="pastes__item-attr"> <span>Created: </span> {{ paste.created_at }}</div>
    </div>

    <router-link :to="{name: 'paste', params: {hash: paste.hash}}" @click="scrollToTop">
      <default-button>
        View
      </default-button>
    </router-link>
  </div>
</template>

<script>
import DefaultButton from '@/components/ui/default-button.vue'

export default {
  name: 'paste-item',
  data () {
    return {}
  },
  props: {
    paste: {
      type: Object,
      required: true
    },
  },
  components: {
     DefaultButton,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.pastes__item {
  padding: 10px;
  margin-bottom: 5px;
  border: 2px solid green;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}

.pastes__item-text {
  margin-right: 10px;
  word-break: break-all;
}

.pastes__item-title {
  font-size: 16px;
  font-weight: 600;
}

.pastes__item-attr {
  font-size: 14px;
}

.pastes__item-attr span {
  font-size: 16px;
}
</style>
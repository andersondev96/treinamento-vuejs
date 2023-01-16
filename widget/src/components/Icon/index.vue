<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './Loading.vue'
import ChevronDown from './ChevronDown.vue'
import Chat from './Chat.vue'
import ArrowRight from './ArrowRight.vue'
import Close from './Close.vue'

export default {
  components: {
    Loading,
    ChevronDown,
    Chat,
    Close,
    ArrowRight
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>

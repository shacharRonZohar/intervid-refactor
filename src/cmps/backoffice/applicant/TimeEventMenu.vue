<template>
  <section class="time-event-menu">
    <button class="menu-btn" @click="toggleModal">
      <i class="material-icons">more_horiz</i>
    </button>

    <div class="menu-modal" :class="{open: isOpen && !isMobile}">
      <button @click="$emit('on-remove-note-event')">
        {{ $getTrans('remove') }}
      </button>
    </div>

    <MobileModal
      v-if="isOpen && isMobile"
      cmp-name="time-event-menu"
      @on-close="toggleModal"
      @on-remove-note-event="$emit('on-remove-note-event')"
    />
  </section>
</template>

<script>
import MobileModal from '@/cmps/common/modals/MobileModal.vue'

export default {
  components: {MobileModal},
  props: {
    idx: {
      type: Number,
      required: true,
    },
  },
  emits: ['on-remove-note-event'],

  computed: {
    isMobile() {
      return this.$store.getters['app/isMobile']
    },

    modal() {
      return this.$store.getters['app/modal']
    },

    isOpen() {
      return this.modal.type === 'time-event-menu' && this.modal.data === this.idx
    },
  },

  methods: {
    toggleModal() {
      this.$store.dispatch('app/toggleModal', {
        type: 'time-event-menu',
        data: this.idx,
      })
    },
  },
}
</script>

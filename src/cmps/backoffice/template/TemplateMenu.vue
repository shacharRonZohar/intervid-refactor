<template>
  <section ref="modal-wrapper" class="action-menu">
    <button class="menu-btn" @click="toggleMenu">
      <span class="material-icons"> more_horiz </span>
    </button>

    <div :ref="template._id" class="menu-modal">
      <div @click.stop="onEditTemplate">{{ $getTrans('edit') }}</div>
      <div v-if="!isDefault" @click="emitAction('default')">
        {{ $getTrans('make-default') }}
      </div>
      <div @click.stop="emitAction('archive')">
        {{ template.archivedAt ? $getTrans('restore') : $getTrans('archive') }}
      </div>
    </div>

    <MobileModal
      v-if="isOpen && isMobile"
      :template="template"
      cmp-name="template-menu"
      @on-edit-template="onEditTemplate"
      @emit-action="emitAction"
      @on-close="toggleMenu"
    />
  </section>
</template>

<script>
// core
import {ref, computed} from 'vue'
// lib
import {useStore} from 'vuex'
// custom composables
import {useModal} from '@/composables/useModal.js'
// cmps
import MobileModal from '@/cmps/common/modals/MobileModal.vue'

export default {
  components: {MobileModal},
  props: {
    template: {type: Object, required: true},
  },
  emits: ['archive', 'default', 'modal-closed'],
  setup(props) {
    const modalWidth = 200
    const modalHeight = computed(() => 150)
    const modalWrapper = ref(null)

    const store = useStore()
    const {isOpen, top, insetInlineStart, isBottom} = useModal({
      modalWidth,
      modalHeight,
      modalWrapper,
      modalType: 'template-menu',
      modalId: props.template._id,
    })

    const isMobile = computed(() => {
      return store.getters['app/isMobile']
    })

    const modalStyle = computed(() => {
      return {
        top: `${top.value}px`,
        insetInlineStart: `${insetInlineStart.value}px`,
      }
    })

    const modalClass = computed(() => {
      return {
        open: isOpen.value && !isMobile.value,
        top: isBottom.value,
      }
    })

    return {
      modalStyle,
      modalClass,
      isOpen,
      isMobile,
    }
  },

  computed: {
    isDefault() {
      return this.template?.isDefault
    },
  },

  methods: {
    toggleMenu() {
      const modalId = this.isTemplateMenuOpen ? null : this.template._id
      this.$store.dispatch('app/toggleModal', {
        type: 'template-menu',
        data: {modalId},
      })
    },

    emitAction(action) {
      this.toggleMenu()
      this.$emit(action, this.template)
    },

    onEditTemplate() {
      this.toggleMenu()
      this.$router.push(`/backoffice/template/edit/${this.template._id}`)
    },
  },
}
</script>

<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
const isOpen = useState('galleryModal');

function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <div>
    <ClientOnly>
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="modal">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="modal__child transition"></div>
          </TransitionChild>

          <div class="modal__container transition">
            <div class="modal__container-content transition">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="modal__dialog">
                  <DialogTitle as="h3" class="modal__dialog-title"> </DialogTitle>
                  <slot />
                  <div class="mt-4">
                    <button type="button" class="modal__dialog-button" @click="closeModal">Закрыть</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot></ClientOnly
    >
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: relative;
  z-index: 10;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &__child {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.268);
    inset: 0px;
  }
  &__container {
    position: fixed;
    overflow-y: auto;
    inset: 0px;
    &-content {
      padding: 15px;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  &__dialog {
    width: 100%;
    max-width: 48rem;
    overflow: hidden;
    border-radius: 10px;
    background-color: white;
    padding: 25px;
    text-align: left;
    transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
    vertical-align: middle;
    box-shadow: 4px 10px 40px 10px #0000000f;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    &-title {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
    &-button {
      background: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      border: 2px solid #37c4cd;
      border-radius: 10px;
      color: #37c4cd;
      background-color: white;
      transition: all linear 0.3s;
      &:hover {
        color: white;
        background-color: #37c4cd;
        cursor: pointer;
      }
    }
  }
}
</style>

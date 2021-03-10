<template>
  <div class="modal in modal-active">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button type="button" class="close" @click="$emit('close')">&times;</button>
        </div>
        <div class="modal-body text-center px-4">
          <slot></slot>
        </div>
        <div class="modal-footer border-0">
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop show"></div>
</template>

<script>
    export default {
      name: 'BootstrapModal'
    }
</script>

<style lang="scss" scoped>
.modal-active{
	display:block;
  margin-top: 35vh;
}
</style>
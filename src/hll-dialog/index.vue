<template>
  <van-dialog v-model:show="visible" class="hll-dialog">

    <template #title v-if="$slots.title">
      <slot name="title"></slot>
    </template>
    <template #default v-if="$slots.default">
      <img
        v-show="showCloseIcon"
        class="close-icon"
        @click="visible = false"
        src="https://hll-common.61info.cn/test/hll-activity/60853657067b465af4d3e269.png"
      />
      <slot>
        <span>代码是写出来给人看的，附带能在机器上运行</span>
      </slot>
    </template>

  </van-dialog>
</template>



<script>
import { Dialog } from 'vant'

export default {
  name: 'hll-dialog',
  components: {
    "van-dialog": Dialog.Component
  },
  props: {
    // 是否显示关闭图标，默认开启
    showCloseIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 是否显示弹窗
      visible: false
    }
  },
  methods: {
    show() {
      console.log('visible', this.visible, this.showCloseIcon)
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
.hll-dialog {
  overflow: visible;
  .close-icon {
    cursor: pointer;
    position: absolute;
    top: -50px;
    right: 0;
    width: 30px;
    height: 30px;
  }
  .van-dialog__footer{
    border-radius: 16px;
  }
}
</style>
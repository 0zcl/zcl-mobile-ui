<template>
  <div class="box" :style="{ width: luckyWidth, height: luckyHeight }">
    <img
      class="plate-bg"
      :src="plateBg"
      :style="{ transform: rotateAngle, transition: rotateTransition }"
    />
    <slot name="pointer"></slot>
  </div>
</template>
<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  name: 'HllLuckDraw',
  props: {
    // 转盘礼品背景图
    plateBg: {
      type: String,
      required: true,
    },
    luckyWidth: {
      type: String,
      default: '300',
    },
    luckyHeight: {
      type: String,
      default: '300',
    },
    // 可抽奖次数
    luckyNum: {
      type: Number,
      default: 0,
    },
    // 奖品个数
    prizeLength: {
      type: Number,
      default: 8,
    },
    // 转动圈数:转到大于5圈
    turnsNumber: {
      type: Number,
      default: 5,
    },
    // 转动需要持续的时间(秒)
    turnsTime: {
      type: Number,
      default: 5,
    },
  },
  setup(props, context) {
    const state = reactive({
      startRotateDegree: 0, // 开始转动的角度
      // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
      rotateAngle: 'rotate(0deg)', // `rotate(30deg)`
      rotateTransition: '',
    });
    // 转动起来
    const rotate = (index) => {
      console.log('index', index);
      const startRotateDegree = toRef(state, 'startRotateDegree');
      const { turnsTime, turnsNumber, prizeLength } = toRefs(props);
      const rotateAngles =
        startRotateDegree.value +
        turnsNumber.value * 360 +
        360 -
        (180 / prizeLength.value + (360 / prizeLength.value) * index) -
        (startRotateDegree.value % 360);
      startRotateDegree.value = rotateAngles;
      state.rotateAngle = `rotate(${rotateAngles}deg)`;
      state.rotateTransition = `transform ${turnsTime.value}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`;
      setTimeout(() => {
        context.emit('end-turns');
      }, turnsTime.value * 1000 + 500);
    };
    return {
      ...toRefs(state),
      rotate,
    };
  },
};
</script>
<style lang="scss">
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .plate-bg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>

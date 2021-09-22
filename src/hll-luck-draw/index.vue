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
  export default {
    name: 'hll-luck-draw',
    props: {
      // 转盘礼品背景图
      plateBg: {
        type: String,
        required: true
      },
      luckyWidth: {
        type: String,
        default: '300'
      },
      luckyHeight: {
        type: String,
        default: '300'
      },
      // 可抽奖次数
      luckyNum: {
        type: Number,
        default: 0
      },
      // 奖品个数
      prizeLength: {
        type: Number,
        default: 8
      },
      // 转动圈数:转到大于5圈
      turnsNumber: {
        type: Number,
        default: 5
      },
      // 转动需要持续的时间(秒)
      turnsTime: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        // 开始转动的角度
        startRotateDegree: 0,
        // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
        rotateAngle: 'rotate(0deg)', // `rotate(30deg)`
        rotateTransition: ''
      }
    },
    methods: {
      // 转动起来
      rotate(index) {
        console.log('index', index)
        const turnsTime = this.turnsTime
        const rotateAngle =
          this.startRotateDegree +
          this.turnsNumber * 360 +
          360 -
          (180 / this.prizeLength + (360 / this.prizeLength) * index) -
          (this.startRotateDegree % 360)
        this.startRotateDegree = rotateAngle
        this.rotateAngle = `rotate(${rotateAngle}deg)`
        this.rotateTransition = `transform ${turnsTime}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`
        setTimeout(() => {
          this.$emit('end-turns')
        }, turnsTime * 1000 + 500)
      }
    }
  }
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
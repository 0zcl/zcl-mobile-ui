<template>
  <demo-block title="基础用法">
    <van-form>
      <div>
        <van-tag>剩余抽奖卡：{{ cardCountObj.cardCount }}</van-tag>
        <van-tag>已抽次数：{{ cardCountObj.prizeDrawCount }}</van-tag>
      </div>
    </van-form>

    <div class="turn-plate">
      <hll-luck-draw
        ref="luckDraw"
        :lucky-width="luckDrawProps.luckyWidth"
        :lucky-height="luckDrawProps.luckyHeight"
        :lucky-num="luckDrawProps.luckyNum"
        :plate-bg="luckDrawProps.plateBg"
        :prize-length="luckDrawProps.prizeLength"
        :turns-number="luckDrawProps.turnsNumber"
        :turns-time="luckDrawProps.turnsTime"
        :prize-index="luckDrawProps.prizeIndex"
        @end-turns="endTurns"
      >
        <template #pointer>
          <div
            class="pointer-img"
            @click="startTurns"
          >
            <img :src="pointerDisableImg" v-if="cardCountObj.cardCount <= 0" />
            <img :src="pointerImg" v-else />
          </div>
        </template>
      </hll-luck-draw>
    </div>


    <!-- 当前中奖，物品 -->
    <activity-prize ref="activityPrize" />
  </demo-block>
</template>
<script>
  import { giftList } from 'utils/rules'
  import pointerImg from 'assets/luck-draw/pointerImg.png'
  import pointerDisableImg from 'assets/luck-draw/pointerDisableImg.png'
  import plateBg from 'assets/luck-draw/plateBg.png'
  import activityPrize from './components/activityPrize'
  import { Form, Tag } from 'vant'


  export default {
    components: {
      activityPrize,
      vanForm: Form,
      vanTag: Tag
    },
    data() {
      return {
        pointerImg,
        pointerDisableImg,
        lock: false,
        params: {
          userId: ''
        },
        currentGift: {},
        cardCountObj: {
          cardCount: 5, // 可抽奖数量
          prizeDrawCount: 0 // 已抽奖次数
        },
        giftList,
        luckDrawProps: {
          // luckyWidth: '8rem', // 转盘高度与宽度应相等
          luckyWidth: '300px', // 转盘高度与宽度应相等
          // luckyHeight: '8rem',
          luckyHeight: '300px',
          plateBg,
          prizeLength: giftList.length, // 礼品的数量
          turnsNumber: 5, // 转动圈数
          turnsTime: 5, // 转动时间：S
          luckyNum: 0 // 抽奖次数,根据需求定义
        }
      }
    },
    methods: {
      canBeRotated() {
        if (this.cardCountObj.cardCount <= 0) {
          // 没有抽奖卡
          return false
        }
        if (this.lock) {
          console.log('锁定状态，请勿重复点击')
          return false
        }
        return true
      },
      startTurns() {
        if (!this.canBeRotated()) {
          return false
        }
        this.lock = true
        // id [1, 8]
        const random = Math.floor(Math.random()*8)+1
        console.log('random', random)
        const giftItem = this.giftList.find(item => item.id === random)
        console.log('giftItem', giftItem)
        if (!giftItem) {
          this.$toast('数据异常，返回未知奖品id，请联系管理员')
          return
        }
        this.currentGift = giftItem
        this.$refs.luckDraw.rotate(giftItem.giftIndex)
      },
      endTurns() {
        console.log('endTurns==>')
        this.lock = false
        // 获奖弹框
        this.$refs.activityPrize.show({
          name: this.currentGift.giftName,
          url: this.currentGift.url
        })
        this.cardCountObj.cardCount--
        this.cardCountObj.prizeDrawCount++
      }
    }
  }
</script>

<style lang="scss">
  .turn-plate {
    width: 340px;
    height: 340px;
    position: relative;
    // top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-image: url('assets/luck-draw/turnplateBg.gif')
  }
  .pointer-img {
    width: 80px;
    height:91px;
    position: absolute;
    left: 49.5%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      animation: breathe ease-in-out 0.55s infinite;
    }
  }
</style>
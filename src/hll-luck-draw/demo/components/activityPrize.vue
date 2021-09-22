<template>
  <hll-dialog ref="gainAward">
    <div class="award-box">
      <div class="award-img">
        <img :src="gainAward.url" />
      </div>
      <p class="p1">
        哇哦！<span>{{gainAward.name}}</span>被你收入囊中啦
      </p>
      <p>再接再厉喔</p>
      <!-- <div class="close-btn" @click="showAward = false">收下</div> -->
    </div>
  </hll-dialog>
</template>

<script>

export default {
  data() {
    return {
      gainAward: {
        name: '',
        url: ''
      }
    }
  },
  methods: {
    show(data) {
      console.log('gainAward==>', data)
      this.gainAward = data
      this.$refs.gainAward.show()
    }
  }
}
</script>

<style lang="scss">
.award-box {
  padding: 0 34px 18px 34px;
  box-sizing: border-box;
  .award-img {
    width: 100%;
    height: 176px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 128px;
      height: 128px;
      object-fit: contain;
      display: block;
    }
  }
  .p1 {
    text-align: left;
  }
  p {
    font-size:14px;
    color:rgba(51,51,51,1);
    line-height:20px;
    span {
      color: #FF6817;
    }
  }
}
</style>

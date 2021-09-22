<template>
  <demo-block title="基础用法">
    <van-cell is-link title="显示关闭图标" @click="onClickDialog('One')" />
    <hll-dialog ref="hllDialogOne" width=200>
      <img
        style="width: 100%"
        src="https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_320,m_lfit"
      />
    </hll-dialog>

    <!-- 取消显示关闭图标 -->
    <van-cell
      is-link
      title="取消显示关闭图标"
      @click="onClickDialog('Two')"
    />
    <hll-dialog ref="hllDialogTwo" :show-close-icon="false">
      <img
        src="https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_320,m_lfit"
      />
    </hll-dialog>

      <van-cell is-link title="使用插槽" @click="onClickDialog('Three')" />
      <hll-dialog ref="hllDialogThree">
        <template #title>
          <h3>标题</h3>
        </template>
        <template #default>
          <span>代码是写出来给人看的，附带能在机器上运行</span>
        </template>

      </hll-dialog>
  </demo-block>


</template>

<script>
import { Cell } from 'vant';

export default {
  components: {
    vanCell: Cell,
  },
  methods: {
    onClickDialog(which) {
      this.$refs['hllDialog' + which].show();
    },
  },
};
</script>
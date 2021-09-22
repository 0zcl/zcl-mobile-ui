# Dialog 弹出框

### 介绍

Dialog 是一个基于 [_**Vant 3.x Dialog**_](https://vant-contrib.gitee.io/vant/#/zh-CN/dialog)  封装的弹出模态框组件，额外支持关闭图标。

### 特性
- 支持关闭图标（目前仅组件调用模式生效）
- 支持 _**Vant 3.x Dailog**_ 的所有特性

### 引入

```js
import Vue from 'vue';
import { Dialog } from 'hll-design-mobile';

Vue.use(Dialog);
```

## 代码演示

### 显示关闭图标

```html
<hll-dialog ref="hllDialogOne" width=200>
  <img
    style="width: 100%"
    src="https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_320,m_lfit"
  />
</hll-dialog>
```
### 取消显示关闭图标

```html
<hll-dialog ref="hllDialogTwo" :show-close-icon="false">
  <img
    src="https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_320,m_lfit"
  />
</hll-dialog>
```
将 `showCloseIcon`属性设为`false`可以取消显示关闭图标。

### 使用插槽

目前仅支持`default`、`title`两个插槽
```html
<hll-dialog ref="hllDialogThree">
  <template #title>
    <h3>标题</h3>
  </template>
  <template #default>
    <span>代码是写出来给人看的，附带能在机器上运行</span>
  </template>
</hll-dialog>
```

## API


### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------ | -------- | -------- | ------- |
| showCloseIcon     | 是否显示关闭图标  | _boolean_ | `true` |


### 方法

通过 ref 可以获取到 Dialog 实例并调用实例方法

| 方法名 |  说明  | 参数  | 返回值 |
| ----- | ----- | ----- | ----- |
| show | 显示弹框 | 无 | 无 |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称    | 说明        |
| ------- | ---------- |
| default | 自定义内容 |
| title   | 自定义标题 |

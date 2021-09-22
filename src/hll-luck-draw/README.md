# hll-luck-draw 幸运转盘

### 介绍

hll-luck-draw 幸运转盘 已多次用于hll活动运营。

### 特性


### 引入

```js

```

## 代码演示

### 
```html
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
```
### 使用插槽

目前仅支持`pointer`插槽, 可定制化抽奖按钮样式
```html
<template #pointer>
  <div
    class="pointer-img"
    @click="startTurns"
  >
    <img :src="pointerDisableImg" v-if="cardCountObj.cardCount <= 0" />
    <img :src="pointerImg" v-else />
  </div>
</template>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------ | -------- | -------- | ------- |
| plateBg     | 转盘礼品背景图  | _string_ | - |
| luckyWidth     | 转盘宽度  | _string_ | 300px |
| luckyHeight     | 转盘高度  | _string_ | 300px |
| luckyNum     | 可抽奖次数  | _number_ | 0 |
| prizeLength     | 奖品个数  | _number_ | 8 |
| turnsNumber     | 转动圈数  | _number_ | 5 |
| turnsTime     | 转动需要持续的时间(秒)  | _number_ | 5s |


### 方法

| 方法名          | 说明     | 参数     | 返回值    |
| ------------ | -------- | -------- | ------- |
| startTurns     | 启动转盘  | - | `void` |

### Slots

支持以下插槽：

| 名称    | 说明        |
| ------- | ---------- |
| pointer | 自定义抽奖按钮 |

<template>
  <div class="cell-item" draggable="true">
    <img :src="`http://localhost:3000/img/component/logo/${cellData.logo}`" :data-id="cellData._id" class="cell-item-img" >
  </div>
</template>

<script>
  export default {
    name: 'MenuCell',

    props: {
      cellData: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-item {
    width: 32px;
    height: 32px;
    margin: 0 6px 8px;
    padding: 3px;
    display: inline-block;
    background: #EEE;
    box-sizing: border-box;
    border: 1px solid #282828;
    border-radius: 4px;
    box-shadow: 0 0 12px #282828;
    transition: all 0.2s;
    &:hover {
      box-shadow: 3px 3px 10px #000; cursor:pointer;
    }
    &:active {
      cursor:move;
    }

    &-img {
      width: 100%;
      height: 100%;
    }
  }
</style>
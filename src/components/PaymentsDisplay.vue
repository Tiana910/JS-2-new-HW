<template>
  <div class="wrap">
    <div class="title">
      <div class="ff"><b>#</b></div>
      <div><b>Amount</b></div>
      <div><b>Category</b></div>
      <div><b>Date</b></div>
    </div>
    <!--    <div v-if="showItems">Prop is true</div>-->
    <!-- {{ items }} -->
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="ff">{{ index + 1 }}</div>
      <div>{{ item.value }}</div>
      <div>{{ item.category }}</div>
      <div>{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PaymentsDisplay',
  // props: ['items'],
  // props: {
  //   items: [Array, Object],
  // },
  props: {
    items: {
      type: Array,
      // required: true,
      default: () => ([]),
    },
    showItems: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: space-evenly;
}

.ff {
  width: 25px;
  text-align: start;
  padding: 0 0 0 15px;
}

.item,
.title {
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

}
</style>

<template>
  <div>
    <button class="btn btn-info" type="button" @click="isVisible = !isVisible">ADD NEW COST+</button><br>
    <div class="add-cost" v-show="isVisible">
      <label for="amount">
        <input id="amount" type="text" placeholder="Amount" v-model.number="value">
      </label>
      <label for="type">
        <!-- <input id="type" type="text" placeholder="Type" v-model="type"> -->
        <select v-model="type" id="type">
          <option disabled value="">Select a category </option>
          <option v-for="category of categoryList" :value="category" :key="category">
            {{ category }}
          </option>
        </select>
      </label>
      <label for="date">
        <input id="date" type="text" placeholder="Date" v-model="date">
      </label>
      <button @click="addPayment">Add</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => (['Food', 'Transport', 'Telephone', "Enternet"]),
    },
  },
  data() {
    return {
      amount: '',
      type: '',
      date: '',
      isVisible: false,
    };
  },
  computed: {
    paymentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `0${day}.0${month}.${year}`;
    },
  },
  methods: {
    addPayment() {
      const data = {
        value: +this.value,
        type: this.type,
        date: this.date || this.paymentDate,
      };

      this.$emit('add-payment', data);
    },
  },
};
</script>

<style scoped>
.add_cost {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  width: 400px;
}

input,
select {
  max-width: 200px;
  margin: 10px;
  padding: 6px;
}

button {
  background-color: rgb(136, 184, 136);
  padding: 6px;
  margin: 10px 5px;
  display: inline-block;
}
</style>

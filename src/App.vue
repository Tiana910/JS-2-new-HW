<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <add-payment-form @add-payment="addNewPayment" :categoryList="categoryList"/>
      <payments-display :items="paymentsList" showItems />
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddPaymentForm from './components/AddPaymentForm.vue';

export default {
  name: 'App',
  data() {
    return {
      show: true,
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      console.log(data);
      this.paymentsList.push(data);
      //this.paymentsList = [...this.paymentsList, props];
    },
  },
  computed: {
  },
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  created() {
    this.paymentsList = this.fetchData();
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  font-size: larger;
  font-weight: 600;
  padding-bottom: 15px;
}
</style>

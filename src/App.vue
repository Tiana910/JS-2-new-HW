<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="wrapper">
      <div class="header">My personal costs</div>
      <add-payment-form @add-payment="addNewPayment" :categoryList="categoryList"></add-payment-form>
      <payments-display :items="payentsList"></payments-display>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  data() {
    return {
      show: true,
      paymentsList: [],
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.01.2020',
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
        {
          date: "17.02.2020",
          category: "Internet",
          value: 97,
        },
        {
          date: "5.09.2020",
          category: "Sport",
          value: 82,
        },
      ];
    },
    addNewPayment(props) {
      // console.log(data);
      // this.paymentsList.push(data);
      this.paymentsList = [...this.paymentsList, props];
    },
  },
  components: {
    HelloWorld,
    PaymentsDisplay,
    AddPaymentForm,
  },
  created() {
    this.paymentsList = this.fetchData();
  }
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

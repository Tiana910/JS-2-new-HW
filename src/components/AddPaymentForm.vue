<template>
    <div class="wrapper">
        <button class="btn btn-info" type="button" @click="isVisible = !isVisible">ADD NEW COST+</button><br>
        <div class="add-cost" v-show="isVisible">
            <label for="amount">
                <input id="amount" type="number" placeholder="Amount" v-model.number="amount">
            </label>
            <label for="category">
                <!--      <input id="type" type="text" placeholder="Type" v-model="type">-->
                <select v-model="category" id="category">
                    <option v-for="category of categoryList" :value="category" :key="category">
                        {{ category }}
                    </option>
                </select>
            </label>
            <label for="date">
                <input id="date" type="text" placeholder="Date" v-model="date">
            </label>
            <button @click="addPayment">Add payment.</button>
        </div>

    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'AddPaymentForm',
    props: {
        categoryList: {
            category: Array,
            default: () => ([]),
        },
    },
    data() {
        return {
            amount: '',
            category: '',
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
            return `${day}.${month}.${year}`;
        },
    },
    methods: {
        addPayment() {
            const data = {
                amount: +this.amount,
                category: this.category,
                date: this.date || this.paymentDate,
            };
            this.$emit('add-payment-form', data)
        }
    }
}

</script>

<style >
.add_cost {
    margin: 10px;
    padding: 10px;
    display: inline-block;
    width: 400px;
}

input {
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

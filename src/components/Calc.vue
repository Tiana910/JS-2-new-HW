<template>
    <div>
        <div class="main">
            <label for="op1">
                <input id="op1" type="number" v-model.number="op1">
            </label>
            <label for="op2">
                <input id="op2" type="number" v-model.number="op2">
            </label>
            = {{ result }}
        </div>
        <div v-show="error">{{ error }}</div>
        <div class="keyboard">
            <button @click="result = op1 + op2">+</button>
            <button @click="sub">-</button>
            <button @click="div">/</button>
            <button @click="mult">*</button>
            <button @click="pow">**</button>
            <button @click="rem">%</button>
        </div>
        <!-- <div v-if="error">{{ error }}</div> -->
        <div>
            <input type="checkbox" id="checked" v-model="checked">
            <label for="checked">{{ checked }}</label>
        </div>
        <div>
            <button v-for="(number, index) of numbers" :key="index" @click="numberPlus">
                {{ number }}</button>
            <button>&#8678;</button>
        </div>
        <div>
            <input type="radio" id="op1" value="Один" v-model="picked" :key="op1">
            <label for="op1">Операнд 1</label>
            <input type="radio" id="op2" value="Два" v-model="picked" :key="op2">
            <label for="op2">Операнд 2</label>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'CalcComponent',
    data() {
        return {
            op1: 0,
            op2: 0,
            result: 0,
            error: '',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9,],
            checked: 'Отобразить экранную клавиатуру',
            picked: ''

        }
    },
    methods: {
        sub() {
            this.error = '';
            this.result = this.op1 - this.op2;
        },
        div() {
            this.error = '';
            if (this.op2 === 0) {
                this.error = 'На ноль делить нельзя';
                return;
            }
            this.result = this.op1 / this.op2;
        },
        mult() {
            this.error = '';
            this.result = this.op1 * this.op2;
        },
        pow() {
            this.error = '';
            this.result = this.op1 ** this.op2;
        },
        rem() {
            this.error = '';
            this.result = this.op1 % this.op2;
        },
        numberPlus() {
            for (let num = 0; num <= 9; num++);
            console.log(num);
        }
    },
};
</script>


<style scoped>
button {
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
}

input {
    display: inline-block;
    margin: 10px 15px;
}
</style>
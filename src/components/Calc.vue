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
        <div class="btn">
            <button @click="result = op1 + op2">+</button>
            <button @click="sub">-</button>
            <button @click="div">/</button>
            <button @click="mult">*</button>
            <button @click="pow">**</button>
            <button @click="trunc">%</button>
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
            result: 0
        }
    },
    methods: {
        sub() {
            this.result = this.op1 - this.op2;
        },
        div() {
            this.result = this.op1 / this.op2;
        },
        mult() {
            this.result = this.op1 * this.op2;
        },
        pow() {
            this.result = this.op1 ** this.op2;
        },
        trunc() {
            this.result = this.op1 % this.op2;
        }
    },
};
</script>


<style scoped>
.btn {
    display: block;
    padding: 10px 10px;
    margin-top: 10px;
}

;
</style>
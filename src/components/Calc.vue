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
            <!-- <button @click="result = op1 + op2">+</button>
            <button @click="sub">-</button>
            <button @click="div">/</button>
            <button @click="mult">*</button>
            <button @click="pow">**</button>
            <button @click="rem">%</button> -->
            <button v-for="operand in operands" :key="operand" :title="operand" @click="calculate(operand)">
                {{ operand }}
            </button>
        </div>
        <!-- <div v-if="error">{{ error }}</div> -->
        <div class="numberKeyboard">
            <label for="checked">{{ checked }}
                <input type="checkbox" id="checked" v-model="numberKey">
            </label>
            <div v-if="numberKey">
                <button v-for="numberKey in keyboard" :key="numberKey" title="numberKey" @click="addKey(numberKey)">
                    {{ numberKey }}
                </button>
            </div>
        </div>
        <div>
            <input type="radio" id="operand-one" value="operand-one" v-model="checkApp">
            <label for="operand-one">Операнд 1</label>
            <input type="radio" id="operand-two" value="operand-two" v-model="checkApp">
            <label for="operand-two">Операнд 2</label>
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
            operands: ["+", "-", "/", "*", "**", "%"],
            error: '',
            checkApp: false,
            keyboard: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '←'],
            checked: 'Отобразить экранную клавиатуру',
            picked: '',
            numberKey: true,
        }
    },
    methods: {
        // sub() {
        //     this.error = '';
        //     this.result = this.op1 - this.op2;
        // },
        // div() {
        //     this.error = '';
        //     if (this.op2 === 0) {
        //         this.error = 'На ноль делить нельзя';
        //         return;
        //     }
        //     this.result = this.op1 / this.op2;
        // },
        // mult() {
        //     this.error = '';
        //     this.result = this.op1 * this.op2;
        // },
        // pow() {
        //     this.error = '';
        //     this.result = this.op1 ** this.op2;
        // },
        // rem() {
        //     this.error = '';
        //     this.result = this.op1 % this.op2;
        // },
        calculate(operation = "+") {
            this.error = "";
            switch (operation) {
                case "+":
                    this.add();
                    break;
                case "-":
                    this.sub();
                    break;
                case "/":
                    this.div();
                    break;
                case "*":
                    this.multi();
                    break;
                case "**/":
                    this.pow();
                    break;
                case "%":
                    this.rem();
                    break;
            }
        },
        numberKeyPush(target, value) {
            let arr = Array.from(target);
            arr.push(value);
            return arr.join('');
        },
        numberKeyPop(target) {
            let arr = Array.from(target);
            arr.pop();
            return arr.join('');
        },
        addKey(numberKey) {
            if (this.checkApp === 'operand-one' && value !== '←') {
                this.op1 = this.numberKeyPush(this.op1, value)
            }
            if (this.checkApp === 'operand-two' && value !== '←') {
                this.op1 = this.numberKeyPush(this.op2, value)
            }
            if (this.checkApp === 'operand-one' && value === '←') {
                this.op1 = this.numberKeyPop(this.op1, value)
            }
            if (this.checkApp === 'operand-two' && value === '←') {
                this.op1 = this.numberKeyPop(this.op2, value)
            }
        },


        add() {
            const { op1, op2 } = this;
            this.result = op1 + op2;
        },
        sub() {
            const { op1, op2 } = this;
            this.result = op1 - op2;
        },
        div() {
            const { op1, op2 } = this;
            if (op2 === 0) {
                this.error = "Делить на 0 нельзя!";
                return;
            }
            this.result = op1 / op2;
        },
        multi() {
            const { op1, op2 } = this;
            this.result = op1 * op2;
        },
        pow() {
            const { op1, op2 } = this;
            this.result = op1 ** op2;
        },
        rem() {
            const { op1, op2 } = this;
            this.result = op1 % op2;
        },

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
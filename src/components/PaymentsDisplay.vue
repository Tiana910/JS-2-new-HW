<template>
    <div class="wrapper-item">
        <div class="title">
            <div><b>#</b></div>
            <div><b>Amount</b></div>
            <div><b>Category</b></div>
            <div><b>Date</b></div>
        </div>
        <div class="item" v-for="(item, index) in items" :key="index">
            <div>{{ index + 1 }}</div>
            <div>{{ item.amount }}</div>
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
            //default: [],
            default: () => ([]),
        },
    },
};

</script>

<style scoped >
.item {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid grey;
}

.title {
    display: flex;
    justify-content: space-evenly;
    /* text-align: center; */
    border-bottom: 1px solid grey;
    padding: 7px 5px;

}

.container {
    width: 900px;

}
</style>

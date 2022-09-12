<template>
    <div class="opt-input">
        <input :value="inputVal" @input="change" />
    </div>
</template>
<script>
/* eslint-disable */
function debounce(fn, wait=300) {
    let timer;
    return function() {
        let context = this;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, wait);
    }
}
export default{
    data() {
        return {
            inputVal: '123'
        };
    },
    methods: {
        change: debounce(function(e) {
                this.inputVal = e.target.value;
                // this.clearInput();
            }, 1000),
        clearInput() {
            this.inputVal = '';
        },
    },
    activated() {
        console.log('input activate');
    },
    deactivated() {
        console.log('input deactivate');
    },
}
</script>
<style scoped>
input{
    text-decoration: none;
}
</style>

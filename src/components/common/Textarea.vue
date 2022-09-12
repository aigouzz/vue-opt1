<template>
    <div class="opt-text">
        <textarea v-model="text" placeholder="请输入相关说明" @blur="blur"></textarea>
        <div class="input-check" v-if="isChecked">{{checkTips}}</div>
    </div>
</template>
<script>
/*eslint-disable */
    export default{
        data() {
            return {
                text: '',
                checkTips: '',
                isChecked: false,
            };
        },
        mounted() {
        },
        methods: {
            blur() {
                let reg = /^\S+$/g;
                console.log(this.text.match(reg))
                if(!this.text.match(reg)) {
                    this.isChecked = true;
                    this.checkTips = '输入不符合要求，请重新输入'
                } else {
                    this.isChecked = false;
                }
            }
        },
    };
</script>
<style scoped lang="less">
@color: #000;
.opt-text{
    .textarea{
        font-size: 14px;
        width: 200px;
        height: 100px;
        resize: none;
        color: @color;
    }
}
.input-check{
        color: red;
        font-size: 12px;
    }
</style>

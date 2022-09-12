<template>
    <div class="opt-input">
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <button @click="changeComp">切换component</button>
    </div>
</template>
<script>
/*eslint-disable */
import Input from './common/Input.vue';
import Textarea from './common/Textarea.vue';
    export default{
        data() {
            return {
                componentName: Input
            };
        },
        methods: {
            changeComp() {
                this.componentName = this.componentName === Input ? Textarea : Input;
            }
        },
    };
</script>
<style scoped>
    .opt-input button{
        border:1px solid #eee;
    }
</style>
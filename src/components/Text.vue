<template>
    <div class="opt-text">
        <ul>
            <li v-for="(item, index) in textArr" :key="item.text">
                {{index}}:{{item.text}}
            </li>
        </ul>
        <button @click="addText">增加</button>
        <button @click="delText">删除</button>
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <button @click="changeComp">切换component</button>
        <div class="opt-text-link">
            <router-link to="/">首页</router-link>
            <router-link to="/home">home</router-link>
            <router-link to="/about">about</router-link>
        </div>
    </div>
</template>
<script>
/*eslint-disable */
import Input from './common/Input.vue';
import Textarea from './common/Textarea.vue';
    export default{
        data() {
            return {
                componentName: Input,
                textArr: [
                    {
                        text: '第一个'
                    },
                    {
                        text: '第二个'
                    },
                    {
                        text: '第三个'
                    },
                ],
            };
        },
        methods: {
            changeComp() {
                this.componentName = this.componentName === Input ? Textarea : Input;
            },
            addText() {
                // this.textArr = [...this.textArr, {
                //     text: `第${this.textArr.length + 1}个`
                // }];
                this.textArr[this.textArr.length] = {
                    text: `第${this.textArr.length + 1}个`
                };
                console.log(this.textArr)
            },
            delText() {
                this.textArr.pop();
            },
        },
        mounted() {
            
        },  
    };
</script>
<style scoped lang="less">
    .opt-text{
        width: 1000px;
        margin: 0 auto;
        button{
            border:1px solid #eee;
        }
        ul li{
            text-decoration: none;
        }
    }
</style>
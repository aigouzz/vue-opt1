<template>
    <div class="about-login">
        <div class="about-login-top">
            欢迎来到Login
        </div>
        <input type="text" v-model="username" placeholder="请输入用户名"/>
        <br />
        <input type="text" v-model="password" placeholder="请输入密码"/>
        <br />
        <button @click="login">登陆</button>
    </div>
</template>
<script>
import { checkUserPass } from '../api/common'
/*eslint-disable */
    export default{
        data() {
            return {
                username: '',
                password: ''
            };
        },
        created() {
            console.log(this.$store)
        },
        methods: {
            changeRoute() {
                console.log(this.$route, this.$router);
                let from = this.$route.path.split('/')[2];
                let pathArr = ['/about/hot', '/about/inner', '/about/book/12902']
                let idx = 0;
                for(let i = 0;i < pathArr.length;i ++) {
                    if(pathArr[i].indexOf(from) > -1) {
                        idx = (i + 1) % pathArr.length;
                        break;
                    }
                }
                let path = pathArr[idx];
                this.$router.push({
                    path,
                    query: {
                        from
                    }
                });
            },
            login() {
                if (checkUserPass(this.username, this.password)) {
                    this.$store.commit('setLogin', true);
                    this.$store.commit('setLoginName', this.username);
                    this.$router.push(this.$route.query.from);
                } else {
                    alert('用户名密码有误，请重新填写');
                }
            }
        },
    }
</script>
<style scoped lang="less">
    @innerColor: #eee;
    @border: 1px solid @innerColor;
    .about-login{
        border: @border;
        font-size: 14px;
    }
</style>
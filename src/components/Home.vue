<script>
import { mapState } from 'vuex'
/*eslint-disable */
    export default{
        data() {
            return {};
        },
        render(h) {
            return h('div', {
                class: 'opt-home'
            }, [h('div', {
                class: 'opt-home-outer'
            }, ['这个是home页面', h('img', {
                class: 'img',
                attrs: {
                    src: require('../assets/logo.png')
                }
            }), h('input', {
                attrs: {
                    type: 'text',
                    value: '',
                    placeholder: '请输入'
                },
            }),h('div', {
                class: 'opt-home-welcome'
            }, this.isLogin ? [`欢迎你，${this.loginName}`, h('button', {
                on: {
                    click: this.checkOut
                }
            }, '退出')] : [h('router-link', {
                attrs: {
                    to: `/login?from=${this.$route.path}`
                }
            }, '去登录')])])]);
        },
        activated() {
            console.log('home activate')
        },
        deactivated() {
            console.log('home deactivate')
        },
        computed: mapState([
            'isLogin',
            'loginName'
        ]),
        methods: {
            checkOut() {
                this.$store.commit('setLogin', '');
                this.$store.commit('setLoginName', null);
                location.href.reload();
            }
        }
    };
</script>
<style scoped lang="less">
    @color1: #c0d;
    .opt-home{
        .opt-home-welcome{
            color: @color1;
            a{
                text-decoration: none;
            }
        }
    }
</style>

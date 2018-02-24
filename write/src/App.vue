<template>
        <div class="container">
            <div class="content">
                <router-view></router-view>
            </div>
            <!-- <sign-btn></sign-btn> -->
            <footer>
                <navbar></navbar>
            </footer>
        </div>
</template>

<script>
    import store from 'vuex'
    import navbar from '@/pages/navbar'
    import newMember from '@/pages/newMember'
    import userInfo from '@/pages/userInfo'
    import account from '@/pages/account'
    import faraway from '@/pages/faraway'
    import penpal from '@/pages/penpal'
    import question from '@/pages/question'
    import signBtn from '@/components/signBtn'
    export default {
        name: 'App',
        components: {
            navbar,
            signBtn,
            newMember,
            userInfo,
            account,
            faraway,
            penpal,
            question
        },
        data () {
            return {
            }
        },
        created () {
            (function() {
                var _winWidth = document.body.clientWidth || document.documentElement.clientWidth,
                        _style = document.getElementsByTagName("html")[0].style;
                _winWidth >= 640 ? _style.fontSize = "24px" : _style.fontSize = _winWidth / 10 + "px";
            })();
        },
        methods: {
        },
        mounted () {
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    ul,ol {
        list-style: none;
    }
    body,html{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: .5rem;
    }
    .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    .content {
        display: flex;
        flex: 1;
        overflow-y: scroll;
        position: relative;
    }
    footer {
        text-align: center;
        height: 1.5rem;
    }
</style>

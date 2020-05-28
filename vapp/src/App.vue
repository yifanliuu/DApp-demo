<template>
    <div id="app">
        <section class="work">
            <h2 class="text-center">管理我的账户</h2>
            <p class="text-center">
                您可以查看贡献，查看奖励，查看邀请者，做出邀请或者工作
            </p>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 work-w3ls">
                        <div class="row">
                            <div class="col-xs-2 work-agile1">
                                <h3>01</h3>
                            </div>
                            <div class="col-xs-10 work-agile2">
                                <h4>查看贡献</h4>
                                <p class="work-p1">
                                    <Contribution />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 work-w3ls">
                        <div class="row">
                            <div class="col-xs-2 work-agile1">
                                <h3>02</h3>
                            </div>
                            <div class="col-xs-10 work-agile2">
                                <h4>查看奖励</h4>
                                <p class="work-p1">
                                    <Reward />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 work-w3ls">
                        <div class="row">
                            <div class="col-xs-2 work-agile1">
                                <h3>03</h3>
                            </div>
                            <div class="col-xs-10 work-agile2">
                                <h4>查看邀请者</h4>
                                <p class="work-p1">
                                    <Invitor />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 work-w3ls">
                        <div class="row">
                            <div class="col-xs-2 work-agile1">
                                <h3>04</h3>
                            </div>
                            <div class="col-xs-10 work-agile2">
                                <h4>工作或者邀请或者接受邀请</h4>
                                <p class="work-p1">
                                    <MakePolicy />
                                </p>
                                <p class="work-p2">
                                    <i
                                        class="fa fa-diamond"
                                        aria-hidden="true"
                                    ></i>
                                    kind: -1： 接受邀请； 0： 工作； 1：发出邀请
                                </p>
                                <p class="work-p2">
                                    <i
                                        class="fa fa-diamond"
                                        aria-hidden="true"
                                    ></i>
                                    Adress: 您需要邀请的用户地址
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Contribution from "./Contribution";
import Reward from "./Reward";
import Invitor from "./Invitor";
import MakePolicy from "./MakePolicy";
//import { mapGetters } from "vuex";

export default {
    name: "app",
    isDizzelInitialized: true,
    components: {
        Contribution,
        Reward,
        Invitor,
        MakePolicy,
    },

    //computed: mapGetters("drizzle", ["isDrizzleInitialized"])
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    justify-content: center;
}
</style>

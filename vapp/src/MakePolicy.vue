<template>
    <div>
        <drizzle-contract-form
            contractName="Protocol"
            method="make_policy"
            :placeholders="placeholders"
        />
    </div>
</template>

<script>
//import { mapGetters } from "vuex";

export default {
    name: "MakePolicy",
    computed: {
        //...mapGetters("drizzel", ["isDrizzleInitialized"]),

        placeholders() {
            return ["kind", "invite adress"];
        },
    },
};
</script>

<style></style>

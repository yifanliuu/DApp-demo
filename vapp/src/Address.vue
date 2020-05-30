<template>
  <div>
    <drizzle-contract contractName="Protocol" method="get_my_address" label="My Address" />
  </div>
</template>

<script>
//import { mapGetters } from "vuex";

export default {
  name: "Address"
  /*
  computed: {
    ...mapGetters("init", ["isInitialized"])
  }
  */
};
</script>

<style></style>

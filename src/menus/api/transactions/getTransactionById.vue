<template>
  <div class="wrapper-content">
    <id :modules="modules"
               :item="item" />
  </div>
</template>

<script>
import id from "@/components/widgets/id.vue";

export default {
  data() {
    return {
      modules: "transactions",
      item: "getTransactionById"
    };
  },
  components: {
    id
  }
};
</script>

<style lang="less" scoped>
</style>

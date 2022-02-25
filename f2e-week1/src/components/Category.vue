<template v-if="category[0].Class || category[0].Class1 || category[0].Class2">
  <div class="category">
    <div class="category_items"># {{ category[0].Class1 }}</div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["category"],
  data() {
    return {
      categories: this.category,
      tempName: "fake text",
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 35px;

  border: 1px solid #bea363;
  border-radius: 20px;
  &_items {
    color: #bea363;
  }
}
</style>
>

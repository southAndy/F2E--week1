<template v-if="category.Class || category.Class1 || category.Class2">
  <div class="category">
    <div class="category_items">
      # {{ category.Class1 || category.Class || category.Class3 }}
    </div>
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

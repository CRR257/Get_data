<template>
  <div class="header">
    <span>Planet's chart</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
span {
  color: white;
  font-weight: 600;
  font-size: 19px;
  position: relative;
  top: 10px;
  letter-spacing: 1.4px;
}
.header {
  height: 50px;
  background-color: rgba(10, 0, 0, 0.96);
  position: absolute;
  top: 0px;
  width: 100%;
}
</style>

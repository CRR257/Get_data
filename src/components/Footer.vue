<template>
  <div class="footer">
    <h4>by CRR257</h4>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h4 {
  position: relative;
  top: 15px;
}
.footer {
  height: 50px;
  background-color: rgba(10, 0, 0, 0.96);
  width: 100%;
  bottom: 0px;
  margin-top: 20px;
}
</style>

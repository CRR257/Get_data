<template>
  <div class="footer">
    <span>byCRR257<i class="fas fa-paw"></i></span>
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
span {
  position: relative;
  color: white;
  font-size: 13px;
  top: 14px;
}
.footer {
  height: 50px;
  background-color: rgba(10, 0, 0, 0.96);
  width: 80%;
  margin: 0 auto;
  margin-top: -5px;
}
.fa-paw {
  padding-left: 10px;
}
</style>

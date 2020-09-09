<template>
  <div>
    <Header />
    <div class="content">
      <span class="content-title" :name="title">{{ title }}</span>
      <span class="content-description" :name="description">{{
        description
      }}</span>
    </div>
    <div class="card">
      <div v-for="bitcoin in bitcoinsInfo" :key="bitcoin" class="card-info">
        <span class="card-info__country">{{ bitcoin.description }}:</span>
        <span>
          <span class="card-info__price" v-html="bitcoin.symbol"></span>
          {{ bitcoin.rate_float | bitcoindecimal }}
        </span>
      </div>
    </div>
    <div v-if="errors && error" class="error">
      <ul class="error-card">
        <li v-for="error of errors" :key="error">{{ error.message }}</li>
        <li>{{ error }}</li>
      </ul>
    </div>
    <div class="disclaimer">
      <span>{{ disclaimer }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  data() {
    return {
      bitcoinsInfo: [],
      errors: [],
      error: "",
      title: "Bitcoin Price Index 💰",
      description: "Bitcoin prices, updated every minute",
      disclaimer: ""
    };
  },
  components: {
    Header
  },
  filters: {
    bitcoindecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    axios
      .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then(response => {
        this.bitcoinsInfo = response.data.bpi;
        this.disclaimer = response.data.disclaimer;
      })
      .catch(e => {
        this.errors.push(e);
        this.error +=
          "We're sorry, we're not able to retrieve this information at the moment, please try back later";
      });
  }
};
</script>

<style scoped>
.content {
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  width: 68%;
  margin: 0 auto;
}
.content-title {
  font-size: 15px;
  padding-bottom: 1rem;
  text-decoration: underline;
  font-weight: 700;
}
.content-description {
  font-size: 12px;
}
ul {
  border: 1px solid grey;
  list-style-type: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
}
li {
  width: 330px;
  margin: 10px;
  font-size: 13px;
}
.card {
  margin: 0rem auto 2rem auto;
  padding: 1rem;
  border: 1px solid #aea5a5;
  width: 21rem;
  letter-spacing: 1.3px;
  font-size: 12px;
}
.card-info {
  padding: 7px;
}
.card-info__country {
  font-weight: 700;
  margin: 1rem;
  font-size: 15px;
}
p {
  font-size: 15px;
  letter-spacing: 1.3px;
}
text {
  max-width: 270px;
  margin: 0 auto;
  font-size: 13px;
}
.disclaimer {
  width: 60%;
  margin: 0 auto;
  font-size: 12px;
}
.error {
  justify-content: center;
  display: flex;
  margin-top: 5rem;
}
.error-card {
  display: flex;
  flex-direction: column;
}

@media (min-width: 700px) {
  .content-title {
    font-size: 17px;
  }
}
</style>

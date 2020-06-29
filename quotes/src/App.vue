<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote" :showAlert="showAlert"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDelete="deleteQuote"></app-quote-grid>
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
          </div>
        </div>
        <div class="row" v-if="showAlert">
          <div class="col-sm-12 text-center">
            <div class="alert alert-danger" role="alert">
              You reach the maximum limit of 10 quotes. Please, delete a quote.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data: function() {
    return {
      quotes: ['"There is nothing permanent except change."'],
      maxQuotes: 10,
      showAlert: false
    };
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);

      if(this.quotes.length >= 10) {
        this.showAlert = true;
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div class="container flex h-screen text-center overflow-hidden">
    <div
      class="m-6 md:rounded-lg bg-white m-auto max-w-sm mx-auto shadow-2xl sm:rounded-lg"
    >
      <div class="sm:flex sm:items-center px-6 py-4 items-center text-center">
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4 text-center">
            <h1 class="text-2xl leading-tight">Clima</h1>
            <p class="text-sm leading-tight text-grey-dark">The Simple Weather App Made With &hearts; By <a class="text-purple-600" href="https://github.com/jaetooledev">@jaetooledev</a>.</p>
            <hr class="my-2">
            <input type="text" class="my-2 w-full shadow py-1 px-2 text-small" name="location" placeholder="Enter Your Location" id="address" v-model="location" v-debounce:300ms="getTemprature">
            <div v-if="response">
              <hr class="my-2">
              <h2 class="text-lg">It's Currently {{currentTemprature}}&deg;C!</h2>
              <p class="text-sm" v-if="currentTemprature < 10">It's a bit cold outside currently!</p>
              <p class="text-sm" v-if="currentTemprature >= 10">It's pretty nice outside currently!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      location: '',
      response: null,
    };
  },
  mounted() {
    require("dotenv").config();
  },
  computed: {
    currentTemprature() {
      return (this.response.main.temp - 273.15).toFixed(0);
    }
  },
  methods: {
    getTemprature() {
      axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.location + "&appid=" + process.env.VUE_APP_API_KEY)
        .then((response) => {
          this.response = response.data
        });
    }
  },
};
</script>

<style>
</style>

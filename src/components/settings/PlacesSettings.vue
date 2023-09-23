<template>
  <div></div>
  <div class="places">
    <div class="ccard cshadow w-50 mb-5">
      <div class="ccard-header py-4">
        <div
          class="cbtn cbtn-yellow cbtn-shadow mx-2"
          @click="callCounter('+')"
        >
          Tisch erstellen
        </div>
        <div
          class="cbtn cbtn-yellow cbtn-shadow mx-2"
          @click="callCounter('-')"
        >
          Tisch löschen
        </div>
        <div class="cbtn cbtn-red cbtn-shadow mx-2" @click="counter = 0">
          Alle löschen
        </div>
      </div>
      <div class="ccard-body">
        <div
          v-for="e in counter"
          v-bind:key="e"
          class="ccard cbg-light cbtn-shadow m-2"
        >
          <div class="ccard-header"><h4>Tisch</h4></div>
          <div class="ccard-body">
            <h1>{{ e }}</h1>
          </div>
          <div class="ccard-footer"></div>
        </div>
      </div>
      <div class="ccard-footer">
        <h4>Anzahl der Tische: {{ counter }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlacesSettings",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    callCounter(a: string) {
      switch (a) {
        case "+":
          this.counter++;
          break;
        case "-":
          if (this.counter === 0) {
            return;
          } else {
            this.counter--;
          }
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>

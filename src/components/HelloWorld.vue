<template>
  <v-container>
    <v-layout
      text-center
      wrap>
      <v-container class="my-8">
      <h1>Dates</h1>
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <v-date-picker
            v-model="daysOff"
            multiple
          ></v-date-picker>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn class="ml-4" @click.prevent="resetData">Download Data</v-btn>
        <v-btn class="ml-4" @click.prevent="resetData">Reset</v-btn>
        <v-btn class="ml-4" color="primary" @click.prevent="sendData">Save</v-btn>
      </v-row>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      daysOff: [],
    }
  },
  created(){
    this.getDaysOff()
  },
  computed: {
    ...mapState('dates', ['dates']),
    initialState() {
      return this.$store.state.dates.dates
    },
    payload() {
      function addDateOff(date, value) {
        this.date = date
        this.value = true
      }
      function removeDateOff(date, value) {
        this.date = date
        this.value = false
      }
      let addDaysOff = this.daysOff.map(a => new addDateOff(a))
      let removeDaysOff = this.initialState.map(a => this.daysOff.includes(a) ? new addDateOff(a) : new removeDateOff(a))
      let concatDaysOff = [...addDaysOff, ...removeDaysOff]
      return concatDaysOff
    }
  },
  methods: {
    async getDaysOff() {
      this.daysOff = await this.$store.dispatch('dates/getDates')
    },
    sendData() {
      this.$store.dispatch('dates/addDates', this.payload)
      .catch((error) => {console.log(error)
      })
    },
    resetData() {
      this.daysOff = this.$store.state.dates.dates
    }
  },
}
</script>

<template>
    <div class='container__datepicker'>
      <h4 class='datepicker-title'>Период:</h4>
      <datepicker
        monday-first
        class='datepicker date-start'
        language='ru'
        :format='format'
        placeholder='Выберите дату...'
        v-model='start'
        @selected='onSelectStart'
        :highlighted='state.highlighted'
        :disabled='disabled'
        v-bind:full-month-name='true'
      ></datepicker>

      <datepicker
        class='datepicker date-end'
        language='ru'
        :format='format'
        placeholder='Выберите дату...'
        monday-first
        v-model='end'
        @selected='onSelectEnd'
        :highlighted='state.highlighted'
        :disabled='disabled'
        v-bind:full-month-name='true'
      ></datepicker>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

var state = {
  disabled: {
    to: new Date()
  },
  highlighted: {
    dates: [
      new Date()
    ]
  }
}

export default {
  components: {
    Datepicker
  },
  data: function () {
    return {
      format: 'dd MMM yyyy',
      state: state,
      start: null,
      closeButton: true,
      end: null
    }
  },
  computed: {
    disabled: function() {
      const yesterday = new Date() - 84600
      return {
        to: new Date(yesterday)
      }
    }
  },
  methods: {
    onSelectStart(val) {
      if (this.end && this.end < val) {
        this.end = val
      }
    },
    onSelectEnd(val) {
      if (this.start && this.start > val) {
          this.start = val
      }
    }
  }
}
</script>
<style>
  .container__datepicker {
    display: flex;
    font-family: Roboto;
  }
  .datepicker {
    color: #5d5d5d;
    margin: 10px;
  }
  .container__datepicker > .datepicker > div > input {
    width: 210px;
    text-align: center;
  }
  .container__datepicker > .datepicker > div > input::placeholder {
    font-style: italic;
    text-align: left;
    padding-left: 5px;
  }
  .container__datepicker > .datepicker > div > input:focus {
    border-color: #69a3ea;
  }
  .vdp-datepicker__calendar {
    width: 210px;
  }
  .vdp-datepicker__calendar .cell, .vdp-datepicker__calendar > header, .prev, .up, .next {
    height: 35px;
  }
  .vdp-datepicker__calendar > header, .prev, .up, .next {
    color: #ffffff;
    background-color: #3f51b5;
  }
  .vdp-datepicker__calendar header .prev:not(.disabled):hover,
  .vdp-datepicker__calendar header .next:not(.disabled):hover,
  .vdp-datepicker__calendar > header .up:not(.disabled):hover {
    color: #ffffff;
    background-color: #3f51b5;
  }
  .weekend {
    color: red;
  }
  .datepicker-title {
    margin: 0;
    display: flex;
    align-items: center;
  }

</style>

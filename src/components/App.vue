<template>
  <div id='app'>
    <p id='hello'>Hello, world!</p>
    <input type="text" name="" value="" id="date-picker">
    <!-- <div class='date-picker'>
      <datepicker language='ru' :format='datePickerOptions.format'></datepicker>
    </div> -->
  </div>
</template>

<script>
// import Datepicker from 'vue-material-datepicker'
// import Datepicker from 'vuejs-datepicker'
import $ from 'jquery'
import Zebra_DatePicker from 'zebra_datepicker'
// import 'zebra_datepicker/dist/css/default/zebra_datepicker.min.css'


var state = {
    date1: new Date()
}

export default {
  name: 'app',
  mounted: function(){
    $('#date-picker').Zebra_DatePicker({
      // direction: [false, thisYear - 100 + '-01-01'],
      // start_date: thisYear - 16 + '-01-01',
      // view: 'years',
      // offset: [0,0],
      // show_icon: false
    })
  }
  // components: {
  //   Datepicker
  // },
  // data () {
  //   return {
  //     datePickerOptions: {
  //       format: 'dd.MM.yyyy',
  //       closeButton: true
  //     }
  //   }
  // }
}
</script>
<style>
  #date-picker, #hello {
    color: red;
  }

</style>

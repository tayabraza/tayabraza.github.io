<template>
  <form @submit.prevent="nextCheck">
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="postcode-lookup">Enter your postcode</label>
          <input type="text" class="form-control" id="postcode-lookup" v-model.trim="postcode" @blur="postcodeCheck" autocomplete="off" >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="select-date">Select Date</label>
          <select name="dates" class="custom-select" id="select-date" v-model="selectedDate" @change="dateCheck" :disabled="!validPostcode">
            <option v-for="(date, index) in futureDate" :key="index">{{ date }}</option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="select-time">Select Time</label>
          <select name="time" class="custom-select" id="select-time" v-model="selectedTime" @change="timeCheck" :disabled="!selectedDay || !validPostcode" >
            <option v-for="(time, index) in timeSlot[selectedDay]" :key="index">{{ time }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-group mx-auto my-4">
        <Button type="submit" btnTitle="Next Step" :disabled="!validPostcode || !selectedDate || !selectedTime" @submit.prevent="nextCheck" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="select-address">Select Address</label>
          <select name="address" class="custom-select" id="select-address" v-model="selectedAddress">
            <option v-for="(address, index) in addressList" :key="index">{{ address }}</option>
          </select>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import Button from '@/components/Button.vue'

  export default {
    name: 'BookingForm',
    components: {
      Button
    },
    data(){
      return {
        baseURL: 'https://api.getAddress.io/find/',
        apiKey: 'MBFC8YgVDUGn4TaZuNPN4w29346',
        postcode: '',
        validPostcode: false,
        selectedDate: '',
        selectedDay: '',
        selectedTime: '',
        selectedAddress: '',
        addressList: [],
        futureDate: [],
        timeSlot : {
          weekDay: ['08:00 AM to 10:00 AM - £175', '10:00 AM to 12:00 PM - £175', '12:00 PM to 02:00 PM - £175', '02:00 PM to 04:00 PM - £175', '04:00 PM to 06:00 PM - £175', '06:00 PM to 09:00 PM - £225', '09:00 PM to 12:00 AM - £225', '12:00 AM to 04:00 AM - £300', '04:00 AM to 08:00 AM - £300'
          ],
          saturday: ['08:00 AM to 10:00 AM - £225', '10:00 AM to 12:00 PM - £225', '12:00 PM to 02:00 PM - £225', '02:00 PM to 04:00 PM - £225', '04:00 PM to 06:00 PM - £225','06:00 PM to 09:00 PM - £225', '09:00 PM to 12:00 AM - £225','12:00 AM to 04:00 AM - £225', '04:00 AM to 08:00 AM - £225'
          ],
          sunday: ['08:00 AM to 10:00 AM - £300', '10:00 AM to 12:00 PM - £300', '12:00 PM to 02:00 PM - £300', '02:00 PM to 04:00 PM - £300', '04:00 PM to 06:00 PM - £300','06:00 PM to 09:00 PM - £300', '09:00 PM to 12:00 AM - £300','12:00 AM to 04:00 AM - £300', '04:00 AM to 08:00 AM - £300'
          ]
        }
      }
    },
    methods: {
      postcodeCheck(){
        let postcodeValidation = /^[a-z]{1,2}[0-9]{1,2}\s*?[0-9]{1}[a-z]{2}$/i;
        postcodeValidation.test(this.postcode) ? this.validPostcode = true : this.validPostcode = false;
        this.postcode = this.postcode.slice(0, -3).toUpperCase().trim() + ' ' + this.postcode.slice(-3).toUpperCase().trim();
      },
      dateCheck(){
        let retrieveDay = this.selectedDate.split(' ');
        this.selectedDay = retrieveDay[1] !== 'Saturday' && retrieveDay[1] !== 'Sunday' ? 'weekDay' : retrieveDay[1].toLowerCase();
        this.selectedTime == '' ? this.selectedTime = false : this.selectedTime = '';
      },
      nextCheck(){
        // let postcodeDateTime = {
        //   postcode: this.postcode,
        //   selectedDate: this.selectedDate,
        //   selectedTime: this.selectedTime,
        //   selectedAddress: this.selectedAddress
        // }
        if ( this.validPostcode && this.selectedDate && this.selectedTime ) {
          this.axios.get(`${this.baseURL}${this.postcode}?api-key=${this.apiKey}`)
          .then(response => {
            let parse = JSON.parse(response.data.addresses);
            this.addressList.push(parse)
            console.log(response.data.addresses);
          }, error => {
            console.log(error);
          });
          //this.$emit('postcodeDateTime-submitted', postcodeDateTime);
        } else {
          this.selectedTime = false;
        }
      }
    },
    watch: {

    },
    computed: {

    },
    mounted(){
      let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let date = new Date();
      let lastDateOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
      let currentDate = date.getDate();
      let currentDay = date.getDay();
      let i = 0;
      while ( i < 7 ) {
        currentDate > lastDateOfMonth.getDate() ? currentDate = 1 :  currentDate =  currentDate;
        currentDay >= 7 ? currentDay = 0 : currentDay = currentDay;
          this.futureDate.push( currentDate++ + ' ' + day[currentDay++] );
        i++;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
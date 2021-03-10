<template>
  <div class="py-5">
    <form @submit.prevent="formSubmit">
      <div v-if="!firstStepCompleted">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="postcode-lookup">Enter your postcode</label>
              <input type="text" class="form-control" id="postcode-lookup" v-model.trim="postcode" @change="postcodeCheck" >
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
              <select name="time" class="custom-select" id="select-time" v-model="selectedTime" :disabled="!selectedDay || !validPostcode" >
                <option v-for="(time, index) in timeSlot[selectedDay]" :key="index">{{ time }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group mx-auto my-4">
            <Button type="button" btnTitle="Next Step" :disabled="!validPostcode || !selectedDate || !selectedTime" @click.prevent="nextCheck" />
          </div>
        </div>
      </div>
      <div v-if="firstStepCompleted">
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
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="name">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="text" class="form-control" id="phone" v-model="phone">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="problem">Problem detail</label>
              <textarea class="form-control" rows="4" id="problem" v-model="problem"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group mx-auto my-4">
            <Button type="submit" btnTitle="Submit" />
          </div>
        </div>
      </div>
    </form>
  </div>
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
        apiKey: 'gtpW8aeuaU2eH59bMefUrA29774',
        //apiKey: 'RIVc51QcDEeIfgj4Jd4ytg29483',
        //apikey: 'EC3696kcEUi3vt_jMY_hdQ29484',
        //apiKey: 'E2GbX_IMYk-XFamPW37aLw29485',
        selectedService: sessionStorage.getItem('selectedService'),
        postcode: '',
        validPostcode: '',
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
        },
        name: '',
        email: '',
        phone: '',
        problem: '',
        firstStepCompleted: ''
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
            this.addressList = response.data.addresses.map(v => v.replace(/(\s,\s*?)|(,\s$)/gm, '')).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
            this.firstStepCompleted = true;
            //this.$emit('postcodeDateTime-submitted', postcodeDateTime);
          }, error => {
            console.log(error);
          });
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
      let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",  "November",  "December"];
      let date = new Date();
      let lastDateOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
      let currentDate = date.getDate();
      let currentDay = date.getDay();
      let currentMonth = date.getMonth();
      let currentYear = date.getFullYear();
      let i = 0;
      while ( i < 7 ) {
        currentDate > lastDateOfMonth.getDate() && currentMonth == 11 ? currentYear = currentYear + 1 : currentYear = currentYear;
        currentDate > lastDateOfMonth.getDate() && currentMonth == 11 ? currentMonth = currentMonth - 12 : currentMonth = currentMonth;
        currentDate > lastDateOfMonth.getDate() ? currentMonth = currentMonth + 1 : currentMonth = currentMonth;
        currentDate > lastDateOfMonth.getDate() ? currentDate =  1 :  currentDate =  currentDate;
        currentDay > 6 ? currentDay = 0 : currentDay = currentDay;
        this.futureDate.push( `${currentDate++} ${day[currentDay++]} ${month[currentMonth]} ${currentYear}` );
        i++;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
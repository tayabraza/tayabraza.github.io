<template>
  <div>
    <form>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="postcode-lookup">Enter your postcode</label>
            <input type="text" class="form-control" id="postcode-lookup">
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label for="select-date">Select Date</label>
            <select name="dates" class="custom-select" id="select-date">
              <option>Select Date</option>
              <option v-for="(date, index) in futureDates" :key="index">{{ date }}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label for="select-time">Select Time</label>
            <select name="time" class="custom-select" id="select-time">
              <option>Select Time</option>
              <option v-for="(time, index) in futureTimes" :key="index">{{ time }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group mx-auto my-4">
          <Button btnTitle="Next Step" />
        </div>
      </div>
    </form>

    <form @submit="prevent">
      <div class="form-group">
        <label for="first-line">First Line Address</label>
        <input type="text" class="form-control" id="first-line">
      </div>
      <div class="form-group">
        <label for="second-line">Second Line Address</label>
        <input type="text" class="form-control" id="second-line">
      </div>
      <div class="form-group">
        <label for="third-line">Third Line Address</label>
        <input type="text" class="form-control" id="third-line">
      </div>
      <div class="form-group">
        <label for="town">Town</label>
        <input type="text" class="form-control" id="town">
      </div>
      <div class="form-group">
        <label for="county">County</label>
        <input type="text" class="form-control" id="county">
      </div>
      <div class="form-group">
        <label for="postcode">Postcode</label>
        <input type="text" class="form-control" id="postcode">
      </div>
      <div class="form-group">
        <Button class="text-right" btnTitle="Submit" />
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
        futureDates: [],
        futureTimes: []
      }
    },
    methods: {

    },
    mounted(){
        let date = new Date();
        //date.setHours(23);
        let currentTime = date.getHours();
        let startTime = date.getHours() -2;
        let endTime = startTime + 2;
        //this.futureTimes.push(startTime + ':00 - ' +  endTime + ':00');
        let i = 0;
        while ( i < 12 ) {
          startTime = startTime == 22 ? 0 : startTime == 23 ? 1 : startTime + 2;
          endTime = endTime == 22 ? 0 : endTime == 23 ? 1 : endTime + 2;

          if ( startTime >= 0 && startTime >= currentTime){
              this.futureTimes.push(startTime + ':00 - ' +  endTime + ':00');
          } else {
            this.futureTimes.push(startTime + ':00 - ' +  endTime + ':00 Next Day');
          }

          this.futureDates.push(date.toLocaleDateString());
          date.setDate(date.getDate() + 1);
          i++
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <main>
    <div class="container container-tr">
      <Options v-if="!selectedService" @service-changed="selectedService = $event" />
      <BookingForm v-if="selectedService" />
    </div>
  </main>
</template>

<script>
import Options from '@/components/Options.vue'
import BookingForm from '@/components/BookingForm.vue'


export default {
  name: 'Home',
  components: {
    Options,
    BookingForm
  },
  data(){
    return {
      selectedService: '',
    }
  },
  watch: {
    selectedService(){
      sessionStorage.setItem('selectedService', this.selectedService);
    }
  },
  computed: {

  },
  methods: {
    // showBookingForm(postcodeDateTime){
    //   this.postcode = postcodeDateTime.postcode;
    //   this.selectedDate = postcodeDateTime.selectedDate;
    //   this.selectedTime = postcodeDateTime.selectedTime;
    //   this.bookingForm = true;
    // }
  }
}
//
</script>

<style lang="scss" scoped>

</style>

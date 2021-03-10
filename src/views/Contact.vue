<template>
  <main>
    <div class="container container-tr pb-5">
      <h2 class="text-center my-4">Contact Us</h2>
      <div class="row">
        <div class="col-lg-5">
          <img src="../assets/contact.jpg" alt="contact" class="img-fluid d-none d-lg-block">
        </div>
        <div class="col-lg-7">
          <p class="mt-4">
            Call us now on 
              <a href="tel:07960325000 " style="font-weight:bold;">
                  07960325000 
              </a> 
            or complete the form below and a member of the team will be in contact shortly.
          </p>
          <p>
            We are always known for our committed and best customer support.
          </p>
          <form @submit.prevent="contactFormSubmit">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" v-model="name" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="phone" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="problem">Message</label>
                  <textarea class="form-control" rows="4" id="problem" v-model="problem" required></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group mx-auto my-2">
                <Button type="submit" btnTitle="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <BootstrapModal v-if="showThankyouModal" @close="$router.go(0)">
        <h6>
          Thank you for contacting us.
        </h6>
        <p>
          A member of our team will be in touch with you shortly.
        </p>
      </BootstrapModal>
    </div>
  </main>
</template>

<script>
  import Button from '@/components/Button.vue';
  import BootstrapModal from '@/components/BootstrapModal.vue';

  export default {
    name: 'BookingForm',
    components: {
      Button,
      BootstrapModal
    },
    data(){
      return {
        showThankyouModal : false
      }
    },
    methods : {
      contactFormSubmit(){
        this.showThankyouModal = true;
      },
    }
  }
</script>

<style lang="scss" scoped>
a {
  background-color:#006aff;
  background: linear-gradient(#006aff,#00fafa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
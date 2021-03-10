<template>
  <div>
    <FullBackgroundCarousel />
    <div class="options-container py-5">
      <h3 class="text-center mb-5">Please select required service from the boxes below</h3>
      <div class="row mt-5" >
        <div class="col-md-4">
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="select-service" value="Heating" v-model="service">Heating
            </label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="select-service" value="Plumbing" v-model="service">Plumbing
            </label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="select-service" value="Electrical" v-model="service">Electrical
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullBackgroundCarousel from '@/components/FullBackgroundCarousel.vue'

export default {
  name: 'Options',
  components: {
    FullBackgroundCarousel
  },
  data(){
    return {
      service: ''
    }
  },
  watch: {
    service(newVal){
      this.service = newVal;
      this.serviceUpdate(newVal);
    }
  },
  methods: {
    serviceUpdate(val){
      this.$emit('service-changed', val);
    }
  }
}
</script>

<style lang="scss" scoped>

.options-container{
  position:relative;
  max-width: 700px;
  margin: auto;
}

input{
  visibility: hidden;
}
.form-check {
  width: 200px;
  height: 100px;
  margin: 10px auto;
  padding: 30px 0px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;

  label{
    cursor: pointer;
  }
}

</style>

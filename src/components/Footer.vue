<template>
  <div>
    <footer>
      <div class="container">
        <div class="copyrights">
          247 Property Care © {{new Date().getFullYear()}}
        </div>
        <div class="designed">
          Designed by <a href="https://www.tayabraza.com" target="_blank"> Tayab Raza</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

footer{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 40px;
    padding: 12px 0px;
    font-size: 12px;
    color: #ffffff;
    box-shadow: 0px 0px 10px 2px #404040;
    background-color:#006aff;
    background: linear-gradient(#00fafa,#006aff);

    a{
      color: #ffffff;
      text-decoration: underline;
    }

    .copyrights{
      float: left;
    }

    .designed{
      float: right;
    }

}
</style>
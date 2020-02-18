<template>
    <div class="imgflow">
        <div class="imgHeaderBlock">
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderBlock',
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.imgflow {
    width: 100%;
    max-width: 1650px;
    height: 100vh;
    max-height: 500px;
    @include respond-to(medium-screens) { background-position: top center; max-height: 660px;}
    overflow: hidden;
    position: relative; 
    margin: 0 auto;
    padding: 0;
}
.imgHeaderBlock{
    position: absolute;
    bottom: 0;
    background-image: url(/img/headerImage.png);
    background-position: top right 30%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 261px;
    @include respond-to(medium-screens) { background-position: top center; height: 480px;}
    @include respond-to(wide-screens) { border-radius: 240px;}
}
</style>

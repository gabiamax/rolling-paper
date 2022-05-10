<template>
  <header class="ribbon">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <p>2022 신규 입사자 여러분을 환영합니다</p>
  </header>
</template>

<style lang="scss">
.ribbon {
  max-width: 80vw;
  height: 120px;
  margin: 100px auto 0px;
  position: relative;
  color: #fff;
  font: 28px/60px sans-serif;
  text-align: center;
  text-transform: uppercase;
  background: #ffffff;
  color: #2e2e2e;
  /*   animation: main 250ms; */
}

.ribbon i {
  position: absolute;
}

.ribbon i:first-child,
.ribbon i:nth-child(2) {
  position: absolute;
  left: -40px;
  bottom: -40px;
  z-index: -1;
  border: 40px solid transparent;
  border-right-color: #8e8e8e;
  /*   animation: edge 500ms; */
}

.ribbon i:nth-child(2) {
  left: auto;
  right: -40px;
  border-right-color: transparent;
  border-left-color: #8e8e8e;
}

.ribbon i:nth-child(3),
.ribbon i:last-child {
  width: 40px;
  bottom: -40px;
  left: -60px;
  z-index: -2;
  border: 50px solid #ffffff;
  border-left-color: transparent;
  /*   animation: back 600ms; */
  /*   transform-origin: 100% 0; */
}

.ribbon i:last-child {
  bottom: -40px;
  left: auto;
  right: -60px;
  border: 50px solid #ffffff;
  border-right-color: transparent;
  /*   transform-origin: 0 0; */
}
</style>

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
  height: fit-content;
  margin: 9vh auto 0px;
  padding: 1.3rem;
  position: relative;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  background: #ffffff;
  color: #2e2e2e;
  /*   animation: main 250ms; */
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2.3rem;
    word-break: keep-all;
  }
  i {
    position: absolute;

    &:first-child,
    &:nth-child(2) {
      position: absolute;
      left: -40px;
      bottom: -40px;
      z-index: -1;
      border: 40px solid transparent;
      border-right-color: #8e8e8e;
      /*   animation: edge 500ms; */
    }

    &:nth-child(2) {
      left: auto;
      right: -40px;
      border-right-color: transparent;
      border-left-color: #8e8e8e;
    }

    &:nth-child(3),
    &:nth-child(4) {
      width: 40px;
      bottom: -40px;
      left: -60px;
      z-index: -2;
      border: 50px solid #ffffff;
      border-left-color: transparent;
      /*   animation: back 600ms; */
      /*   transform-origin: 100% 0; */
    }
    &:nth-child(4) {
      bottom: -40px;
      left: auto;
      right: -60px;
      border: 50px solid #ffffff;
      border-right-color: transparent;
      /*   transform-origin: 0 0; */
    }
  }
}
</style>

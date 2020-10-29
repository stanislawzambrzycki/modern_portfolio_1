<template>
  <div id="app">
    <MenuComponent ref="menu" @navigate="navigateTo($event)"></MenuComponent>
    <MainComponent
      v-if="showMain"
      ref="main"
      @navigate="navigateTo($event)"
    ></MainComponent>
    <AboutComponent v-if="showAbout"></AboutComponent>
    <ContactComponent v-if="showContact"></ContactComponent>
    <WorkComponent
      v-if="showWork"
      ref="work"
      @navigate="navigateTo($event)"
    ></WorkComponent>
  </div>
</template>

<script src="./App.js" />
<style src="./css/main.css"></style>
<style src="@fortawesome/fontawesome-free/css/all.css"></style>

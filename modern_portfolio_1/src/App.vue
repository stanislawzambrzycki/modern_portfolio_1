<template>
  <div id="app">
    <MenuComponent @navigate="navigateTo($event)"></MenuComponent>
    <MainComponent v-if="showMain"></MainComponent>
    <AboutComponent v-if="showAbout"></AboutComponent>
    <ContactComponent v-if="showContact"></ContactComponent>
    <WorkComponent v-if="showWork"></WorkComponent>
  </div>
</template>

<script src="./App.js" />
<style src="./css/main.css"></style>
<style src="@fortawesome/fontawesome-free/css/all.css"></style>

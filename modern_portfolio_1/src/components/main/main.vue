<template>
  <div id="bg-img">
    <div id="bg-opacity">
      <!-- <MenuComponent v-on:navigate-to.prevent="$emit('navigate-to', $event)"></MenuComponent> -->
      <main id="home">
        <h1 class="lg-heading">
          Stanisław <span class="text-secondary">Zambrzycki</span>
        </h1>
        <h2 class="sm-heading">
          Web Developer, Programmer, Designer & Entrepreneur
        </h2>
        <div class="main-links">
          <div class="icons">
            <a href="#!">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="btn-light call-to-action"
              @click="$emit('navigate', 'work')"
            >
              <i class="fas fa-arrow-alt-circle-right fa-2x"></i>
              <p>Come, let me show you my projects</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<style src="./main.css"></style>
<script src="./main.js"></script>

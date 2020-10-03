<template>
  <header>
    <div class="menu-btn" @click="toggleMenu">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <a href="#" class="nav-link" @click="$emit('navigate', 'home'), toggleMenu()">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="$emit('navigate', 'about'), toggleMenu()">About Me</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="$emit('navigate', 'work'), toggleMenu()">My Work</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link contact-btn" @click="toggleContactItems">How To Reach Me</a>
        </li>
        <li class="contact-item">
          <div class="contact-data">
            <p>
              <span class="text-secondary">Email:</span>
              stanislaw.zambrzycki@poczta.onet.pl
            </p>
            <p><span class="text-secondary">Phone:</span> 999 999 999</p>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script src="./menu.js"/>
<style src="./menu.css"/>
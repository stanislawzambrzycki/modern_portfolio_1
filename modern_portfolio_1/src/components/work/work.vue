<template>
  <div>
    <main id="work">
      <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
      <h2 class="sm-heading">Check out some of my projects...</h2>
      <div class="projects">
        <div class="item">
          <a href="#!">
            <img src="./projects/project1.jpg" alt="Project" />
            <a href="#" class="btn-light">
              <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
              <i class="fab fa-github fa-1x"></i> Github
            </a>
          </a>
        </div>
        <div class="item">
          <a href="#!">
            <img src="./projects/project2.jpg" alt="Project" />
            <a href="#" class="btn-light">
              <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
              <i class="fab fa-github fa-1x"></i> Github
            </a>
          </a>
        </div>
        <div class="item">
          <a href="#!">
            <img src="./projects/project3.jpg" alt="Project" />
            <a href="#" class="btn-light">
              <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
              <i class="fab fa-github fa-1x"></i> Github
            </a>
          </a>
        </div>
        <div class="item">
          <a href="#!">
            <img src="./projects/project4.jpg" alt="Project" />
            <a href="#" class="btn-light">
              <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
              <i class="fab fa-github fa-1x"></i> Github
            </a>
          </a>
        </div>
        <div class="item">
          <a href="#!">
            <img src="./projects/project5.jpg" alt="Project" />
            <a href="#" class="btn-light">
              <i class="fas fa-eye"></i> Project
            </a>
            <a href="#" class="btn-dark">
              <i class="fab fa-github fa-1x"></i> Github
            </a>
          </a>
        </div>
      </div>
      <div>
        <a
          href="#"
          class="btn-light call-to-action"
          @click="$emit('navigate', 'about')"
        >
          <i class="fas fa-arrow-alt-circle-right fa-2x"></i>
          <p>Come, see how I made it</p>
        </a>
      </div>
    </main>
    <footer id="main-footer">Copyright&copy; 2020</footer>
  </div>
</template>

<script src="./work.js" />
<style src="./work.css" />

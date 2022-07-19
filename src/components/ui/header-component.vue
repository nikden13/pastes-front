<template>
  <header>
    <div class="header-inner">
      <div class="header-logo">
        <a class="default-link" href="/">
          <strong>Pastes</strong>
        </a>
      </div>
      <div class="header-nav">
        <a class="default-link" href="/">Main</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-component',
}
</script>

<style>
header {
  background-color: #c6eac6;
}

.header-inner {
  display: flex;
  padding: 10px 0;
  align-items: center;
  margin-bottom: 50px;
}

.default-link {
  align-self: flex-start;
  padding: 5px 7px;
  cursor: pointer;
  font-size: 20px;
}

.header-nav {
  margin-right: auto;
  margin-left: 50px;
}

a, a:hover, a:active {
  text-decoration: none;
  color: inherit;
}

.header-nav .default-link:hover {
  color: green;
}
</style>
<template>
  <div id="app">
    <!-- Header with Navbar -->
    <header class="bg-gray-100 p-4">
      <div class="flex items-center justify-between">
        <!-- App Title -->
        <h1 class="text-xl font-bold text-blue-500">Book Library App</h1>

        <!-- Navbar Links -->
        <nav class="space-x-4">
          <router-link
            to="#"
            class="text-gray-700 hover:text-blue-500"
            active-class="text-blue-500 font-bold"
          >
            Home
          </router-link>
          <router-link
            to="#"
            class="text-gray-700 hover:text-blue-500"
            active-class="text-blue-500 font-bold"
          >
            About
          </router-link>
          <router-link
            to="#"
            class="text-gray-700 hover:text-blue-500"
            active-class="text-blue-500 font-bold"
          >
            Contact
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Optional styling for responsiveness */
header {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

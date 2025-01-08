<template>
  <div class="p-8">
    <!-- Back to Library Link -->
    <router-link to="/" class="text-blue-500 hover:underline mb-4 inline-block">
      &larr; Back to Library
    </router-link>

    <!-- Book Details -->
    <div
      class="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg lg:max-w-lg lg:p-8"
    >
      <h1 class="text-2xl font-bold mb-4 lg:text-3xl">{{ book.title }}</h1>
      <p class="text-md text-gray-500 mb-4 lg:text-lg">
        <strong>Author:</strong> {{ book.author }}
      </p>
      <p class="text-md lg:text-lg"><strong>ISBN:</strong> {{ book.isbn }}</p>
      <p class="text-md lg:text-lg">
        <strong>Price:</strong> ${{ book.price.toFixed(2) }}
      </p>
      <p class="text-md lg:text-lg">
        <strong>Stock:</strong> {{ book.availableStock }} available
      </p>

      <!-- Purchase Button -->
      <button
        class="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition lg:px-6 lg:py-3"
        @click="purchaseBook"
        :disabled="loading"
      >
        {{ loading ? "Processing..." : "Purchase" }}
      </button>

      <!-- Success Bubble -->
      <div
        v-if="successMessage"
        class="mt-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded"
      >
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetails",
  props: ["id"], // Accept the `id` from the route params
  data() {
    return {
      book: null, // Book details
      loading: false, // Loading state for the button
      successMessage: "", // Success message to show to the user
    };
  },
  async created() {
    try {
      const response = await fetch(`https://circle-server-1oo2.onrender.com/books/${this.id}`);
      const data = await response.json();
      this.book = data.book;
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  },
  methods: {
    async purchaseBook() {
      try {
        this.loading = true;
        const response = await fetch(
          `https://circle-server-1oo2.onrender.com/books/${this.id}/purchase`,
          {
            method: "POST",
          }
        );
        const result = await response.json();

        if (response.ok) {
          this.successMessage = "Purchase successful!";
          this.book.availableStock -= 1; // Update stock locally
        } else {
          this.successMessage = `Error: ${result.message}`;
        }
      } catch (error) {
        this.successMessage =
          "An error occurred during purchase. Please try again.";
        console.error("Purchase error:", error);
      } finally {
        this.loading = false;

        // Clear the success message after 3 seconds
        setTimeout(() => {
          this.successMessage = "";
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
/* Additional styling for button and success bubble */
button:disabled {
  cursor: not-allowed;
  background-color: #cbd5e0; /* Gray when disabled */
}
</style>

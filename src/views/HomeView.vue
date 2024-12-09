<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-8 text-center">Book Library</h1>
    <!-- Responsive Grid Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue' // Ensure this path is correct

export default {
  name: 'HomePage',
  components: {
    BookCard, // Register BookCard component
  },
  data() {
    return {
      books: [], // Array to hold book data
    }
  },
  async created() {
    try {
      const response = await fetch('http://localhost:8000/books') // Correct API endpoint
      const data = await response.json()
      this.books = data.books // Assign fetched books to the books array
    } catch (error) {
      console.error('Error fetching books:', error) // Log error if any
    }
  },
}
</script>

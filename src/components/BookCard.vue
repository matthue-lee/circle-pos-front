<template>
    <div class="max-w-[350px] bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 rounded-lg">
      <div class="flex gap-4">
        <div>
          <p class="text-lg font-bold">{{ book.title }}</p>
          <p class="text-sm text-gray-500">{{ book.author }}</p>
        </div>
      </div>
      <hr class="my-4" />
      <div>
        <p><strong>ISBN:</strong> {{ book.isbn }}</p>
        <p><strong>Price:</strong> ${{ book.price.toFixed(2) }}</p>
        <p><strong>Stock:</strong> {{ book.availableStock }} available</p>
      </div>
      <hr class="my-4" />
      <router-link
        :to="{ name: 'BookDetails', params: { id: book.id }}"
        class="text-blue-500 hover:underline"
      >
        Learn more about this book
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "BookCard",
    props: {
      book: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
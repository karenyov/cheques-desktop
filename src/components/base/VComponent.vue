<template>
    <section class="mb-12 text-center">
      <h1
        class="font-weight-light mb-2 headline"
        v-text="`${heading}`"
      />
  
      <span
        class="font-weight-light subtitle-1"
      >
      {{ subTitle }}
      </span>
    </section>
  </template>
  
  <script>
    export default {
      name: 'VComponent',
      props: {
        heading: {
          type: String,
          default: '',
        },
        subTitle: {
          type: String,
          default: '',
        },
      },
    }
  </script>
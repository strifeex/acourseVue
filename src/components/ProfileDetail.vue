<template>
  <div>
    <h4>Name:</h4>{{ profile.name | upper }}
    <h4>Decsciption:</h4>{{ profile.description }}
  </div>
</template>

<script>
  export default {
    props: ['profile']
  }
</script>
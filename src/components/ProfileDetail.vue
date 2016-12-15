<template>
  <div>
<<<<<<< HEAD
    <img class="ui circular image" :src="profile.photo" v-if="profile.photo">
=======
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
    <h4>Name:</h4>{{ profile.name | upper }}
    <h4>Decsciption:</h4>{{ profile.description }}
  </div>
</template>

<<<<<<< HEAD
<style>
  img.circular.image {
    width: 180px;
    height: 180px;
  }
</style>

=======
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
<script>
  export default {
    props: ['profile']
  }
</script>
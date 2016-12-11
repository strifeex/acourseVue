<template>
  <form class="ui form" @submit.prevent="save">
    <div class="filed">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="filed">
      <label>Description</label>
      <input v-model="description">
    </div>
    <button class="ui submit blue button">Save</button>
    <div class="ui red button" @click="$emit('cancel')">Cancel</div>
  </form>
</template>

<script>
  export default {
    props: ['value'],
    data: () => ({
      name: '',
      description: ''
    }),
    created () {
      this.name = this.value.name
      this.description = this.value.description
    },
    watch: {
      value () {
        this.name = this.value.name
        this.description = this.value.description
      }
    },
    methods: {
      save () {
        this.$emit('input', {
          name: this.name,
          description: this.description
        })
        this.$emit('save')
      }
    }
  }
</script>
<template>
  <form class="ui form" @submit.prevent="save">
<<<<<<< HEAD
    <div class="field">
      <label>Photo</label>
      <img v-if="photo" :src="photo" class="ui small circular image">
      <div @click="openUpload" class="ui green button">Select Photo</div>
    </div>
    <div class="field">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="field">
=======
    <div class="filed">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="filed">
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
      <label>Description</label>
      <input v-model="description">
    </div>
    <button class="ui submit blue button">Save</button>
    <div class="ui red button" @click="$emit('cancel')">Cancel</div>
<<<<<<< HEAD
    <upload-modal ref="upload" @success="uploaded"></upload-modal>
  </form>
</template>

<style scoped>
  img.circular.image {
    width: 120px;
    height: 120px;
  }
</style>

<script>
import UploadModal from './UploadModal'

export default {
  components: {
    UploadModal
  },
  props: ['value'],
  data: () => ({
    name: '',
    description: '',
    photo: ''
  }),
  created () {
    this.name = this.value.name
    this.description = this.value.description
    this.photo = this.value.photo
  },
  watch: {
    value () {
      this.name = this.value.name
      this.description = this.value.description
      this.photo = this.value.photo
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        description: this.description,
        photo: this.photo
      })
      this.$emit('save')
    },
    openUpload () {
      this.$refs.upload.open()
    },
    uploaded (url) {
      this.photo = url
    }
  }
}
=======
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
>>>>>>> db50455d5cbcf9c8efb60c516e5fac9e2381c908
</script>
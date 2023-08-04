<template>
    <div>
        <form>
            <input v-model="name"/>
        </form>
        <p>Hi. I am {{fullname}} and i am a {{skill}}</p>
    </div>
</template>
<script>
export default{
  name: 'Intro',
  data () {
    let dat = { fname: 'Solomon', lname: 'Akes', skill: 'Developer' }
    return dat
  },
  computed: {
    fullname: function () {
      return this.fname + ' ' + this.lname
    }
  }
}
</script>

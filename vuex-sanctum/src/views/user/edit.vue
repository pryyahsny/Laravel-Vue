<template>
  <div class="edit">
    <br/>
    <br/>
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Edit User
          </div>
          <div class="card-body">
            <div class="alert alert-danger" v-if="errors.length">
              <b>Terdapat kesalahan dalam input data:</b>
              <ul>
                <li v-for="error in errors" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
            <form @submit.prevent="updateUser">
              <div class="form-group">
                <label htmlfor="name">Name</label>
                <input type="text" class="form-control" v-model="user.name" id="name">
              </div>
              <div class="form-group">
                <label htmlfor="email">Email</label>
                <input type="text" class="form-control" v-model="user.email" id="email">
              </div>
              <div class="form-group">
                <label htmlfor="password">Password</label>
                <input type="text" class="form-control" v-model="user.password">
              </div>
              <div class="form-group">
                <router-link :to="{ name:'user' }" class="btn btn-secondary">
                  Back
                </router-link>
                &nbsp;
                &nbsp;
                <button class="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data(){
    return {
      user: {},
      errors: [],
      name: null,
      email: null,
      password: null,
    }
  },
  created() {
    let uri = `http://localhost:8000/api/user/edit/${this.$route.params.id}`;
    this.axios.get(uri).then((response) => {
      this.user.response.data;
    });
  },

  methods: {
    updateUser(e){

      if (this.$data.user.title != null && this.$data.article.content != null){
        this.$swal.fire({
          title: 'Success',
          text: "User created successfully",
          icon: 'success',
          timer: 1000
        });

        let uri = `http://localhost:8000/api/user/update/${this.$route.params.id}`;
        this.axios.put(uri, this.user).then((response) => {
          this.$router.push({name: 'user'});
        });
        return true;
      }
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name wajib diisi !');
      }
      if (!this.email) {
        this.errors.push('Email Wajib diisi !');
      }

      e.preventDefault();
    }
  }
}
</script>

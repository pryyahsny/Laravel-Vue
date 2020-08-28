<template>
<div class="create">
  <br/>
  <br/>
     <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Create User</div>
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form @submit.prevent="createUser">
                            <div class="form-group">
                                <label htmlfor="name">Name</label>
                                <input type="text" class="form-control" id="name" v-model="user.name">
                            </div>
                            <div class="form-group">
                                <label htmlfor="email">Email</label>
                                <input type="text" class="form-control" id="email" v-model="user.email">
                            </div>
                            <div class="form-group">
                                <label htmlfor="password">Password</label>
                                <input type="text" class="form-control" id="password" v-model="user.password">
                            </div>
                            <div class="form-group">
                                <router-link :to="{ name:'user' }" class="btn btn-secondary">Back</router-link>
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
    name: 'create',
   data(){
        return{
            user:{},
            errors: [],
            name: null,
            email: null,
        }
    },

    methods: {
        createUser(e){

            if(this.$data.user.name != null && this.$data.user.email != null && this.$data.user.password != null){
                this.$swal.fire({
                    title: 'Success',
                    text: "user created successfully",
                    icon: 'success',
                    timer: 1000
                })
                let uri = 'http://localhost:8000/api/user/store';
                this.axios.post(uri, this.user).then((response) => {
                    this.$router.push({name: 'user'});
                });
                return true;

            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name wajib diisi !');
            }
            if (!this.email) {
                this.errors.push('Email wajib diisi !');
            }
            if (!this.password) {
              this.errors.push('Password wajib diisi');
            }

            e.preventDefault();
        }
    }


}
</script>

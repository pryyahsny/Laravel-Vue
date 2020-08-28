<template>
<div class="user">
  <br/>
  <br/>
      <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">All User</div>
                    <div class="card-body">
                        <router-link :to="{ name: 'create' }" class="btn btn-primary">Create new user</router-link>
                        <br/>
                        <br/>
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th width="50" class="text-center">No</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th width="200" class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in users" :key="user.id">
                                        <td width="50" class="text-center">{{ index + 1 }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.email }}</td>
                                        <td width="200" class="text-center">
                                            <div class="btn-group">
                                                <router-link :to="{ name: 'show', params: {id:user.id}}" class="btn btn-primary">
                                                    Detail
                                                </router-link>
                                                <router-link :to="{ name: 'edit', params: { id:user.id}}" class="btn btn-success">
                                                    Edit
                                                </router-link>
                                                <button class="btn btn-danger" @click="deletePost(user.id)">Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <router-link :to="{ name: 'dashboard' }" class="btn btn-warning">Back</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
export default {
    name: 'user',
    data() {
      return {
        users: []
      }
    },
    created() {
      let uri = 'http://localhost:8000/api/users';
      this.axios.get(uri).then(response => {
        this.users = response.data;
      })
    },
    methods: {
      deletePost(id)
      {
        this.$swal.fire({
          title: 'Apakah kamu yakin?',
          text: "Jika kamu hapus, maka data tida akan kembali lagi.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Hapus Deh',
          cancelButtonText: 'Nggak Jadi'
        }).then((result) => {
          if (result.value) {
            this.$swal.fire({
              title: 'Success',
              text: 'Article deleted successfully',
              icon: 'success',
              timer: 1000
            });

            let uri = `http://localhost:8000/api/user/delete/${id}`;
            this.axios.delete(uri).then(response => {
              this.users.splice(this.users.indexOf(id), 1);
            });
            console.log("Deleted user with id ..." + id);


          }
        })
      }
    }
}
</script>

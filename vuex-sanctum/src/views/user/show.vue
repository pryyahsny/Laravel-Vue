<template>
  <div class="show">
    <br/>
    <br/>
    <div class='container py-4'>
        <div class='row justify-content-center'>
            <div class='col-md-6'>
                <div class='card'>
                    <div class='card-header'>Detail User</div>
                    <div class='card-body'>
                        <div class='form-group'>
                            <label htmlFor='name'>name</label>
                            <input type="text" class="form-control" id="name" v-model="user.name" disabled>
                        </div>
                       <div class='form-group'>
                            <label htmlFor='email'>email</label>
                            <input type="text" class="form-control" id="email" v-model="user.email" disabled>
                        </div>

                        <div class='form-group'>
                            <router-link :to="{ name: 'user' }" class="btn btn-secondary">Back</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show',
  data(){
        return {
            user:{},
        }
    },
    created() {
        let uri = `http://localhost:8000/api/user/show/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.user = response.data;
        });
    },
    method: {

    }
}
</script>

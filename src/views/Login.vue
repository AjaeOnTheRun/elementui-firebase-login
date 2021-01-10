<template>
  <div>
    <h3>Please Login</h3>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-form :model="form" ref="form" label-width="80px" size="normal">
          <el-form-item label="Email">
            <el-input
              v-model="email"
              placeholder="Please enter your email"
              size="normal"
            ></el-input>
          </el-form-item>

          <el-form-item label="Password">
            <el-input
              v-model="password"
              placeholder="Please enter your password"
              size="normal"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="tryLogin">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <p>Need an account? <router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    tryLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.data);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style></style>

<template>
  <div class="flex justify-center items-center h-full bgLogin bg-secondary">
    <div
      class="glass container-card xl:w-3/12 md:w-3/5 sm:w-4/5 w-11/12 flex justify-start flex-col items-center h-3/5"
    >
      <div>
        <h1 class="text-secondary font-bold text-3xl py-10" title="">
          Agent Login
        </h1>
        <h2 class="text-dark text-xl font-bold px-10 text-start">
          Hey, Enter in your google account to get sign in to your account.
        </h2>
      </div>
      <div class="w-full p-10 mt-32 bg">
        <a :href="getGoogleUrl()" class="auth-btn google-auth">
          <img src="../assets/google.svg" alt="Google Logo" />
          <span>Google</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    getGoogleUrl() {
      const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
      const options = {
        redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT,
        client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
          "https://www.googleapis.com/auth/userinfo.profile",
          "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),
        state: "/",
      };
      const qs = new URLSearchParams(options);
      return `${rootUrl}?${qs.toString()}`;
    },
  },
  mounted() {
    if (this.$route.query.token) {
      document.cookie = `access_token=${this.$route.query.token}`;
      location.reload();
    }
  },
};
</script>
<style>
.bgLogin {
  background: url("./../assets/background.png") no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.glass {
  /* From https://css.glass */
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
}
.auth-btn {
  background-color: #fff;
  border-radius: 5px;
  padding: 0.6rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border: 1px solid #e7e4e4;
}

.auth-btn img {
  height: 2rem;
  margin-right: 1rem;
}
.auth-btn span {
  font-size: 1.2 rem;
  font-weight: bold;
}

.auth-btn:hover {
  box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
}

.auth-btn.google-auth {
  margin-bottom: 1.5rem;
}
</style>

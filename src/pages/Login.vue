<template>
  <div class="flex justify-center items-center h-full">
    <div
      class="glass xl:w-2/5 md:w-3/5 sm:w-4/5 w-11/12 items-center flex justify-center flex-col items-center h-3/5"
    >
      <h1 class="text-black font-bold text-3xl py-5" title="">Login</h1>
      <h2 class="text-black text-xl">With social media account</h2>
      <div class="xl:w-3/5 md:w-3/5 sm:w-11/12 w-full p-10">
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
.social-auth {
  max-width: 27rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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

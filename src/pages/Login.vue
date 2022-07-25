<template>
  <div class="container">
    <div class="social-auth">
      <!-- Google OAuth -->
      <a :href="getGoogleUrl()" class="auth-btn google-auth">
        <img src="../assets/google.svg" alt="Google Logo" />
        <span>Google</span>
      </a>
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
    
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: Roboto, sans-serif;
  color: #222;
  font-size: 1.6rem;
}

.container {
  background-color: #2363eb;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-auth {
  max-width: 27rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
}

.auth-btn img {
  height: 4rem;
  margin-right: 1rem;
}
.auth-btn span {
  font-size: 1.8rem;
}

.auth-btn:hover {
  box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
}

.auth-btn.google-auth {
  margin-bottom: 1.5rem;
}
</style>

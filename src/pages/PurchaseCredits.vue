<template>
  <section class="container w-full h-full flex justify-center items-center flex-col">
    <div class="bg-white p-20 rounded-xl">
      <h5 class="text-primary font-semibold text-xl">
        Buy Credits with your Credit Card
      </h5>
      <p class="w-96 text-center font-medium text-sm">
        Payment management system with stripe, feel safe to put your credentials, any
        inconvenience contact our customer service means.
      </p>

      <div id="card-errors" role="alert">{{ stripeValidationError }}</div>
      <div class="mt-4 mb-4 grid justify-items-center">
        <form action="" method="post" class="w-72 sm:w-96 space-y-2">
          <div class="w-full border p-2 rounded bg-gray-300">
            <p>{{ user?.Email }}</p>
          </div>
          <select
            name="amount"
            id="amount"
            v-model="amount"
            class="w-full border-secondary border-2 rounded p-2"
          >
            <option value="1">$1</option>
            <option value="10">$10</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
          </select>
          <div class="grid grid-cols-5 w-full gap-3">
            <div
              id="card-number-element"
              class="col-span-3 w-auto border p-2.5 rounded"
            ></div>
            <div id="card-expiry-element" class="w-auto border p-2.5 rounded"></div>
            <div id="card-cvc-element" class="w-auto border p-2.5 rounded"></div>
          </div>
        </form>
        <button
          @click="placeOrderButtonPressed"
          type="submit"
          v-if="!paymentInProcess"
          class="bg-primary p-2.5 text-white rounded-md mt-2 w-72 sm:w-96"
        >
          Pay
        </button>

        <button
          class="bg-slate-500 p-2.5 text-white rounded-md mt-2 w-72 sm:w-96"
          v-if="paymentInProcess"
          disabled
        >
          Pay
        </button>

        <div id="card-element">
          <!-- a Stripe Element will be inserted here. -->
        </div>
        <div class="mt-5" unselectable="on">
          <p
            class="font-medium text-sm flex justify-center items-center gap-1 text-gray-400"
          >
            Powered by <span class="font-extrabold text-xl text-indigo-700">Stripe</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store/store.js";
import axios from "axios";

export default {
  data() {
    return {
      stripe: null,
      cardNumberElement: "",
      cardExpiryElement: "",
      cardCVCElement: "",
      stripeValidationError: "",
      amount: 1,
      email: "",
      paymentInProcess: false,
    };
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51JOntcEfH9uxRed0Ub3SSHIzOmVbCoOAqzunKRvcBZ2e438IJAgKpqJBrS8E18Shag1Bo6zk6VzxUvb7Jd9U5tS300u8agDyCp"
    );
    this.createAndMountFormElements();
  },
  methods: {
    createAndMountFormElements() {
      var elements = this.stripe.elements();

      this.cardNumberElement = elements.create("cardNumber");
      this.cardNumberElement.mount("#card-number-element");

      this.cardExpiryElement = elements.create("cardExpiry");
      this.cardExpiryElement.mount("#card-expiry-element");

      this.cardCvcElement = elements.create("cardCvc");
      this.cardCvcElement.mount("#card-cvc-element");

      this.cardNumberElement.on("change", this.setValidationError);
      this.cardExpiryElement.on("change", this.setValidationError);
      this.cardCvcElement.on("change", this.setValidationError);
    },

    setValidationError(event) {
      this.stripeValidationError = event.error ? event.error.message : "";
    },
    placeOrderButtonPressed() {
      if (this.user.Email) {
        this.stripe.createToken(this.cardNumberElement).then((result) => {
          if (result.error) {
            this.stripeValidationError = result.error.message;
          } else {
            var stripeObject = {
              Amount: this.amount,
              Email: this.user.Email,
              Token: result.token.id,
            };
            this.payRequest(stripeObject);
            this.paymentInProcess = true;
          }
        });
      }
    },
    async payRequest(stripeObject) {
      try {
        axios
          .post("http://localhost:8080/gilito/transaction/create", {
            ...stripeObject,
          })
          .then((result) => {
            console.log(result.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    user() {
      return store.getters.user();
    },
  },
};
</script>

<style>
.payment-form {
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #ececec;
}

.payment-form h5 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}

.card-element {
  margin-top: 5px;
}

#card-number-element,
#card-expiry-element,
#card-cvc-element {
  background: white;
  padding: 5px;
  border: 1px solid #ececec;
  height: 30px;
}

.place-order-button-block {
  margin: 10px 0;
}
</style>

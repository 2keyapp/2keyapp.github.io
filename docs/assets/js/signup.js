(function () {
  var STRIPE_SETUP_URL = "https://buy.stripe.com/PLACEHOLDER";
  var PAYPAL_SETUP_URL = "https://www.paypal.com/ncp/payments/PLACEHOLDER";

  var form = document.getElementById("merchant-signup-form");
  var payStripe = document.getElementById("pay-stripe");
  var payPaypal = document.getElementById("pay-paypal");

  if (!form || !payStripe || !payPaypal) return;

  function getValues() {
    return {
      businessName: (form.elements.business_name && form.elements.business_name.value) || "",
      email: (form.elements.email && form.elements.email.value) || "",
      contactName: (form.elements.contact_name && form.elements.contact_name.value) || "",
    };
  }

  function isFormValid() {
    return form.checkValidity();
  }

  function updatePayButtons() {
    var valid = isFormValid();
    payStripe.disabled = !valid;
    payPaypal.disabled = !valid;
  }

  function buildStripeUrl(email, businessName, contactName) {
    var url = new URL(STRIPE_SETUP_URL);
    url.searchParams.set("prefilled_email", email.trim());
    var ref = businessName.trim();
    if (contactName.trim()) {
      ref = ref + " | " + contactName.trim();
    }
    if (ref) {
      url.searchParams.set("client_reference_id", ref.slice(0, 200));
    }
    return url.toString();
  }

  function buildPayPalUrl(email, businessName) {
    var url = new URL(PAYPAL_SETUP_URL);
    url.searchParams.set("email", email.trim());
    if (businessName.trim()) {
      url.searchParams.set("business", businessName.trim().slice(0, 100));
    }
    return url.toString();
  }

  function redirectToPayment(buildUrl) {
    if (!form.reportValidity()) return;
    var values = getValues();
    window.location.href = buildUrl(
      values.email,
      values.businessName,
      values.contactName
    );
  }

  form.addEventListener("input", updatePayButtons);
  form.addEventListener("change", updatePayButtons);

  payStripe.addEventListener("click", function () {
    var values = getValues();
    redirectToPayment(function (email, businessName, contactName) {
      return buildStripeUrl(email, businessName, contactName);
    });
  });

  payPaypal.addEventListener("click", function () {
    var values = getValues();
    redirectToPayment(function (email, businessName) {
      return buildPayPalUrl(email, businessName);
    });
  });

  updatePayButtons();
})();

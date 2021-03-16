// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    $("form[name='productForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        title: "required",
        ean: {
            required: true,
            number: true,
            minlength: 13
        },
        description: "required",
        price: {
            required: true,
            number: true,
            min: 0
        },
        stock: {
            required: true,
            number: true,
            min: 0
        },
      },
      // Specify validation error messages
      messages: {
        title: "Please add a product name",
        ean: "Please add a string of 13 digits",
        description: "Please add a product description",
        price: {
            required: "Please add a price",
            min: "Price can't be lower than 0"
        },
        stock: {
            required: "Please add the stock",
            min: "Stock can't be lower than 0"
        }
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
});


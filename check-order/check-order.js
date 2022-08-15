const handleSubmit = () => {
  if (!$("#body_ordNum").val()) {
    $("#warning_ordNum").html(`
        <p>Please Enter Your Order Number</p>
        `);
  } else {
    $("#warning_ordNum").html(``);
  }
  if (!$("#body_email").val()) {
    $("#warning_email").html(`
        <p>Please Enter Your Email</p>
        `);
  } else {
    $("#warning_email").html(`
    `);
  }
};
clearWarning = () => {
  if (!$("#body_ordNum").val()) {
    $("#warning_ordNum").html(`
            <p>Please Enter Your Order Number</p>
            `);
  } else {
    $("#warning_ordNum").html(``);
  }
  if (!$("#body_email").val()) {
    $("#warning_email").html(`
        <p>Please Enter Your Email</p>
        `);
  } else {
    $("#warning_email").html(`
    `);
  }
};

exports.ContactHtml = (
    fname,
    lname,
    email,
    telephone,
    comment
  ) => {
    return `     <div
        class="container p-5 bg-dark text-white"
        style="background-color:black;color: white;padding: 50px; text-align: justify;line-height: 25px;"
      >
        <span style="font-weight:700; color:orange;">
          First Name:
          <span style="font-weight:500; color:white;">${fname}</span>
        </span>
        <br />
        <span style="font-weight:700; color:orange;">
          Last Name:
          <span style="font-weight:500; color:white;">${lname}</span>
        </span>
        <br />
        <span style="font-weight:700; color:orange;">
          Email:
          <span style="font-weight:500; color:white;">${email}</span>
        </span>
        <br />
        <span style="font-weight:700; color:orange;">
          Telephone:
          <span style="font-weight:500; color:white;">${email}</span>
        </span>
        <br />
        <span style="font-weight:700; color:orange;">
          Comments:
          <span style="font-weight:500; color:white;"
            >${comment}</span
          >
        </span>
        <br />
      </div>`;
  };
  

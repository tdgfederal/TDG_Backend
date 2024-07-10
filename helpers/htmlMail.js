exports.htmlMail = (
  fname,
  lname,
  phone,
  email,
  dob,
  time,
  mode,
  reason,
  question,
  hear,
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
        Phone Number:
        <span style="font-weight:500; color:white;">${phone}</span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        Email:
        <span style="font-weight:500; color:white;">${email}</span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        DOB:
        <span style="font-weight:500; color:white;">${dob}</span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        Time:
        <span style="font-weight:500; color:white;">${time}</span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        Mode:
        <span style="font-weight:500; color:white;">${mode}</span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        Description:
        <span style="font-weight:500; color:white;">
          ${reason}
        </span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        Specific Questions or Topics:
        <span style="font-weight:500; color:white;">
          ${question}
        </span>
      </span>
      <br />
      <span style="font-weight:700; color:orange;">
        How did you hear about us:
        <span style="font-weight:500; color:white;"
          >${hear}</span
        >
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

import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: String(process.env.USER),
        pass: String(process.env.PASS),
      },
    });

    // console.log(process.env.USER);
    // console.log(process.env.PASS);

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully");
  } catch (err) {
    console.log("email not sent!");
    console.log(err);
    return err;
  }
};

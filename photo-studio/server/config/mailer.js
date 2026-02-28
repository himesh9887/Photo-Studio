import nodemailer from "nodemailer";

let transporter;

async function getTransporter() {
  if (transporter) return transporter;
  if (process.env.SMTP_HOST) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    return transporter;
  }

  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
  return transporter;
}

export async function sendBookingConfirmation(booking) {
  const mailer = await getTransporter();
  const info = await mailer.sendMail({
    from: process.env.MAIL_FROM || "studio@lumiere.com",
    to: booking.customerEmail,
    subject: "Your booking is confirmed",
    text: `Hi ${booking.customerName}, your ${booking.packageName} booking is confirmed for ${new Date(
      booking.eventDate,
    ).toDateString()}.`,
  });
  const preview = nodemailer.getTestMessageUrl(info);
  if (preview) {
    console.log("Preview email:", preview);
  }
}

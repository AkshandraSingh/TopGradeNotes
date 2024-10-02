const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
    }
});

const forgetPassword = async (userName, token, userEmail) => {
    await transporter.sendMail({
        from: `"TopGradeNotes" <${process.env.SENDER_EMAIL}>`,
        to: userEmail,
        subject: "Reset Password - TopGrade Notes",
        html: `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link
                    href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Roboto+Slab:wght@100..900&display=swap"
                    rel="stylesheet">
                <style>
                    h1 {
                        font-size: 2rem;
                        text-align: center;
                        font-family: "Roboto Slab", serif;
                        font-optical-sizing: auto;
                        font-style: normal;
                    }

                    #userName {
                        text-align: center;
                        font-weight: bold;
                    }

                    p {
                        margin: 32px;
                        font-family: "Afacad Flux", sans-serif;
                        font-optical-sizing: auto;
                        font-style: normal;
                        font-variation-settings:
                            "slnt" 0;
                        font-size: 16px;
                    }
                </style>
                <title>Forget Password Email</title>
            </head>

            <body>
                <h1>From Top Grade Notes 👀</h1>
                <p id="userName">Hello ${userName},</p>
                <p>We heard you've forgotten your password. No worries, just click the link below to reset it.</p>
                <p>Click to reset your account password : <a href="https://topgradenotes.com/reset-password/${token}">Forget
                        Password</a></p>
                <p>If you didn't make this request, please ignore this email. Your password won't change until you click the link
                    above.</p>
            </body>

            </html>
        `
    })
}

module.exports = { forgetPassword };

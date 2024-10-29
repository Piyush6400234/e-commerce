import {
  generatePasswordResetEmailHtml,
  generateResetSuccessEmailHtml,
  generateWelcomeEmailHtml,
  htmlContent,
} from "./htmlEmail";
import { client, sender } from "./mailtrap";

export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const recipients = [
    {
      email: email,
    },
  ];

  try {
    const res = await client.send({
      from: sender,
      to: recipients,
      subject: "verify your email",
      html: htmlContent.replace("{verificationToken}", verificationToken),
      category: "Email Verification",
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send verification email");
  }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
  const recipients = [
    {
      email: email,
    },
  ];
  const htmlContent = generateWelcomeEmailHtml(name);

  try {
    const res = await client.send({
      from: sender,
      to: recipients,
      subject: "Welcome to International Eats",
      html: htmlContent,
      template_variables: {
        company_info_name: "International Eats",
        name: name,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send Welcome email");
  }
};

export const sendPasswordResetEmail = async (
  email: string,
  resetURL: string
) => {
  const recipients = [
    {
      email: email,
    },
  ];
  const htmlContent = generatePasswordResetEmailHtml(resetURL);
  try {
    const res = await client.send({
      from: sender,
      to: recipients,
      subject: "reset your password",
      html: htmlContent,
      category: "reset password",
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to reset password");
  }
};
export const sendResetSuccessEmail = async (email: string) => {
  const recipients = [
    {
      email: email,
    },
  ];
  const htmlContent = generateResetSuccessEmailHtml();
  try {
    const res = await client.send({
      from: sender,
      to: recipients,
      subject: "Password reset successfully",
      html: htmlContent,
      category: "password reset",
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send password reset success email");
  }
};

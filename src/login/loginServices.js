export function authenticate({ email, password }) {
  if (
    ["jucse28.381@gmail.com", "tazimtisha123@gmail.com"].includes(email) &&
    password === "123"
  ) {
    return {
      message: "loginSucessful",
    };
  }
  throw new Error("Invalid credential");
}

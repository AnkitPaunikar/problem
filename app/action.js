"use server";

export default async function getPincodeData(pincode) {
  try {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const details = await response.json();

    return details;
  } catch (error) {
    console.error(error);
  }
}

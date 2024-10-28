"use client";
import { useState } from "react";
import getPincodeData from "./action";

export default function Home() {
  const [pincode, setPincode] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await getPincodeData(pincode);
      setData(result);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      setData(null);
    }
  };

  return (
    <div>
      <h1>Pincode Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='pincode'
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder='Enter pincode'
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

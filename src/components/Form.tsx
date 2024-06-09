"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [searchInput, setSearchInput] = useState("");
  const [prevSearchInput, setPrevSearchInput] = useState("");
  const [prevSearchStatus, setPrevSearchStatus] = useState("");
  const [prevSearchedAt, setPrevSearchedAt] = useState("");

  const handleSearchSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(searchInput);

    if (searchInput) { // ada isinya
      setPrevSearchInput(searchInput);
      try {
        const res = await fetch(`/api`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Y3Q1d0lsMkpPZTh0S3Z6WVJ3UmpqNGMxNTRTck9oZHR6SDM1T1V1OWg4T3pHVTVJ',
          },
          body: JSON.stringify({ search_input: searchInput }),
        });
        const data = await res.json();
        console.log(data);
        setPrevSearchStatus(data.status);
        setPrevSearchedAt(data.createdAt);
      } catch (error) {
        console.error('Error:', error);
      }
      setSearchInput(""); // reset placeholder
    } else {
     toast.error("Search input must have value!"); 
    }
  }
  return (
    <div>
      <form>
        <label>Search Input:</label>
        <br></br>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="New capital city of Indonesia"
        />
        <button onClick={handleSearchSubmit} >
          Submit
        </button>
      </form>
      <div>
        <p>Previous input: <span>{prevSearchInput}</span></p>
        <p>Previous search status: <span>{prevSearchStatus}</span></p>
        <p>Previous searched at: <span>{prevSearchedAt}</span></p>
      </div>
    </div>
  );
}
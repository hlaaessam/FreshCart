import React, { useEffect, useState } from "react";

export default function useNetwork() {
  let [isOnline, setOnline] = useState(true);

  function detectOnline() {
    window.addEventListener("online", function () {
      setOnline(true);
    });

    window.addEventListener("offline", function () {
      setOnline(false);
    });
  }

  useEffect(() => {
    detectOnline();
  }, []);

  return (
    <>
      {!isOnline ? (
        <div className="offline p-2 rounded">
          <i className="fas fa-wifi px-1"></i>
          You're Offline
        </div>
      ) : (
        ""
      )}
    </>
  );
}

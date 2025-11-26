import { useEffect, useState } from "react";

export default function TokenvalidationChek(token) {
  const [isValid, setIsValid] = useState(false);
  const [expiryTime, setExpiryTime] = useState(null);

  useEffect(() => {
    if (!token) {
      setIsValid(false);
      setExpiryTime(null);
      return;
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      setIsValid(false);
      setExpiryTime(null);
      return;
    }

    try {
      const payload = JSON.parse(atob(parts[1]));

      if (payload.exp) {
        const expDate = new Date(payload.exp * 1000);
        setExpiryTime(expDate.toLocaleString());
      }

      const now = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < now) {
        setIsValid(false); // expired
      } else {
        setIsValid(true); // valid
      }
    } catch {
      setIsValid(false);
      setExpiryTime(null);
    }
  }, [token]);

  return { isValid, expiryTime };
}

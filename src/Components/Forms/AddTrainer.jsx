import React from "react";
import { useSearchParams } from "react-router-dom";
import UnauthorizedPage from "../../Pages/UnauthorizedPage";
import TokenvalidationChek from "../../Services/TokenvalidationChek";
function AddTrainer() {
  const [params] = useSearchParams();
  const token = params.get("token");

  const { isValid, expiryTime } = TokenvalidationChek(token);
  console.log("Token valid :- ", isValid);

  if (!isValid) {
    return <UnauthorizedPage />;
  }

  return (
    <div className="mt-5">
      <h2 className="text-green-600 font-bold text-xl">Token Valid ✅</h2>
      <span className="text-black text-sm">Expiry Time: {expiryTime}</span>
      <div className="text-black mt-3">Render your Add Trainer Form Here 🚀</div>
    </div>
  );
}

export default AddTrainer;

"use client";

import { zuAuthPopup } from "@pcd/zuauth";
import { useState } from "react";
import { watermark, config } from "./config";

export default function Page() {
  const [pcdData, setPcdData] = useState<string | null>(null);

  const handleZupass = async () => {
    const result = await zuAuthPopup({
      fieldsToReveal: {
        revealAttendeeEmail: true,
        revealAttendeeName: true,
        revealEventId: true,
        revealProductId: true
      },
      watermark,
      config,
      returnUrl: window.location.href
    });
    
    if (result.type === "pcd") {
      try {
        console.log("Got PCD data: ", result.pcdStr);
        setPcdData(result.pcdStr);
      } catch (e) {
        console.log("Authentication failed: ", e);
      }
    }
  }

  return (
    <div>
      <button onClick={handleZupass}>Zupass</button>
      {pcdData && (
        <div className="mt-4">
          <h2>PCD Data:</h2>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(JSON.parse(pcdData), null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}


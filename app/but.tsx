"use client";

export function ClientComponent() {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
    >
      Test Client Component
    </button>
  );
}

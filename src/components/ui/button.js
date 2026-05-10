// src/components/ui/button.js
import React from 'react';

export default function Button(text) {
  return (
    <div>
      <button>{text.text}</button>
    </div>
  );
}
import React from 'react';

export default function Footer() {
  const styles = {
    footerp: {
      color: "grey"
    }
  }
  return (
    <div>
      <p style={styles.footerp}>&copy; 2026 React 17 (SystemJS). All Rights reserved.</p>
    </div>
  );
}
// Logo.jsx
import React from 'react';

const Logo = ({ width = '100px', height = 'auto' }) => (
  <img 
    src="/light.png"  // Replace with the correct path to your logo image
    alt="Logo"
    width={width}     // Set the fixed width here
    height={height}   // Maintain aspect ratio by setting height to 'auto' or a fixed value
    style={{
      display: 'block', 
      maxWidth: width, // Ensures the image doesn't exceed the specified width
      maxHeight: height, // Ensures the image doesn't exceed the specified height (if provided)
    }}
  />
);

export default Logo;

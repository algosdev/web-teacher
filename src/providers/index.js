import React from 'react';
import FirebaseProvider from './firebase/FirebaseProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Providers({ children }) {
  return (
    <FirebaseProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </FirebaseProvider>
  );
}

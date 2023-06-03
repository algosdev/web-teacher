import React from 'react';
import FirebaseProvider from './firebase/FirebaseProvider';
import { ParallaxProvider } from 'react-scroll-parallax';
import ToasterProvider from './toaster';

export default function Providers({ children }) {
  return (
    <FirebaseProvider>
      <ToasterProvider />
      <ParallaxProvider>{children}</ParallaxProvider>
    </FirebaseProvider>
  );
}

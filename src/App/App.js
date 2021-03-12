import React from 'react'
import { FunctionContextComponent } from '../FunctionContextComponent/FunctionContextComponent'
import { LayoutProvider } from '../LayoutProvider'

export default function App() {
  return (
    <LayoutProvider>
      <FunctionContextComponent />
    </LayoutProvider>
  );
}


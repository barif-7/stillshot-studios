import React from 'react'
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  default: ({ fill, priority, placeholder, blurDataURL, unoptimized, ...props }: any) => React.createElement('img', props),
}))

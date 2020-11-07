import * as React from 'react';

export default ({ children }) => {
  return (
    <main className="flex-auto relative border-t border-gray-200 dark:border-gray-800">
      { children }
    </main>
  )
}

import * as React from 'react';

export default function Home() {
  React.useEffect(() => {
    window.location.href = 'components/button/';
  }, []);

  return <div />;
}

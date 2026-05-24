// app/page.tsx
import HomePage from './(website)/page';
import WebsiteLayout from './(website)/layout';

export default function RootPage() {
  return (
    <WebsiteLayout>
      <HomePage />
    </WebsiteLayout>
  );
}
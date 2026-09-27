import { getApiBaseUrl } from './config';
import { greet } from './greet';
import { Button } from './ui/Button';
import { Page } from './ui/Page';

export function App() {
  const apiBaseUrl = getApiBaseUrl();

  return (
    <Page title={greet('${{ values.name }}')}>
      <p>{'${{ values.description }}'}</p>
      <p>
        API base URL:{' '}
        <span>{apiBaseUrl === '' ? 'not configured' : apiBaseUrl}</span>
      </p>
      <Button>Primary</Button>
    </Page>
  );
}

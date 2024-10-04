import App from './App.svelte';
import './index.css';
import { getAuthorizationToken, userData } from '@store/auth';

let creds = getAuthorizationToken();
if (creds) {
  userData.set(creds);
}

const app = new App({
  target: document.body,
});

export default app;

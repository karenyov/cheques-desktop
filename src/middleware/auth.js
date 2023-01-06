export default function auth({ next, router }) {
    if (!localStorage.getItem('auth')) {
      return router.push({ name: 'login' });
    }
    return next();
}


export function isAuthStorage() {
  if (!localStorage.getItem('auth')) {
    return false;
  }
  return true;
}

export function getAuthStorage() {
  if (localStorage.getItem('auth')) {
    return localStorage.getItem('auth');
  }
  return null;
}
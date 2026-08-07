export const navItems = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'credentials', path: '/credentials' },
  { name: 'contact', path: '/contact' },
];

export const isActive = (path: string, pathname: string) => {
  if (path === '/' && pathname !== '/') return false;
  if (path !== '/' && pathname.startsWith(path)) return true;
  if (path === '/' && pathname === '/') return true;
  return false;
};

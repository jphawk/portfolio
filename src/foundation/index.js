export const isBrowser = () => typeof(window) !== 'undefined';
export const slug = () => isBrowser() && (window.location.pathname);
export const workSlug = () => slug().split("/").pop();

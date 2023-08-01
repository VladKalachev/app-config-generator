declare global {
  interface Window { api: any; }
}

declare module '*.tsx' {
  interface Window { api: any; }
}

declare module '*.ts' {
  interface Window { api: any; }
}
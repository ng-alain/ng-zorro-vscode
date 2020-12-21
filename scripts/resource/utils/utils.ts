export function deepCopy(obj: any): any {
  return JSON.parse(JSON.stringify(obj) || 'null') || null;
}

export function clearHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

export function deepCopy(obj: any): any {
  return JSON.parse(JSON.stringify(obj) || 'null') || null;
}

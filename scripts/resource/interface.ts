export interface FixType {
  forceInputType: {
    twoBinding: string[];
    input: string[];
    output: string[];
  };
  extraProperty: { [key: string]: any };
  extraComponents: { [key: string]: any };
  typeDefinition: { [key: string]: any };
  snippet: { [key: string]: string | Record<string, string> };
  selfClosingTag: string[];
}

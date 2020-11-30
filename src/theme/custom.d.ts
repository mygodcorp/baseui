declare module '@styled-system/css' {
  const css: any;
  export default css;
}

interface SvgrComponent extends React.FC<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const value: SvgrComponent;
  export default value;
}

/**
 * 组件 API props
 * doc: https://github.com/YousefED/typescript-json-schema/blob/master/api.md
 */
export interface ComponentProps {
  /**
   * the show text
   */
  text?: string;
  /**
   * the show number
   */
  number?: number;
  /**
   * the data get in the node ssr
   */
  ssrText?: string;
}

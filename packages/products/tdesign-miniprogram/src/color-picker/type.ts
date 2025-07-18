/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PopupProps } from '../popup/index';

export interface TdColorPickerProps {
  /**
   * 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible
   * @default true
   */
  autoClose?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 颜色模式选择。同时支持单色和渐变两种模式，可仅使用单色或者渐变其中一种模式，也可以同时使用。`monochrome` 表示单色，`linear-gradient` 表示渐变色
   * @default "monochrome"
   */
  colorModes?: {
    type: null;
    value?: colorModesEnum | colorModesEnum[];
  };
  /**
   * 是否开启透明通道
   * @default false
   */
  enableAlpha?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否允许开启通过点击渐变轴增加渐变梯度，默认开启，关闭时只会存在起始和结束两个颜色
   * @default true
   */
  enableMultipleGradient?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 如果 color-picker 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true
   * @default false
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 格式化色值。`enableAlpha` 为真时，`HEX8/RGBA/HSLA/HSVA` 有效
   * @default RGB
   */
  format?: {
    type: StringConstructor;
    value?: 'HEX' | 'HEX8' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA' | 'HSV' | 'HSVA' | 'CMYK' | 'CSS';
  };
  /**
   * 透传 Popup 组件全部属性
   * @default {}
   */
  popupProps?: {
    type: ObjectConstructor;
    value?: PopupProps;
  };
  /**
   * 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色
   */
  swatchColors?: {
    type: ArrayConstructor;
    value?: Array<string> | null | undefined;
  };
  /**
   * 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容
   * @default base
   */
  type?: {
    type: StringConstructor;
    value?: TypeEnum;
  };
  /**
   * 是否使用弹出层包裹颜色选择器
   * @default false
   */
  usePopup?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 色值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 色值，非受控属性
   * @default ''
   */
  defaultValue?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示颜色选择器。`usePopup` 为 true 时有效
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export type colorModesEnum = 'monochrome' | 'linear-gradient';

export type TypeEnum = 'base' | 'multiple';

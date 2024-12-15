// flow-typed signature: c60d0f70d9ad9a5dc9581dae629904ee
// flow-typed version: 6912183195/redux-thunk_v2.x.x/flow_>=v0.201.x

declare module 'redux-thunk' {
  import type { Middleware } from 'redux';

  declare export type Thunk = Middleware<any, any> & {|
    withExtraArgument(arg: $NonMaybeType<mixed>): Middleware<any, any>,
  |};

  declare module.exports: Thunk;
}

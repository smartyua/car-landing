// flow-typed signature: 3866cf8b4b3769475850f4e8487dd827
// flow-typed version: 80277df6ae/react-hot-loader_v4.x.x/flow_>=v0.104.x

// @flow
declare module "react-hot-loader" {
  declare type Module = { id: string, ... };

  declare type errorReporterProps = {|
    error: Error,
    errorInfo: { componentStack: string, ... }
  |};

  declare type AppContainerProps = {|
    children: React$Element<any>,
    errorBoundary?: boolean,
    errorReporter?: React$ComponentType<errorReporterProps>
  |};

  declare export function setConfig(config: {|
    logLevel?: 'debug' | 'log' | 'warn' | 'error',
    pureSFC?: boolean,
    pureRender?: boolean,
    allowSFC?: boolean,
    disableHotRenderer?: boolean,
    disableHotRendererWhenInjected?: boolean,
    onComponentRegister?: boolean,
    onComponentCreate?: boolean,
    ignoreSFC?: boolean,
    ignoreSFCWhenInjected?: boolean,
    ignoreComponents?: boolean,
    errorReporter?: React$ComponentType<errorReporterProps>,
    ErrorOverlay?: React$ComponentType<any>,
  |}): void;

  declare export class AppContainer extends React$Component<
    AppContainerProps
  > {}

  declare export function hot(
    someModule: Module
  ): <T, W: React$ComponentType<T>>(
    wrappedComponent: W,
    props?: $Diff<AppContainerProps, { children: React$Element<any>, ... }>
  ) => React$ComponentType<T>;
}

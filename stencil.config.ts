import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@web-components/dist/components',
      directivesProxyFile: './../mfe-topbar/src/libs/stencil-generated/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [sass()]
};

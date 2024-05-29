import { getInitialState } from "@/app";

export default {
  npmClient: 'npm',
  request: {},
  initialState: {},
  model: {},
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:5301',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    }
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/models', component: 'models' },
    { path: '/cars/edit/:id', component: 'cars/edit/[id]' },
  ]
};

import routes from './routes'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles.css'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes } //{ routes },
  // function to have custom setups
//   ({ app, router, routes, isClient, initialState }) => {
//     // install plugins etc.
//   },
)
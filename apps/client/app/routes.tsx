import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index('./app.tsx'),
  route('/contact', './routes/contact.tsx', ),
  route('/about', './routes/about.tsx', )
  ] satisfies RouteConfig;
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Serve static assets from the ASSETS binding
    return env.ASSETS.fetch(request);
  }
};

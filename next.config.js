module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.fs = false;
      config.resolve.fallback.async_hooks = false;
      config.resolve.fallback["stream/web"] = false;
    }

    console.log(config.resolve.fallback);

    return config;
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

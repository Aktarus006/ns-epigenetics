module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '14b8c768e3c3723ce15570b03086d107'),
  },
});

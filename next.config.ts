import type { NextConfig } from "next";

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/
// so all assets need this repo-name prefix. Update REPO_NAME if the repo is
// renamed. If this ever moves to a custom domain or a *user* page
// (pbhanuprasad26.github.io root repo), set BASE_PATH to "".
const REPO_NAME = "personal-profile-site";
const BASE_PATH = `/${REPO_NAME}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: { unoptimized: true }, // static export can't use the Image Optimization API
  trailingSlash: true,
};

export default nextConfig;

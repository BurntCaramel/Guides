variable "netlify_token" {
  type = "string"
}

provider "netlify" {
  token = "${var.netlify_token}"
}

resource "netlify_site" "collected-systems" {
  name          = "collected-systems"
  custom_domain = "collected.systems"

  repo {
    repo_branch   = "master"
    command       = "npm run build"
    dir           = "content/.vuepress/dist"
    provider      = "github"
    repo_path     = "RoyalIcing/collected.systems"
  }
}

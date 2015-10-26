var helpers = require("./util/helpers")
var moniker = require("moniker")
var fs = require("fs")
var path = require("path")
var os = require("os")

module.exports = function(req, next, abort){
  var label = "             domain:".grey

  try {
    req.domain = req.argv.domain || fs.readFileSync(path.join(req.project, "CNAME")).toString()
    req.domain = req.domain.split(os.EOL)[0].trim()

    if (!helpers.validDomain(req.domain)) {
      return getDomain(req.domain, next)
    } else {
      console.log(label, req.domain)
      return next()
    }
  } catch(e) {
    return getDomain(moniker.choose() + ".surge.sh")   // prompt with a suggestion
  }

  function getDomain(suggestion){
    req.read({
      silent: false,
      prompt: label,
      default: suggestion,
      edit: true,
    }, function(err, domain){
      if (domain === undefined) return abort("Please try again with a valid domain name.")
      if (err || !helpers.validDomain(domain)) {
        console.log("                    ", "Please enter valid domain name…".grey)
        return getDomain(domain)
      }
      req.domain = domain
      return next()
    })
  }

  getDomain()
}

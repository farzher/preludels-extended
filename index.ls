_ = require 'prelude-ls'
Url = require 'url'


## Url

# from, to -> String
_.url-resolve = -> Url.resolve.apply @, arguments

# -> parsed
_.url-parse = (url) -> Url.parse url, false, true

# -> uri
_.parsed-to-uri = (parsed) -> parsed.path + (parsed.hash or '')

# url -> uri
_.url-to-uri = _.url-parse >> _.parsed-to-uri








## Regex

# -> []
_.regex-match = (regex, str) --> str.match regex or []

# -> []
_.regex-exec = (regex, str, key=null) ->
	results = []
	while tmp = regex.exec str
		results.push (if key? then tmp[key] else tmp)
	results









## List









## Obj










## Number

# -> Int
_.rand = (min, max=null) ->
	[min, max] = [0, min] if not max?
	Math.floor (Math.random! * (max - min + 1) + min)

# -> Boolean
_.chance = (num=0.5) -> Math.random! < num

# -> Number
_.negate-if = (b, x) -> if b then -x else x









## String

# -> String
_.chr = (int) -> String.from-char-code int

# -> Int
_.ord = (str) -> str.char-code-at 0

# -> Boolean
_.is-insensitive = (a, b) -> a.to-upper-case! is b.to-upper-case!

# -> String
_.capitalize = (str) -> (str.substr 0, 1 .toUpperCase!) + str.substr 1








## Util

# -> Int
_.db-bool = (val) -> if val then 1 else 0

# -> Boolean
_.is-array = _.is-type 'Array'





_.flip-each = _.flip _.each
_.flip-map = _.flip _.map
_.flip-reject = _.flip _.reject
_.flip-filter = _.flip _.filter
_.flip-set-timeout = _.flip _.set-timeout

module.exports = _

// Generated by LiveScript 1.2.0
var _;
_ = require('prelude-ls');
_.regexMatch = function(regex, str){
  return str.match(regex) || [];
};
_.regexExec = function(regex, str, key){
  var tmp;
  key == null && (key = null);
  return (function(){
    var results$ = [];
    while (tmp = regex.exec(str)) {
      if (key != null) {
        results$.push(tmp[key]);
      } else {
        results$.push(tmp);
      }
    }
    return results$;
  }());
};
_.clone = function(it){
  return it.slice(0);
};
_.get2D = function(i, width){
  return [i % width, Math.floor(i / width)];
};
_.get1D = function(x, y, width){
  return x + y * width;
};
_.shuffle = function(arr){
  var j, x, i;
  j = x = i = arr.length;
  while (i) {
    j = Math.floor(Math.random() * i);
    x = arr[--i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};
_.rand = function(min, max){
  var ref$;
  max == null && (max = null);
  if (max == null) {
    ref$ = [0, min], min = ref$[0], max = ref$[1];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
_.chance = function(num){
  num == null && (num = 0.5);
  return Math.random() < num;
};
_.negateIf = function(b, x){
  if (b) {
    return -x;
  } else {
    return x;
  }
};
_.chr = function(int){
  return String.fromCharCode(int);
};
_.ord = function(str){
  return str.charCodeAt(0);
};
_.isInsensitive = function(a, b){
  return a.toUpperCase() === b.toUpperCase();
};
_.capitalize = function(str){
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};
_.isArray = _.isType('Array');
_.boolToInt = function(b){
  if (b) {
    return 1;
  } else {
    return 0;
  }
};
_.flipEach = _.flip(_.each);
_.flipMap = _.flip(_.map);
_.flipReject = _.flip(_.reject);
_.flipFilter = _.flip(_.filter);
_.flipSetTimeout = _.flip(_.setTimeout);
module.exports = _;
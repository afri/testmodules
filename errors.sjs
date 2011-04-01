/*
  generate some common runtime errors
*/

exports.undefined_function_call = function() { return undefined_function(); };

exports.undefined_mfunc_call = function() { return this["undefined_function"](); };

exports.throw_exception = function() { throw new Error("This is an exception"); };

exports.undefined_variable = function() { return undefined_variable; };

exports.undefined_base = function() { return undefined_variable['foo']; };


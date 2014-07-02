define(["rsvp"], function(RSVP) {
    "use strict";

    var PromiseMixin = (function() {
        var mixin = function() {
        };
        mixin.prototype.promise = function(url, type, hash) {
            return new RSVP.Promise(function(resolve, reject) {
              hash.success = function(json) {
                return resolve(json);
              };
              hash.error = function(json) {
                if (json && json.then) {
                  json.then = null;
                }
                return reject(json);
              };
              $.ajax(hash);
            });
        }
        return mixin;
    })();

    return PromiseMixin;
});

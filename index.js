/**
 * @author Ozgur Cimen on 25-Jan-16.
 */

var events= require('events')
    ,util = require('util');

var EventEmitter = function(){
    events.call(this);
    this.CHANGED = "changed";
};

util.inherits(EventEmitter, events);
module.exports = EventEmitter;
module .exports.createEmitter = function(){
    "use strict";
    var Emitter = function(){events.call(this)};
    util.inherits(Emitter, events);
    return new Emitter();
};
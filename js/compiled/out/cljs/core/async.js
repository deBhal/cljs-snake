// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11038 = (function (f,fn_handler,meta11039){
this.f = f;
this.fn_handler = fn_handler;
this.meta11039 = meta11039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11038.cljs$lang$type = true;
cljs.core.async.t11038.cljs$lang$ctorStr = "cljs.core.async/t11038";
cljs.core.async.t11038.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11038");
});
cljs.core.async.t11038.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11040){var self__ = this;
var _11040__$1 = this;return self__.meta11039;
});
cljs.core.async.t11038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11040,meta11039__$1){var self__ = this;
var _11040__$1 = this;return (new cljs.core.async.t11038(self__.f,self__.fn_handler,meta11039__$1));
});
cljs.core.async.__GT_t11038 = (function __GT_t11038(f__$1,fn_handler__$1,meta11039){return (new cljs.core.async.t11038(f__$1,fn_handler__$1,meta11039));
});
}
return (new cljs.core.async.t11038(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11042 = buff;if(G__11042)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__11042.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11042.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11042);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11042);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11043 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11043);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11043,ret){
return (function (){return fn1.call(null,val_11043);
});})(val_11043,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___11044 = n;var x_11045 = 0;while(true){
if((x_11045 < n__4329__auto___11044))
{(a[x_11045] = 0);
{
var G__11046 = (x_11045 + 1);
x_11045 = G__11046;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11047 = (i + 1);
i = G__11047;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11051 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11051 = (function (flag,alt_flag,meta11052){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11052 = meta11052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11051.cljs$lang$type = true;
cljs.core.async.t11051.cljs$lang$ctorStr = "cljs.core.async/t11051";
cljs.core.async.t11051.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11051");
});})(flag))
;
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11053){var self__ = this;
var _11053__$1 = this;return self__.meta11052;
});})(flag))
;
cljs.core.async.t11051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11053,meta11052__$1){var self__ = this;
var _11053__$1 = this;return (new cljs.core.async.t11051(self__.flag,self__.alt_flag,meta11052__$1));
});})(flag))
;
cljs.core.async.__GT_t11051 = ((function (flag){
return (function __GT_t11051(flag__$1,alt_flag__$1,meta11052){return (new cljs.core.async.t11051(flag__$1,alt_flag__$1,meta11052));
});})(flag))
;
}
return (new cljs.core.async.t11051(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11057 = (function (cb,flag,alt_handler,meta11058){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11058 = meta11058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11057.cljs$lang$type = true;
cljs.core.async.t11057.cljs$lang$ctorStr = "cljs.core.async/t11057";
cljs.core.async.t11057.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11057");
});
cljs.core.async.t11057.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11059){var self__ = this;
var _11059__$1 = this;return self__.meta11058;
});
cljs.core.async.t11057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11059,meta11058__$1){var self__ = this;
var _11059__$1 = this;return (new cljs.core.async.t11057(self__.cb,self__.flag,self__.alt_handler,meta11058__$1));
});
cljs.core.async.__GT_t11057 = (function __GT_t11057(cb__$1,flag__$1,alt_handler__$1,meta11058){return (new cljs.core.async.t11057(cb__$1,flag__$1,alt_handler__$1,meta11058));
});
}
return (new cljs.core.async.t11057(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11060_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11060_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11061_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11061_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11062 = (i + 1);
i = G__11062;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3481__auto__ = ret;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3469__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11063){var map__11065 = p__11063;var map__11065__$1 = ((cljs.core.seq_QMARK_.call(null,map__11065))?cljs.core.apply.call(null,cljs.core.hash_map,map__11065):map__11065);var opts = map__11065__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11063 = null;if (arguments.length > 1) {
  p__11063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11063);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11066){
var ports = cljs.core.first(arglist__11066);
var p__11063 = cljs.core.rest(arglist__11066);
return alts_BANG___delegate(ports,p__11063);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11074 = (function (ch,f,map_LT_,meta11075){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11075 = meta11075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11074.cljs$lang$type = true;
cljs.core.async.t11074.cljs$lang$ctorStr = "cljs.core.async/t11074";
cljs.core.async.t11074.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11074");
});
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11077 = (function (fn1,_,meta11075,ch,f,map_LT_,meta11078){
this.fn1 = fn1;
this._ = _;
this.meta11075 = meta11075;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11078 = meta11078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11077.cljs$lang$type = true;
cljs.core.async.t11077.cljs$lang$ctorStr = "cljs.core.async/t11077";
cljs.core.async.t11077.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11077");
});})(___$1))
;
cljs.core.async.t11077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11077.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11067_SHARP_){return f1.call(null,(((p1__11067_SHARP_ == null))?null:self__.f.call(null,p1__11067_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11079){var self__ = this;
var _11079__$1 = this;return self__.meta11078;
});})(___$1))
;
cljs.core.async.t11077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11079,meta11078__$1){var self__ = this;
var _11079__$1 = this;return (new cljs.core.async.t11077(self__.fn1,self__._,self__.meta11075,self__.ch,self__.f,self__.map_LT_,meta11078__$1));
});})(___$1))
;
cljs.core.async.__GT_t11077 = ((function (___$1){
return (function __GT_t11077(fn1__$1,___$2,meta11075__$1,ch__$2,f__$2,map_LT___$2,meta11078){return (new cljs.core.async.t11077(fn1__$1,___$2,meta11075__$1,ch__$2,f__$2,map_LT___$2,meta11078));
});})(___$1))
;
}
return (new cljs.core.async.t11077(fn1,___$1,self__.meta11075,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11074.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11076){var self__ = this;
var _11076__$1 = this;return self__.meta11075;
});
cljs.core.async.t11074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11076,meta11075__$1){var self__ = this;
var _11076__$1 = this;return (new cljs.core.async.t11074(self__.ch,self__.f,self__.map_LT_,meta11075__$1));
});
cljs.core.async.__GT_t11074 = (function __GT_t11074(ch__$1,f__$1,map_LT___$1,meta11075){return (new cljs.core.async.t11074(ch__$1,f__$1,map_LT___$1,meta11075));
});
}
return (new cljs.core.async.t11074(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11083 = (function (ch,f,map_GT_,meta11084){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11084 = meta11084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11083.cljs$lang$type = true;
cljs.core.async.t11083.cljs$lang$ctorStr = "cljs.core.async/t11083";
cljs.core.async.t11083.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11083");
});
cljs.core.async.t11083.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11083.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11083.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11085){var self__ = this;
var _11085__$1 = this;return self__.meta11084;
});
cljs.core.async.t11083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11085,meta11084__$1){var self__ = this;
var _11085__$1 = this;return (new cljs.core.async.t11083(self__.ch,self__.f,self__.map_GT_,meta11084__$1));
});
cljs.core.async.__GT_t11083 = (function __GT_t11083(ch__$1,f__$1,map_GT___$1,meta11084){return (new cljs.core.async.t11083(ch__$1,f__$1,map_GT___$1,meta11084));
});
}
return (new cljs.core.async.t11083(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11089 = (function (ch,p,filter_GT_,meta11090){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11090 = meta11090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11089.cljs$lang$type = true;
cljs.core.async.t11089.cljs$lang$ctorStr = "cljs.core.async/t11089";
cljs.core.async.t11089.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11089");
});
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11091){var self__ = this;
var _11091__$1 = this;return self__.meta11090;
});
cljs.core.async.t11089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11091,meta11090__$1){var self__ = this;
var _11091__$1 = this;return (new cljs.core.async.t11089(self__.ch,self__.p,self__.filter_GT_,meta11090__$1));
});
cljs.core.async.__GT_t11089 = (function __GT_t11089(ch__$1,p__$1,filter_GT___$1,meta11090){return (new cljs.core.async.t11089(ch__$1,p__$1,filter_GT___$1,meta11090));
});
}
return (new cljs.core.async.t11089(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6419__auto___11174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___11174,out){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___11174,out){
return (function (state_11153){var state_val_11154 = (state_11153[1]);if((state_val_11154 === 7))
{var inst_11149 = (state_11153[2]);var state_11153__$1 = state_11153;var statearr_11155_11175 = state_11153__$1;(statearr_11155_11175[2] = inst_11149);
(statearr_11155_11175[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 1))
{var state_11153__$1 = state_11153;var statearr_11156_11176 = state_11153__$1;(statearr_11156_11176[2] = null);
(statearr_11156_11176[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 4))
{var inst_11135 = (state_11153[7]);var inst_11135__$1 = (state_11153[2]);var inst_11136 = (inst_11135__$1 == null);var state_11153__$1 = (function (){var statearr_11157 = state_11153;(statearr_11157[7] = inst_11135__$1);
return statearr_11157;
})();if(cljs.core.truth_(inst_11136))
{var statearr_11158_11177 = state_11153__$1;(statearr_11158_11177[1] = 5);
} else
{var statearr_11159_11178 = state_11153__$1;(statearr_11159_11178[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 6))
{var inst_11135 = (state_11153[7]);var inst_11140 = p.call(null,inst_11135);var state_11153__$1 = state_11153;if(cljs.core.truth_(inst_11140))
{var statearr_11160_11179 = state_11153__$1;(statearr_11160_11179[1] = 8);
} else
{var statearr_11161_11180 = state_11153__$1;(statearr_11161_11180[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 3))
{var inst_11151 = (state_11153[2]);var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11153__$1,inst_11151);
} else
{if((state_val_11154 === 2))
{var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11153__$1,4,ch);
} else
{if((state_val_11154 === 11))
{var inst_11143 = (state_11153[2]);var state_11153__$1 = state_11153;var statearr_11162_11181 = state_11153__$1;(statearr_11162_11181[2] = inst_11143);
(statearr_11162_11181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 9))
{var state_11153__$1 = state_11153;var statearr_11163_11182 = state_11153__$1;(statearr_11163_11182[2] = null);
(statearr_11163_11182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 5))
{var inst_11138 = cljs.core.async.close_BANG_.call(null,out);var state_11153__$1 = state_11153;var statearr_11164_11183 = state_11153__$1;(statearr_11164_11183[2] = inst_11138);
(statearr_11164_11183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 10))
{var inst_11146 = (state_11153[2]);var state_11153__$1 = (function (){var statearr_11165 = state_11153;(statearr_11165[8] = inst_11146);
return statearr_11165;
})();var statearr_11166_11184 = state_11153__$1;(statearr_11166_11184[2] = null);
(statearr_11166_11184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11154 === 8))
{var inst_11135 = (state_11153[7]);var state_11153__$1 = state_11153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11153__$1,11,out,inst_11135);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___11174,out))
;return ((function (switch__6404__auto__,c__6419__auto___11174,out){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_11170 = [null,null,null,null,null,null,null,null,null];(statearr_11170[0] = state_machine__6405__auto__);
(statearr_11170[1] = 1);
return statearr_11170;
});
var state_machine__6405__auto____1 = (function (state_11153){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_11153);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e11171){if((e11171 instanceof Object))
{var ex__6408__auto__ = e11171;var statearr_11172_11185 = state_11153;(statearr_11172_11185[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11186 = state_11153;
state_11153 = G__11186;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_11153){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_11153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___11174,out))
})();var state__6421__auto__ = (function (){var statearr_11173 = f__6420__auto__.call(null);(statearr_11173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___11174);
return statearr_11173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___11174,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__){
return (function (state_11352){var state_val_11353 = (state_11352[1]);if((state_val_11353 === 7))
{var inst_11348 = (state_11352[2]);var state_11352__$1 = state_11352;var statearr_11354_11395 = state_11352__$1;(statearr_11354_11395[2] = inst_11348);
(statearr_11354_11395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 20))
{var inst_11318 = (state_11352[7]);var inst_11329 = (state_11352[2]);var inst_11330 = cljs.core.next.call(null,inst_11318);var inst_11304 = inst_11330;var inst_11305 = null;var inst_11306 = 0;var inst_11307 = 0;var state_11352__$1 = (function (){var statearr_11355 = state_11352;(statearr_11355[8] = inst_11307);
(statearr_11355[9] = inst_11305);
(statearr_11355[10] = inst_11304);
(statearr_11355[11] = inst_11306);
(statearr_11355[12] = inst_11329);
return statearr_11355;
})();var statearr_11356_11396 = state_11352__$1;(statearr_11356_11396[2] = null);
(statearr_11356_11396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 1))
{var state_11352__$1 = state_11352;var statearr_11357_11397 = state_11352__$1;(statearr_11357_11397[2] = null);
(statearr_11357_11397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 4))
{var inst_11293 = (state_11352[13]);var inst_11293__$1 = (state_11352[2]);var inst_11294 = (inst_11293__$1 == null);var state_11352__$1 = (function (){var statearr_11358 = state_11352;(statearr_11358[13] = inst_11293__$1);
return statearr_11358;
})();if(cljs.core.truth_(inst_11294))
{var statearr_11359_11398 = state_11352__$1;(statearr_11359_11398[1] = 5);
} else
{var statearr_11360_11399 = state_11352__$1;(statearr_11360_11399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 15))
{var state_11352__$1 = state_11352;var statearr_11364_11400 = state_11352__$1;(statearr_11364_11400[2] = null);
(statearr_11364_11400[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 21))
{var state_11352__$1 = state_11352;var statearr_11365_11401 = state_11352__$1;(statearr_11365_11401[2] = null);
(statearr_11365_11401[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 13))
{var inst_11307 = (state_11352[8]);var inst_11305 = (state_11352[9]);var inst_11304 = (state_11352[10]);var inst_11306 = (state_11352[11]);var inst_11314 = (state_11352[2]);var inst_11315 = (inst_11307 + 1);var tmp11361 = inst_11305;var tmp11362 = inst_11304;var tmp11363 = inst_11306;var inst_11304__$1 = tmp11362;var inst_11305__$1 = tmp11361;var inst_11306__$1 = tmp11363;var inst_11307__$1 = inst_11315;var state_11352__$1 = (function (){var statearr_11366 = state_11352;(statearr_11366[8] = inst_11307__$1);
(statearr_11366[9] = inst_11305__$1);
(statearr_11366[10] = inst_11304__$1);
(statearr_11366[14] = inst_11314);
(statearr_11366[11] = inst_11306__$1);
return statearr_11366;
})();var statearr_11367_11402 = state_11352__$1;(statearr_11367_11402[2] = null);
(statearr_11367_11402[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 22))
{var state_11352__$1 = state_11352;var statearr_11368_11403 = state_11352__$1;(statearr_11368_11403[2] = null);
(statearr_11368_11403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 6))
{var inst_11293 = (state_11352[13]);var inst_11302 = f.call(null,inst_11293);var inst_11303 = cljs.core.seq.call(null,inst_11302);var inst_11304 = inst_11303;var inst_11305 = null;var inst_11306 = 0;var inst_11307 = 0;var state_11352__$1 = (function (){var statearr_11369 = state_11352;(statearr_11369[8] = inst_11307);
(statearr_11369[9] = inst_11305);
(statearr_11369[10] = inst_11304);
(statearr_11369[11] = inst_11306);
return statearr_11369;
})();var statearr_11370_11404 = state_11352__$1;(statearr_11370_11404[2] = null);
(statearr_11370_11404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 17))
{var inst_11318 = (state_11352[7]);var inst_11322 = cljs.core.chunk_first.call(null,inst_11318);var inst_11323 = cljs.core.chunk_rest.call(null,inst_11318);var inst_11324 = cljs.core.count.call(null,inst_11322);var inst_11304 = inst_11323;var inst_11305 = inst_11322;var inst_11306 = inst_11324;var inst_11307 = 0;var state_11352__$1 = (function (){var statearr_11371 = state_11352;(statearr_11371[8] = inst_11307);
(statearr_11371[9] = inst_11305);
(statearr_11371[10] = inst_11304);
(statearr_11371[11] = inst_11306);
return statearr_11371;
})();var statearr_11372_11405 = state_11352__$1;(statearr_11372_11405[2] = null);
(statearr_11372_11405[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 3))
{var inst_11350 = (state_11352[2]);var state_11352__$1 = state_11352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11352__$1,inst_11350);
} else
{if((state_val_11353 === 12))
{var inst_11338 = (state_11352[2]);var state_11352__$1 = state_11352;var statearr_11373_11406 = state_11352__$1;(statearr_11373_11406[2] = inst_11338);
(statearr_11373_11406[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 2))
{var state_11352__$1 = state_11352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11352__$1,4,in$);
} else
{if((state_val_11353 === 23))
{var inst_11346 = (state_11352[2]);var state_11352__$1 = state_11352;var statearr_11374_11407 = state_11352__$1;(statearr_11374_11407[2] = inst_11346);
(statearr_11374_11407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 19))
{var inst_11333 = (state_11352[2]);var state_11352__$1 = state_11352;var statearr_11375_11408 = state_11352__$1;(statearr_11375_11408[2] = inst_11333);
(statearr_11375_11408[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 11))
{var inst_11304 = (state_11352[10]);var inst_11318 = (state_11352[7]);var inst_11318__$1 = cljs.core.seq.call(null,inst_11304);var state_11352__$1 = (function (){var statearr_11376 = state_11352;(statearr_11376[7] = inst_11318__$1);
return statearr_11376;
})();if(inst_11318__$1)
{var statearr_11377_11409 = state_11352__$1;(statearr_11377_11409[1] = 14);
} else
{var statearr_11378_11410 = state_11352__$1;(statearr_11378_11410[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 9))
{var inst_11340 = (state_11352[2]);var inst_11341 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11352__$1 = (function (){var statearr_11379 = state_11352;(statearr_11379[15] = inst_11340);
return statearr_11379;
})();if(cljs.core.truth_(inst_11341))
{var statearr_11380_11411 = state_11352__$1;(statearr_11380_11411[1] = 21);
} else
{var statearr_11381_11412 = state_11352__$1;(statearr_11381_11412[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 5))
{var inst_11296 = cljs.core.async.close_BANG_.call(null,out);var state_11352__$1 = state_11352;var statearr_11382_11413 = state_11352__$1;(statearr_11382_11413[2] = inst_11296);
(statearr_11382_11413[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 14))
{var inst_11318 = (state_11352[7]);var inst_11320 = cljs.core.chunked_seq_QMARK_.call(null,inst_11318);var state_11352__$1 = state_11352;if(inst_11320)
{var statearr_11383_11414 = state_11352__$1;(statearr_11383_11414[1] = 17);
} else
{var statearr_11384_11415 = state_11352__$1;(statearr_11384_11415[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 16))
{var inst_11336 = (state_11352[2]);var state_11352__$1 = state_11352;var statearr_11385_11416 = state_11352__$1;(statearr_11385_11416[2] = inst_11336);
(statearr_11385_11416[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11353 === 10))
{var inst_11307 = (state_11352[8]);var inst_11305 = (state_11352[9]);var inst_11312 = cljs.core._nth.call(null,inst_11305,inst_11307);var state_11352__$1 = state_11352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11352__$1,13,out,inst_11312);
} else
{if((state_val_11353 === 18))
{var inst_11318 = (state_11352[7]);var inst_11327 = cljs.core.first.call(null,inst_11318);var state_11352__$1 = state_11352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11352__$1,20,out,inst_11327);
} else
{if((state_val_11353 === 8))
{var inst_11307 = (state_11352[8]);var inst_11306 = (state_11352[11]);var inst_11309 = (inst_11307 < inst_11306);var inst_11310 = inst_11309;var state_11352__$1 = state_11352;if(cljs.core.truth_(inst_11310))
{var statearr_11386_11417 = state_11352__$1;(statearr_11386_11417[1] = 10);
} else
{var statearr_11387_11418 = state_11352__$1;(statearr_11387_11418[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto__))
;return ((function (switch__6404__auto__,c__6419__auto__){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_11391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11391[0] = state_machine__6405__auto__);
(statearr_11391[1] = 1);
return statearr_11391;
});
var state_machine__6405__auto____1 = (function (state_11352){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_11352);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e11392){if((e11392 instanceof Object))
{var ex__6408__auto__ = e11392;var statearr_11393_11419 = state_11352;(statearr_11393_11419[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11420 = state_11352;
state_11352 = G__11420;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_11352){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_11352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__))
})();var state__6421__auto__ = (function (){var statearr_11394 = f__6420__auto__.call(null);(statearr_11394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_11394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__))
);
return c__6419__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6419__auto___11515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___11515){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___11515){
return (function (state_11491){var state_val_11492 = (state_11491[1]);if((state_val_11492 === 7))
{var inst_11487 = (state_11491[2]);var state_11491__$1 = state_11491;var statearr_11493_11516 = state_11491__$1;(statearr_11493_11516[2] = inst_11487);
(statearr_11493_11516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 1))
{var state_11491__$1 = state_11491;var statearr_11494_11517 = state_11491__$1;(statearr_11494_11517[2] = null);
(statearr_11494_11517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 4))
{var inst_11470 = (state_11491[7]);var inst_11470__$1 = (state_11491[2]);var inst_11471 = (inst_11470__$1 == null);var state_11491__$1 = (function (){var statearr_11495 = state_11491;(statearr_11495[7] = inst_11470__$1);
return statearr_11495;
})();if(cljs.core.truth_(inst_11471))
{var statearr_11496_11518 = state_11491__$1;(statearr_11496_11518[1] = 5);
} else
{var statearr_11497_11519 = state_11491__$1;(statearr_11497_11519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 13))
{var state_11491__$1 = state_11491;var statearr_11498_11520 = state_11491__$1;(statearr_11498_11520[2] = null);
(statearr_11498_11520[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 6))
{var inst_11470 = (state_11491[7]);var state_11491__$1 = state_11491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11491__$1,11,to,inst_11470);
} else
{if((state_val_11492 === 3))
{var inst_11489 = (state_11491[2]);var state_11491__$1 = state_11491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11491__$1,inst_11489);
} else
{if((state_val_11492 === 12))
{var state_11491__$1 = state_11491;var statearr_11499_11521 = state_11491__$1;(statearr_11499_11521[2] = null);
(statearr_11499_11521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 2))
{var state_11491__$1 = state_11491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11491__$1,4,from);
} else
{if((state_val_11492 === 11))
{var inst_11480 = (state_11491[2]);var state_11491__$1 = state_11491;if(cljs.core.truth_(inst_11480))
{var statearr_11500_11522 = state_11491__$1;(statearr_11500_11522[1] = 12);
} else
{var statearr_11501_11523 = state_11491__$1;(statearr_11501_11523[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 9))
{var state_11491__$1 = state_11491;var statearr_11502_11524 = state_11491__$1;(statearr_11502_11524[2] = null);
(statearr_11502_11524[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 5))
{var state_11491__$1 = state_11491;if(cljs.core.truth_(close_QMARK_))
{var statearr_11503_11525 = state_11491__$1;(statearr_11503_11525[1] = 8);
} else
{var statearr_11504_11526 = state_11491__$1;(statearr_11504_11526[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 14))
{var inst_11485 = (state_11491[2]);var state_11491__$1 = state_11491;var statearr_11505_11527 = state_11491__$1;(statearr_11505_11527[2] = inst_11485);
(statearr_11505_11527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 10))
{var inst_11477 = (state_11491[2]);var state_11491__$1 = state_11491;var statearr_11506_11528 = state_11491__$1;(statearr_11506_11528[2] = inst_11477);
(statearr_11506_11528[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11492 === 8))
{var inst_11474 = cljs.core.async.close_BANG_.call(null,to);var state_11491__$1 = state_11491;var statearr_11507_11529 = state_11491__$1;(statearr_11507_11529[2] = inst_11474);
(statearr_11507_11529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___11515))
;return ((function (switch__6404__auto__,c__6419__auto___11515){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_11511 = [null,null,null,null,null,null,null,null];(statearr_11511[0] = state_machine__6405__auto__);
(statearr_11511[1] = 1);
return statearr_11511;
});
var state_machine__6405__auto____1 = (function (state_11491){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_11491);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e11512){if((e11512 instanceof Object))
{var ex__6408__auto__ = e11512;var statearr_11513_11530 = state_11491;(statearr_11513_11530[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11531 = state_11491;
state_11491 = G__11531;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___11515))
})();var state__6421__auto__ = (function (){var statearr_11514 = f__6420__auto__.call(null);(statearr_11514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___11515);
return statearr_11514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___11515))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6419__auto___11632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___11632,tc,fc){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___11632,tc,fc){
return (function (state_11607){var state_val_11608 = (state_11607[1]);if((state_val_11608 === 7))
{var inst_11603 = (state_11607[2]);var state_11607__$1 = state_11607;var statearr_11609_11633 = state_11607__$1;(statearr_11609_11633[2] = inst_11603);
(statearr_11609_11633[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 1))
{var state_11607__$1 = state_11607;var statearr_11610_11634 = state_11607__$1;(statearr_11610_11634[2] = null);
(statearr_11610_11634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 4))
{var inst_11584 = (state_11607[7]);var inst_11584__$1 = (state_11607[2]);var inst_11585 = (inst_11584__$1 == null);var state_11607__$1 = (function (){var statearr_11611 = state_11607;(statearr_11611[7] = inst_11584__$1);
return statearr_11611;
})();if(cljs.core.truth_(inst_11585))
{var statearr_11612_11635 = state_11607__$1;(statearr_11612_11635[1] = 5);
} else
{var statearr_11613_11636 = state_11607__$1;(statearr_11613_11636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 13))
{var state_11607__$1 = state_11607;var statearr_11614_11637 = state_11607__$1;(statearr_11614_11637[2] = null);
(statearr_11614_11637[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 6))
{var inst_11584 = (state_11607[7]);var inst_11590 = p.call(null,inst_11584);var state_11607__$1 = state_11607;if(cljs.core.truth_(inst_11590))
{var statearr_11615_11638 = state_11607__$1;(statearr_11615_11638[1] = 9);
} else
{var statearr_11616_11639 = state_11607__$1;(statearr_11616_11639[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 3))
{var inst_11605 = (state_11607[2]);var state_11607__$1 = state_11607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11607__$1,inst_11605);
} else
{if((state_val_11608 === 12))
{var state_11607__$1 = state_11607;var statearr_11617_11640 = state_11607__$1;(statearr_11617_11640[2] = null);
(statearr_11617_11640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 2))
{var state_11607__$1 = state_11607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11607__$1,4,ch);
} else
{if((state_val_11608 === 11))
{var inst_11584 = (state_11607[7]);var inst_11594 = (state_11607[2]);var state_11607__$1 = state_11607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11607__$1,8,inst_11594,inst_11584);
} else
{if((state_val_11608 === 9))
{var state_11607__$1 = state_11607;var statearr_11618_11641 = state_11607__$1;(statearr_11618_11641[2] = tc);
(statearr_11618_11641[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 5))
{var inst_11587 = cljs.core.async.close_BANG_.call(null,tc);var inst_11588 = cljs.core.async.close_BANG_.call(null,fc);var state_11607__$1 = (function (){var statearr_11619 = state_11607;(statearr_11619[8] = inst_11587);
return statearr_11619;
})();var statearr_11620_11642 = state_11607__$1;(statearr_11620_11642[2] = inst_11588);
(statearr_11620_11642[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 14))
{var inst_11601 = (state_11607[2]);var state_11607__$1 = state_11607;var statearr_11621_11643 = state_11607__$1;(statearr_11621_11643[2] = inst_11601);
(statearr_11621_11643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 10))
{var state_11607__$1 = state_11607;var statearr_11622_11644 = state_11607__$1;(statearr_11622_11644[2] = fc);
(statearr_11622_11644[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11608 === 8))
{var inst_11596 = (state_11607[2]);var state_11607__$1 = state_11607;if(cljs.core.truth_(inst_11596))
{var statearr_11623_11645 = state_11607__$1;(statearr_11623_11645[1] = 12);
} else
{var statearr_11624_11646 = state_11607__$1;(statearr_11624_11646[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___11632,tc,fc))
;return ((function (switch__6404__auto__,c__6419__auto___11632,tc,fc){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_11628 = [null,null,null,null,null,null,null,null,null];(statearr_11628[0] = state_machine__6405__auto__);
(statearr_11628[1] = 1);
return statearr_11628;
});
var state_machine__6405__auto____1 = (function (state_11607){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_11607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e11629){if((e11629 instanceof Object))
{var ex__6408__auto__ = e11629;var statearr_11630_11647 = state_11607;(statearr_11630_11647[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11648 = state_11607;
state_11607 = G__11648;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_11607){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_11607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___11632,tc,fc))
})();var state__6421__auto__ = (function (){var statearr_11631 = f__6420__auto__.call(null);(statearr_11631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___11632);
return statearr_11631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___11632,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__){
return (function (state_11695){var state_val_11696 = (state_11695[1]);if((state_val_11696 === 7))
{var inst_11691 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11697_11713 = state_11695__$1;(statearr_11697_11713[2] = inst_11691);
(statearr_11697_11713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 6))
{var inst_11681 = (state_11695[7]);var inst_11684 = (state_11695[8]);var inst_11688 = f.call(null,inst_11681,inst_11684);var inst_11681__$1 = inst_11688;var state_11695__$1 = (function (){var statearr_11698 = state_11695;(statearr_11698[7] = inst_11681__$1);
return statearr_11698;
})();var statearr_11699_11714 = state_11695__$1;(statearr_11699_11714[2] = null);
(statearr_11699_11714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 5))
{var inst_11681 = (state_11695[7]);var state_11695__$1 = state_11695;var statearr_11700_11715 = state_11695__$1;(statearr_11700_11715[2] = inst_11681);
(statearr_11700_11715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 4))
{var inst_11684 = (state_11695[8]);var inst_11684__$1 = (state_11695[2]);var inst_11685 = (inst_11684__$1 == null);var state_11695__$1 = (function (){var statearr_11701 = state_11695;(statearr_11701[8] = inst_11684__$1);
return statearr_11701;
})();if(cljs.core.truth_(inst_11685))
{var statearr_11702_11716 = state_11695__$1;(statearr_11702_11716[1] = 5);
} else
{var statearr_11703_11717 = state_11695__$1;(statearr_11703_11717[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 3))
{var inst_11693 = (state_11695[2]);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11695__$1,inst_11693);
} else
{if((state_val_11696 === 2))
{var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,4,ch);
} else
{if((state_val_11696 === 1))
{var inst_11681 = init;var state_11695__$1 = (function (){var statearr_11704 = state_11695;(statearr_11704[7] = inst_11681);
return statearr_11704;
})();var statearr_11705_11718 = state_11695__$1;(statearr_11705_11718[2] = null);
(statearr_11705_11718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6419__auto__))
;return ((function (switch__6404__auto__,c__6419__auto__){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_11709 = [null,null,null,null,null,null,null,null,null];(statearr_11709[0] = state_machine__6405__auto__);
(statearr_11709[1] = 1);
return statearr_11709;
});
var state_machine__6405__auto____1 = (function (state_11695){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_11695);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e11710){if((e11710 instanceof Object))
{var ex__6408__auto__ = e11710;var statearr_11711_11719 = state_11695;(statearr_11711_11719[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11720 = state_11695;
state_11695 = G__11720;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_11695){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_11695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__))
})();var state__6421__auto__ = (function (){var statearr_11712 = f__6420__auto__.call(null);(statearr_11712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_11712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__))
);
return c__6419__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__){
return (function (state_11794){var state_val_11795 = (state_11794[1]);if((state_val_11795 === 7))
{var inst_11776 = (state_11794[2]);var state_11794__$1 = state_11794;var statearr_11796_11819 = state_11794__$1;(statearr_11796_11819[2] = inst_11776);
(statearr_11796_11819[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 1))
{var inst_11770 = cljs.core.seq.call(null,coll);var inst_11771 = inst_11770;var state_11794__$1 = (function (){var statearr_11797 = state_11794;(statearr_11797[7] = inst_11771);
return statearr_11797;
})();var statearr_11798_11820 = state_11794__$1;(statearr_11798_11820[2] = null);
(statearr_11798_11820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 4))
{var inst_11771 = (state_11794[7]);var inst_11774 = cljs.core.first.call(null,inst_11771);var state_11794__$1 = state_11794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11794__$1,7,ch,inst_11774);
} else
{if((state_val_11795 === 13))
{var inst_11788 = (state_11794[2]);var state_11794__$1 = state_11794;var statearr_11799_11821 = state_11794__$1;(statearr_11799_11821[2] = inst_11788);
(statearr_11799_11821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 6))
{var inst_11779 = (state_11794[2]);var state_11794__$1 = state_11794;if(cljs.core.truth_(inst_11779))
{var statearr_11800_11822 = state_11794__$1;(statearr_11800_11822[1] = 8);
} else
{var statearr_11801_11823 = state_11794__$1;(statearr_11801_11823[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 3))
{var inst_11792 = (state_11794[2]);var state_11794__$1 = state_11794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11794__$1,inst_11792);
} else
{if((state_val_11795 === 12))
{var state_11794__$1 = state_11794;var statearr_11802_11824 = state_11794__$1;(statearr_11802_11824[2] = null);
(statearr_11802_11824[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 2))
{var inst_11771 = (state_11794[7]);var state_11794__$1 = state_11794;if(cljs.core.truth_(inst_11771))
{var statearr_11803_11825 = state_11794__$1;(statearr_11803_11825[1] = 4);
} else
{var statearr_11804_11826 = state_11794__$1;(statearr_11804_11826[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 11))
{var inst_11785 = cljs.core.async.close_BANG_.call(null,ch);var state_11794__$1 = state_11794;var statearr_11805_11827 = state_11794__$1;(statearr_11805_11827[2] = inst_11785);
(statearr_11805_11827[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 9))
{var state_11794__$1 = state_11794;if(cljs.core.truth_(close_QMARK_))
{var statearr_11806_11828 = state_11794__$1;(statearr_11806_11828[1] = 11);
} else
{var statearr_11807_11829 = state_11794__$1;(statearr_11807_11829[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 5))
{var inst_11771 = (state_11794[7]);var state_11794__$1 = state_11794;var statearr_11808_11830 = state_11794__$1;(statearr_11808_11830[2] = inst_11771);
(statearr_11808_11830[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 10))
{var inst_11790 = (state_11794[2]);var state_11794__$1 = state_11794;var statearr_11809_11831 = state_11794__$1;(statearr_11809_11831[2] = inst_11790);
(statearr_11809_11831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11795 === 8))
{var inst_11771 = (state_11794[7]);var inst_11781 = cljs.core.next.call(null,inst_11771);var inst_11771__$1 = inst_11781;var state_11794__$1 = (function (){var statearr_11810 = state_11794;(statearr_11810[7] = inst_11771__$1);
return statearr_11810;
})();var statearr_11811_11832 = state_11794__$1;(statearr_11811_11832[2] = null);
(statearr_11811_11832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto__))
;return ((function (switch__6404__auto__,c__6419__auto__){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_11815 = [null,null,null,null,null,null,null,null];(statearr_11815[0] = state_machine__6405__auto__);
(statearr_11815[1] = 1);
return statearr_11815;
});
var state_machine__6405__auto____1 = (function (state_11794){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_11794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e11816){if((e11816 instanceof Object))
{var ex__6408__auto__ = e11816;var statearr_11817_11833 = state_11794;(statearr_11817_11833[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11794);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11834 = state_11794;
state_11794 = G__11834;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_11794){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_11794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__))
})();var state__6421__auto__ = (function (){var statearr_11818 = f__6420__auto__.call(null);(statearr_11818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_11818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__))
);
return c__6419__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11836 = {};return obj11836;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3469__auto__ = _;if(and__3469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4108__auto__ = (((_ == null))?null:_);return (function (){var or__3481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11838 = {};return obj11838;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12060 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12060 = (function (cs,ch,mult,meta12061){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12061 = meta12061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12060.cljs$lang$type = true;
cljs.core.async.t12060.cljs$lang$ctorStr = "cljs.core.async/t12060";
cljs.core.async.t12060.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12060");
});})(cs))
;
cljs.core.async.t12060.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12060.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12060.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12060.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12060.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12060.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12062){var self__ = this;
var _12062__$1 = this;return self__.meta12061;
});})(cs))
;
cljs.core.async.t12060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12062,meta12061__$1){var self__ = this;
var _12062__$1 = this;return (new cljs.core.async.t12060(self__.cs,self__.ch,self__.mult,meta12061__$1));
});})(cs))
;
cljs.core.async.__GT_t12060 = ((function (cs){
return (function __GT_t12060(cs__$1,ch__$1,mult__$1,meta12061){return (new cljs.core.async.t12060(cs__$1,ch__$1,mult__$1,meta12061));
});})(cs))
;
}
return (new cljs.core.async.t12060(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6419__auto___12281 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___12281,cs,m,dchan,dctr,done){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___12281,cs,m,dchan,dctr,done){
return (function (state_12193){var state_val_12194 = (state_12193[1]);if((state_val_12194 === 7))
{var inst_12189 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12195_12282 = state_12193__$1;(statearr_12195_12282[2] = inst_12189);
(statearr_12195_12282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 20))
{var inst_12094 = (state_12193[7]);var inst_12104 = cljs.core.first.call(null,inst_12094);var inst_12105 = cljs.core.nth.call(null,inst_12104,0,null);var inst_12106 = cljs.core.nth.call(null,inst_12104,1,null);var state_12193__$1 = (function (){var statearr_12196 = state_12193;(statearr_12196[8] = inst_12105);
return statearr_12196;
})();if(cljs.core.truth_(inst_12106))
{var statearr_12197_12283 = state_12193__$1;(statearr_12197_12283[1] = 22);
} else
{var statearr_12198_12284 = state_12193__$1;(statearr_12198_12284[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 27))
{var inst_12065 = (state_12193[9]);var inst_12141 = (state_12193[10]);var inst_12136 = (state_12193[11]);var inst_12134 = (state_12193[12]);var inst_12141__$1 = cljs.core._nth.call(null,inst_12134,inst_12136);var inst_12142 = cljs.core.async.put_BANG_.call(null,inst_12141__$1,inst_12065,done);var state_12193__$1 = (function (){var statearr_12199 = state_12193;(statearr_12199[10] = inst_12141__$1);
return statearr_12199;
})();if(cljs.core.truth_(inst_12142))
{var statearr_12200_12285 = state_12193__$1;(statearr_12200_12285[1] = 30);
} else
{var statearr_12201_12286 = state_12193__$1;(statearr_12201_12286[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 1))
{var state_12193__$1 = state_12193;var statearr_12202_12287 = state_12193__$1;(statearr_12202_12287[2] = null);
(statearr_12202_12287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 24))
{var inst_12094 = (state_12193[7]);var inst_12111 = (state_12193[2]);var inst_12112 = cljs.core.next.call(null,inst_12094);var inst_12074 = inst_12112;var inst_12075 = null;var inst_12076 = 0;var inst_12077 = 0;var state_12193__$1 = (function (){var statearr_12203 = state_12193;(statearr_12203[13] = inst_12111);
(statearr_12203[14] = inst_12077);
(statearr_12203[15] = inst_12075);
(statearr_12203[16] = inst_12076);
(statearr_12203[17] = inst_12074);
return statearr_12203;
})();var statearr_12204_12288 = state_12193__$1;(statearr_12204_12288[2] = null);
(statearr_12204_12288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 39))
{var state_12193__$1 = state_12193;var statearr_12208_12289 = state_12193__$1;(statearr_12208_12289[2] = null);
(statearr_12208_12289[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 4))
{var inst_12065 = (state_12193[9]);var inst_12065__$1 = (state_12193[2]);var inst_12066 = (inst_12065__$1 == null);var state_12193__$1 = (function (){var statearr_12209 = state_12193;(statearr_12209[9] = inst_12065__$1);
return statearr_12209;
})();if(cljs.core.truth_(inst_12066))
{var statearr_12210_12290 = state_12193__$1;(statearr_12210_12290[1] = 5);
} else
{var statearr_12211_12291 = state_12193__$1;(statearr_12211_12291[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 15))
{var inst_12077 = (state_12193[14]);var inst_12075 = (state_12193[15]);var inst_12076 = (state_12193[16]);var inst_12074 = (state_12193[17]);var inst_12090 = (state_12193[2]);var inst_12091 = (inst_12077 + 1);var tmp12205 = inst_12075;var tmp12206 = inst_12076;var tmp12207 = inst_12074;var inst_12074__$1 = tmp12207;var inst_12075__$1 = tmp12205;var inst_12076__$1 = tmp12206;var inst_12077__$1 = inst_12091;var state_12193__$1 = (function (){var statearr_12212 = state_12193;(statearr_12212[14] = inst_12077__$1);
(statearr_12212[15] = inst_12075__$1);
(statearr_12212[16] = inst_12076__$1);
(statearr_12212[17] = inst_12074__$1);
(statearr_12212[18] = inst_12090);
return statearr_12212;
})();var statearr_12213_12292 = state_12193__$1;(statearr_12213_12292[2] = null);
(statearr_12213_12292[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 21))
{var inst_12115 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12217_12293 = state_12193__$1;(statearr_12217_12293[2] = inst_12115);
(statearr_12217_12293[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 31))
{var inst_12141 = (state_12193[10]);var inst_12145 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12146 = cljs.core.async.untap_STAR_.call(null,m,inst_12141);var state_12193__$1 = (function (){var statearr_12218 = state_12193;(statearr_12218[19] = inst_12145);
return statearr_12218;
})();var statearr_12219_12294 = state_12193__$1;(statearr_12219_12294[2] = inst_12146);
(statearr_12219_12294[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 32))
{var inst_12135 = (state_12193[20]);var inst_12133 = (state_12193[21]);var inst_12136 = (state_12193[11]);var inst_12134 = (state_12193[12]);var inst_12148 = (state_12193[2]);var inst_12149 = (inst_12136 + 1);var tmp12214 = inst_12135;var tmp12215 = inst_12133;var tmp12216 = inst_12134;var inst_12133__$1 = tmp12215;var inst_12134__$1 = tmp12216;var inst_12135__$1 = tmp12214;var inst_12136__$1 = inst_12149;var state_12193__$1 = (function (){var statearr_12220 = state_12193;(statearr_12220[22] = inst_12148);
(statearr_12220[20] = inst_12135__$1);
(statearr_12220[21] = inst_12133__$1);
(statearr_12220[11] = inst_12136__$1);
(statearr_12220[12] = inst_12134__$1);
return statearr_12220;
})();var statearr_12221_12295 = state_12193__$1;(statearr_12221_12295[2] = null);
(statearr_12221_12295[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 40))
{var inst_12161 = (state_12193[23]);var inst_12165 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12166 = cljs.core.async.untap_STAR_.call(null,m,inst_12161);var state_12193__$1 = (function (){var statearr_12222 = state_12193;(statearr_12222[24] = inst_12165);
return statearr_12222;
})();var statearr_12223_12296 = state_12193__$1;(statearr_12223_12296[2] = inst_12166);
(statearr_12223_12296[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 33))
{var inst_12152 = (state_12193[25]);var inst_12154 = cljs.core.chunked_seq_QMARK_.call(null,inst_12152);var state_12193__$1 = state_12193;if(inst_12154)
{var statearr_12224_12297 = state_12193__$1;(statearr_12224_12297[1] = 36);
} else
{var statearr_12225_12298 = state_12193__$1;(statearr_12225_12298[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 13))
{var inst_12084 = (state_12193[26]);var inst_12087 = cljs.core.async.close_BANG_.call(null,inst_12084);var state_12193__$1 = state_12193;var statearr_12226_12299 = state_12193__$1;(statearr_12226_12299[2] = inst_12087);
(statearr_12226_12299[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 22))
{var inst_12105 = (state_12193[8]);var inst_12108 = cljs.core.async.close_BANG_.call(null,inst_12105);var state_12193__$1 = state_12193;var statearr_12227_12300 = state_12193__$1;(statearr_12227_12300[2] = inst_12108);
(statearr_12227_12300[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 36))
{var inst_12152 = (state_12193[25]);var inst_12156 = cljs.core.chunk_first.call(null,inst_12152);var inst_12157 = cljs.core.chunk_rest.call(null,inst_12152);var inst_12158 = cljs.core.count.call(null,inst_12156);var inst_12133 = inst_12157;var inst_12134 = inst_12156;var inst_12135 = inst_12158;var inst_12136 = 0;var state_12193__$1 = (function (){var statearr_12228 = state_12193;(statearr_12228[20] = inst_12135);
(statearr_12228[21] = inst_12133);
(statearr_12228[11] = inst_12136);
(statearr_12228[12] = inst_12134);
return statearr_12228;
})();var statearr_12229_12301 = state_12193__$1;(statearr_12229_12301[2] = null);
(statearr_12229_12301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 41))
{var inst_12152 = (state_12193[25]);var inst_12168 = (state_12193[2]);var inst_12169 = cljs.core.next.call(null,inst_12152);var inst_12133 = inst_12169;var inst_12134 = null;var inst_12135 = 0;var inst_12136 = 0;var state_12193__$1 = (function (){var statearr_12230 = state_12193;(statearr_12230[20] = inst_12135);
(statearr_12230[27] = inst_12168);
(statearr_12230[21] = inst_12133);
(statearr_12230[11] = inst_12136);
(statearr_12230[12] = inst_12134);
return statearr_12230;
})();var statearr_12231_12302 = state_12193__$1;(statearr_12231_12302[2] = null);
(statearr_12231_12302[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 43))
{var state_12193__$1 = state_12193;var statearr_12232_12303 = state_12193__$1;(statearr_12232_12303[2] = null);
(statearr_12232_12303[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 29))
{var inst_12177 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12233_12304 = state_12193__$1;(statearr_12233_12304[2] = inst_12177);
(statearr_12233_12304[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 44))
{var inst_12186 = (state_12193[2]);var state_12193__$1 = (function (){var statearr_12234 = state_12193;(statearr_12234[28] = inst_12186);
return statearr_12234;
})();var statearr_12235_12305 = state_12193__$1;(statearr_12235_12305[2] = null);
(statearr_12235_12305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 6))
{var inst_12125 = (state_12193[29]);var inst_12124 = cljs.core.deref.call(null,cs);var inst_12125__$1 = cljs.core.keys.call(null,inst_12124);var inst_12126 = cljs.core.count.call(null,inst_12125__$1);var inst_12127 = cljs.core.reset_BANG_.call(null,dctr,inst_12126);var inst_12132 = cljs.core.seq.call(null,inst_12125__$1);var inst_12133 = inst_12132;var inst_12134 = null;var inst_12135 = 0;var inst_12136 = 0;var state_12193__$1 = (function (){var statearr_12236 = state_12193;(statearr_12236[20] = inst_12135);
(statearr_12236[29] = inst_12125__$1);
(statearr_12236[21] = inst_12133);
(statearr_12236[30] = inst_12127);
(statearr_12236[11] = inst_12136);
(statearr_12236[12] = inst_12134);
return statearr_12236;
})();var statearr_12237_12306 = state_12193__$1;(statearr_12237_12306[2] = null);
(statearr_12237_12306[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 28))
{var inst_12152 = (state_12193[25]);var inst_12133 = (state_12193[21]);var inst_12152__$1 = cljs.core.seq.call(null,inst_12133);var state_12193__$1 = (function (){var statearr_12238 = state_12193;(statearr_12238[25] = inst_12152__$1);
return statearr_12238;
})();if(inst_12152__$1)
{var statearr_12239_12307 = state_12193__$1;(statearr_12239_12307[1] = 33);
} else
{var statearr_12240_12308 = state_12193__$1;(statearr_12240_12308[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 25))
{var inst_12135 = (state_12193[20]);var inst_12136 = (state_12193[11]);var inst_12138 = (inst_12136 < inst_12135);var inst_12139 = inst_12138;var state_12193__$1 = state_12193;if(cljs.core.truth_(inst_12139))
{var statearr_12241_12309 = state_12193__$1;(statearr_12241_12309[1] = 27);
} else
{var statearr_12242_12310 = state_12193__$1;(statearr_12242_12310[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 34))
{var state_12193__$1 = state_12193;var statearr_12243_12311 = state_12193__$1;(statearr_12243_12311[2] = null);
(statearr_12243_12311[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 17))
{var state_12193__$1 = state_12193;var statearr_12244_12312 = state_12193__$1;(statearr_12244_12312[2] = null);
(statearr_12244_12312[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 3))
{var inst_12191 = (state_12193[2]);var state_12193__$1 = state_12193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12193__$1,inst_12191);
} else
{if((state_val_12194 === 12))
{var inst_12120 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12245_12313 = state_12193__$1;(statearr_12245_12313[2] = inst_12120);
(statearr_12245_12313[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 2))
{var state_12193__$1 = state_12193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12193__$1,4,ch);
} else
{if((state_val_12194 === 23))
{var state_12193__$1 = state_12193;var statearr_12246_12314 = state_12193__$1;(statearr_12246_12314[2] = null);
(statearr_12246_12314[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 35))
{var inst_12175 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12247_12315 = state_12193__$1;(statearr_12247_12315[2] = inst_12175);
(statearr_12247_12315[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 19))
{var inst_12094 = (state_12193[7]);var inst_12098 = cljs.core.chunk_first.call(null,inst_12094);var inst_12099 = cljs.core.chunk_rest.call(null,inst_12094);var inst_12100 = cljs.core.count.call(null,inst_12098);var inst_12074 = inst_12099;var inst_12075 = inst_12098;var inst_12076 = inst_12100;var inst_12077 = 0;var state_12193__$1 = (function (){var statearr_12248 = state_12193;(statearr_12248[14] = inst_12077);
(statearr_12248[15] = inst_12075);
(statearr_12248[16] = inst_12076);
(statearr_12248[17] = inst_12074);
return statearr_12248;
})();var statearr_12249_12316 = state_12193__$1;(statearr_12249_12316[2] = null);
(statearr_12249_12316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 11))
{var inst_12094 = (state_12193[7]);var inst_12074 = (state_12193[17]);var inst_12094__$1 = cljs.core.seq.call(null,inst_12074);var state_12193__$1 = (function (){var statearr_12250 = state_12193;(statearr_12250[7] = inst_12094__$1);
return statearr_12250;
})();if(inst_12094__$1)
{var statearr_12251_12317 = state_12193__$1;(statearr_12251_12317[1] = 16);
} else
{var statearr_12252_12318 = state_12193__$1;(statearr_12252_12318[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 9))
{var inst_12122 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12253_12319 = state_12193__$1;(statearr_12253_12319[2] = inst_12122);
(statearr_12253_12319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 5))
{var inst_12072 = cljs.core.deref.call(null,cs);var inst_12073 = cljs.core.seq.call(null,inst_12072);var inst_12074 = inst_12073;var inst_12075 = null;var inst_12076 = 0;var inst_12077 = 0;var state_12193__$1 = (function (){var statearr_12254 = state_12193;(statearr_12254[14] = inst_12077);
(statearr_12254[15] = inst_12075);
(statearr_12254[16] = inst_12076);
(statearr_12254[17] = inst_12074);
return statearr_12254;
})();var statearr_12255_12320 = state_12193__$1;(statearr_12255_12320[2] = null);
(statearr_12255_12320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 14))
{var state_12193__$1 = state_12193;var statearr_12256_12321 = state_12193__$1;(statearr_12256_12321[2] = null);
(statearr_12256_12321[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 45))
{var inst_12183 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12257_12322 = state_12193__$1;(statearr_12257_12322[2] = inst_12183);
(statearr_12257_12322[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 26))
{var inst_12125 = (state_12193[29]);var inst_12179 = (state_12193[2]);var inst_12180 = cljs.core.seq.call(null,inst_12125);var state_12193__$1 = (function (){var statearr_12258 = state_12193;(statearr_12258[31] = inst_12179);
return statearr_12258;
})();if(inst_12180)
{var statearr_12259_12323 = state_12193__$1;(statearr_12259_12323[1] = 42);
} else
{var statearr_12260_12324 = state_12193__$1;(statearr_12260_12324[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 16))
{var inst_12094 = (state_12193[7]);var inst_12096 = cljs.core.chunked_seq_QMARK_.call(null,inst_12094);var state_12193__$1 = state_12193;if(inst_12096)
{var statearr_12261_12325 = state_12193__$1;(statearr_12261_12325[1] = 19);
} else
{var statearr_12262_12326 = state_12193__$1;(statearr_12262_12326[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 38))
{var inst_12172 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12263_12327 = state_12193__$1;(statearr_12263_12327[2] = inst_12172);
(statearr_12263_12327[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 30))
{var state_12193__$1 = state_12193;var statearr_12264_12328 = state_12193__$1;(statearr_12264_12328[2] = null);
(statearr_12264_12328[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 10))
{var inst_12077 = (state_12193[14]);var inst_12075 = (state_12193[15]);var inst_12083 = cljs.core._nth.call(null,inst_12075,inst_12077);var inst_12084 = cljs.core.nth.call(null,inst_12083,0,null);var inst_12085 = cljs.core.nth.call(null,inst_12083,1,null);var state_12193__$1 = (function (){var statearr_12265 = state_12193;(statearr_12265[26] = inst_12084);
return statearr_12265;
})();if(cljs.core.truth_(inst_12085))
{var statearr_12266_12329 = state_12193__$1;(statearr_12266_12329[1] = 13);
} else
{var statearr_12267_12330 = state_12193__$1;(statearr_12267_12330[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 18))
{var inst_12118 = (state_12193[2]);var state_12193__$1 = state_12193;var statearr_12268_12331 = state_12193__$1;(statearr_12268_12331[2] = inst_12118);
(statearr_12268_12331[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 42))
{var state_12193__$1 = state_12193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12193__$1,45,dchan);
} else
{if((state_val_12194 === 37))
{var inst_12152 = (state_12193[25]);var inst_12065 = (state_12193[9]);var inst_12161 = (state_12193[23]);var inst_12161__$1 = cljs.core.first.call(null,inst_12152);var inst_12162 = cljs.core.async.put_BANG_.call(null,inst_12161__$1,inst_12065,done);var state_12193__$1 = (function (){var statearr_12269 = state_12193;(statearr_12269[23] = inst_12161__$1);
return statearr_12269;
})();if(cljs.core.truth_(inst_12162))
{var statearr_12270_12332 = state_12193__$1;(statearr_12270_12332[1] = 39);
} else
{var statearr_12271_12333 = state_12193__$1;(statearr_12271_12333[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12194 === 8))
{var inst_12077 = (state_12193[14]);var inst_12076 = (state_12193[16]);var inst_12079 = (inst_12077 < inst_12076);var inst_12080 = inst_12079;var state_12193__$1 = state_12193;if(cljs.core.truth_(inst_12080))
{var statearr_12272_12334 = state_12193__$1;(statearr_12272_12334[1] = 10);
} else
{var statearr_12273_12335 = state_12193__$1;(statearr_12273_12335[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___12281,cs,m,dchan,dctr,done))
;return ((function (switch__6404__auto__,c__6419__auto___12281,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_12277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12277[0] = state_machine__6405__auto__);
(statearr_12277[1] = 1);
return statearr_12277;
});
var state_machine__6405__auto____1 = (function (state_12193){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_12193);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e12278){if((e12278 instanceof Object))
{var ex__6408__auto__ = e12278;var statearr_12279_12336 = state_12193;(statearr_12279_12336[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12337 = state_12193;
state_12193 = G__12337;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_12193){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_12193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___12281,cs,m,dchan,dctr,done))
})();var state__6421__auto__ = (function (){var statearr_12280 = f__6420__auto__.call(null);(statearr_12280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___12281);
return statearr_12280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___12281,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12339 = {};return obj12339;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12459 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12459 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12460){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12460 = meta12460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12459.cljs$lang$type = true;
cljs.core.async.t12459.cljs$lang$ctorStr = "cljs.core.async/t12459";
cljs.core.async.t12459.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12459");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12459.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12459.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12461){var self__ = this;
var _12461__$1 = this;return self__.meta12460;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12461,meta12460__$1){var self__ = this;
var _12461__$1 = this;return (new cljs.core.async.t12459(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12460__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12459 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12459(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12460){return (new cljs.core.async.t12459(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12460));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12459(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6419__auto___12578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___12578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___12578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12531){var state_val_12532 = (state_12531[1]);if((state_val_12532 === 7))
{var inst_12475 = (state_12531[7]);var inst_12480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12475);var state_12531__$1 = state_12531;var statearr_12533_12579 = state_12531__$1;(statearr_12533_12579[2] = inst_12480);
(statearr_12533_12579[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 20))
{var inst_12490 = (state_12531[8]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12531__$1,23,out,inst_12490);
} else
{if((state_val_12532 === 1))
{var inst_12465 = (state_12531[9]);var inst_12465__$1 = calc_state.call(null);var inst_12466 = cljs.core.seq_QMARK_.call(null,inst_12465__$1);var state_12531__$1 = (function (){var statearr_12534 = state_12531;(statearr_12534[9] = inst_12465__$1);
return statearr_12534;
})();if(inst_12466)
{var statearr_12535_12580 = state_12531__$1;(statearr_12535_12580[1] = 2);
} else
{var statearr_12536_12581 = state_12531__$1;(statearr_12536_12581[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 24))
{var inst_12483 = (state_12531[10]);var inst_12475 = inst_12483;var state_12531__$1 = (function (){var statearr_12537 = state_12531;(statearr_12537[7] = inst_12475);
return statearr_12537;
})();var statearr_12538_12582 = state_12531__$1;(statearr_12538_12582[2] = null);
(statearr_12538_12582[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 4))
{var inst_12465 = (state_12531[9]);var inst_12471 = (state_12531[2]);var inst_12472 = cljs.core.get.call(null,inst_12471,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12473 = cljs.core.get.call(null,inst_12471,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12474 = cljs.core.get.call(null,inst_12471,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12475 = inst_12465;var state_12531__$1 = (function (){var statearr_12539 = state_12531;(statearr_12539[7] = inst_12475);
(statearr_12539[11] = inst_12474);
(statearr_12539[12] = inst_12473);
(statearr_12539[13] = inst_12472);
return statearr_12539;
})();var statearr_12540_12583 = state_12531__$1;(statearr_12540_12583[2] = null);
(statearr_12540_12583[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 15))
{var state_12531__$1 = state_12531;var statearr_12541_12584 = state_12531__$1;(statearr_12541_12584[2] = null);
(statearr_12541_12584[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 21))
{var inst_12483 = (state_12531[10]);var inst_12475 = inst_12483;var state_12531__$1 = (function (){var statearr_12542 = state_12531;(statearr_12542[7] = inst_12475);
return statearr_12542;
})();var statearr_12543_12585 = state_12531__$1;(statearr_12543_12585[2] = null);
(statearr_12543_12585[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 13))
{var inst_12527 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12544_12586 = state_12531__$1;(statearr_12544_12586[2] = inst_12527);
(statearr_12544_12586[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 22))
{var inst_12525 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12545_12587 = state_12531__$1;(statearr_12545_12587[2] = inst_12525);
(statearr_12545_12587[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 6))
{var inst_12529 = (state_12531[2]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12531__$1,inst_12529);
} else
{if((state_val_12532 === 25))
{var state_12531__$1 = state_12531;var statearr_12546_12588 = state_12531__$1;(statearr_12546_12588[2] = null);
(statearr_12546_12588[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 17))
{var inst_12505 = (state_12531[14]);var state_12531__$1 = state_12531;var statearr_12547_12589 = state_12531__$1;(statearr_12547_12589[2] = inst_12505);
(statearr_12547_12589[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 3))
{var inst_12465 = (state_12531[9]);var state_12531__$1 = state_12531;var statearr_12548_12590 = state_12531__$1;(statearr_12548_12590[2] = inst_12465);
(statearr_12548_12590[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 12))
{var inst_12491 = (state_12531[15]);var inst_12505 = (state_12531[14]);var inst_12486 = (state_12531[16]);var inst_12505__$1 = inst_12486.call(null,inst_12491);var state_12531__$1 = (function (){var statearr_12549 = state_12531;(statearr_12549[14] = inst_12505__$1);
return statearr_12549;
})();if(cljs.core.truth_(inst_12505__$1))
{var statearr_12550_12591 = state_12531__$1;(statearr_12550_12591[1] = 17);
} else
{var statearr_12551_12592 = state_12531__$1;(statearr_12551_12592[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 2))
{var inst_12465 = (state_12531[9]);var inst_12468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12465);var state_12531__$1 = state_12531;var statearr_12552_12593 = state_12531__$1;(statearr_12552_12593[2] = inst_12468);
(statearr_12552_12593[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 23))
{var inst_12516 = (state_12531[2]);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12516))
{var statearr_12553_12594 = state_12531__$1;(statearr_12553_12594[1] = 24);
} else
{var statearr_12554_12595 = state_12531__$1;(statearr_12554_12595[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 19))
{var inst_12513 = (state_12531[2]);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12513))
{var statearr_12555_12596 = state_12531__$1;(statearr_12555_12596[1] = 20);
} else
{var statearr_12556_12597 = state_12531__$1;(statearr_12556_12597[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 11))
{var inst_12490 = (state_12531[8]);var inst_12496 = (inst_12490 == null);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12496))
{var statearr_12557_12598 = state_12531__$1;(statearr_12557_12598[1] = 14);
} else
{var statearr_12558_12599 = state_12531__$1;(statearr_12558_12599[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 9))
{var inst_12483 = (state_12531[10]);var inst_12483__$1 = (state_12531[2]);var inst_12484 = cljs.core.get.call(null,inst_12483__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12485 = cljs.core.get.call(null,inst_12483__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12486 = cljs.core.get.call(null,inst_12483__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12531__$1 = (function (){var statearr_12559 = state_12531;(statearr_12559[17] = inst_12485);
(statearr_12559[16] = inst_12486);
(statearr_12559[10] = inst_12483__$1);
return statearr_12559;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12531__$1,10,inst_12484);
} else
{if((state_val_12532 === 5))
{var inst_12475 = (state_12531[7]);var inst_12478 = cljs.core.seq_QMARK_.call(null,inst_12475);var state_12531__$1 = state_12531;if(inst_12478)
{var statearr_12560_12600 = state_12531__$1;(statearr_12560_12600[1] = 7);
} else
{var statearr_12561_12601 = state_12531__$1;(statearr_12561_12601[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 14))
{var inst_12491 = (state_12531[15]);var inst_12498 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12491);var state_12531__$1 = state_12531;var statearr_12562_12602 = state_12531__$1;(statearr_12562_12602[2] = inst_12498);
(statearr_12562_12602[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 26))
{var inst_12521 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12563_12603 = state_12531__$1;(statearr_12563_12603[2] = inst_12521);
(statearr_12563_12603[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 16))
{var inst_12501 = (state_12531[2]);var inst_12502 = calc_state.call(null);var inst_12475 = inst_12502;var state_12531__$1 = (function (){var statearr_12564 = state_12531;(statearr_12564[7] = inst_12475);
(statearr_12564[18] = inst_12501);
return statearr_12564;
})();var statearr_12565_12604 = state_12531__$1;(statearr_12565_12604[2] = null);
(statearr_12565_12604[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 10))
{var inst_12490 = (state_12531[8]);var inst_12491 = (state_12531[15]);var inst_12489 = (state_12531[2]);var inst_12490__$1 = cljs.core.nth.call(null,inst_12489,0,null);var inst_12491__$1 = cljs.core.nth.call(null,inst_12489,1,null);var inst_12492 = (inst_12490__$1 == null);var inst_12493 = cljs.core._EQ_.call(null,inst_12491__$1,change);var inst_12494 = (inst_12492) || (inst_12493);var state_12531__$1 = (function (){var statearr_12566 = state_12531;(statearr_12566[8] = inst_12490__$1);
(statearr_12566[15] = inst_12491__$1);
return statearr_12566;
})();if(cljs.core.truth_(inst_12494))
{var statearr_12567_12605 = state_12531__$1;(statearr_12567_12605[1] = 11);
} else
{var statearr_12568_12606 = state_12531__$1;(statearr_12568_12606[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 18))
{var inst_12485 = (state_12531[17]);var inst_12491 = (state_12531[15]);var inst_12486 = (state_12531[16]);var inst_12508 = cljs.core.empty_QMARK_.call(null,inst_12486);var inst_12509 = inst_12485.call(null,inst_12491);var inst_12510 = cljs.core.not.call(null,inst_12509);var inst_12511 = (inst_12508) && (inst_12510);var state_12531__$1 = state_12531;var statearr_12569_12607 = state_12531__$1;(statearr_12569_12607[2] = inst_12511);
(statearr_12569_12607[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 8))
{var inst_12475 = (state_12531[7]);var state_12531__$1 = state_12531;var statearr_12570_12608 = state_12531__$1;(statearr_12570_12608[2] = inst_12475);
(statearr_12570_12608[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___12578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6404__auto__,c__6419__auto___12578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_12574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12574[0] = state_machine__6405__auto__);
(statearr_12574[1] = 1);
return statearr_12574;
});
var state_machine__6405__auto____1 = (function (state_12531){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_12531);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e12575){if((e12575 instanceof Object))
{var ex__6408__auto__ = e12575;var statearr_12576_12609 = state_12531;(statearr_12576_12609[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12610 = state_12531;
state_12531 = G__12610;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_12531){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_12531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___12578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6421__auto__ = (function (){var statearr_12577 = f__6420__auto__.call(null);(statearr_12577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___12578);
return statearr_12577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___12578,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12612 = {};return obj12612;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3481__auto__,mults){
return (function (p1__12613_SHARP_){if(cljs.core.truth_(p1__12613_SHARP_.call(null,topic)))
{return p1__12613_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12613_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12728 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12729){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12729 = meta12729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12728.cljs$lang$type = true;
cljs.core.async.t12728.cljs$lang$ctorStr = "cljs.core.async/t12728";
cljs.core.async.t12728.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12728");
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12728.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12730){var self__ = this;
var _12730__$1 = this;return self__.meta12729;
});})(mults,ensure_mult))
;
cljs.core.async.t12728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12730,meta12729__$1){var self__ = this;
var _12730__$1 = this;return (new cljs.core.async.t12728(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12729__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12728 = ((function (mults,ensure_mult){
return (function __GT_t12728(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12729){return (new cljs.core.async.t12728(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12729));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12728(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6419__auto___12842 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___12842,mults,ensure_mult,p){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___12842,mults,ensure_mult,p){
return (function (state_12798){var state_val_12799 = (state_12798[1]);if((state_val_12799 === 7))
{var inst_12794 = (state_12798[2]);var state_12798__$1 = state_12798;var statearr_12800_12843 = state_12798__$1;(statearr_12800_12843[2] = inst_12794);
(statearr_12800_12843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 20))
{var state_12798__$1 = state_12798;var statearr_12801_12844 = state_12798__$1;(statearr_12801_12844[2] = null);
(statearr_12801_12844[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 1))
{var state_12798__$1 = state_12798;var statearr_12802_12845 = state_12798__$1;(statearr_12802_12845[2] = null);
(statearr_12802_12845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 4))
{var inst_12733 = (state_12798[7]);var inst_12733__$1 = (state_12798[2]);var inst_12734 = (inst_12733__$1 == null);var state_12798__$1 = (function (){var statearr_12803 = state_12798;(statearr_12803[7] = inst_12733__$1);
return statearr_12803;
})();if(cljs.core.truth_(inst_12734))
{var statearr_12804_12846 = state_12798__$1;(statearr_12804_12846[1] = 5);
} else
{var statearr_12805_12847 = state_12798__$1;(statearr_12805_12847[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 15))
{var inst_12775 = (state_12798[2]);var state_12798__$1 = state_12798;var statearr_12806_12848 = state_12798__$1;(statearr_12806_12848[2] = inst_12775);
(statearr_12806_12848[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 21))
{var inst_12781 = (state_12798[8]);var inst_12789 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12781);var state_12798__$1 = state_12798;var statearr_12807_12849 = state_12798__$1;(statearr_12807_12849[2] = inst_12789);
(statearr_12807_12849[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 13))
{var inst_12757 = (state_12798[9]);var inst_12759 = cljs.core.chunked_seq_QMARK_.call(null,inst_12757);var state_12798__$1 = state_12798;if(inst_12759)
{var statearr_12808_12850 = state_12798__$1;(statearr_12808_12850[1] = 16);
} else
{var statearr_12809_12851 = state_12798__$1;(statearr_12809_12851[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 22))
{var inst_12791 = (state_12798[2]);var state_12798__$1 = (function (){var statearr_12810 = state_12798;(statearr_12810[10] = inst_12791);
return statearr_12810;
})();var statearr_12811_12852 = state_12798__$1;(statearr_12811_12852[2] = null);
(statearr_12811_12852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 6))
{var inst_12781 = (state_12798[8]);var inst_12733 = (state_12798[7]);var inst_12781__$1 = topic_fn.call(null,inst_12733);var inst_12782 = cljs.core.deref.call(null,mults);var inst_12783 = cljs.core.get.call(null,inst_12782,inst_12781__$1);var inst_12784 = cljs.core.async.muxch_STAR_.call(null,inst_12783);var state_12798__$1 = (function (){var statearr_12812 = state_12798;(statearr_12812[8] = inst_12781__$1);
return statearr_12812;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12798__$1,19,inst_12784,inst_12733);
} else
{if((state_val_12799 === 17))
{var inst_12757 = (state_12798[9]);var inst_12766 = cljs.core.first.call(null,inst_12757);var inst_12767 = cljs.core.async.muxch_STAR_.call(null,inst_12766);var inst_12768 = cljs.core.async.close_BANG_.call(null,inst_12767);var inst_12769 = cljs.core.next.call(null,inst_12757);var inst_12743 = inst_12769;var inst_12744 = null;var inst_12745 = 0;var inst_12746 = 0;var state_12798__$1 = (function (){var statearr_12813 = state_12798;(statearr_12813[11] = inst_12768);
(statearr_12813[12] = inst_12745);
(statearr_12813[13] = inst_12746);
(statearr_12813[14] = inst_12743);
(statearr_12813[15] = inst_12744);
return statearr_12813;
})();var statearr_12814_12853 = state_12798__$1;(statearr_12814_12853[2] = null);
(statearr_12814_12853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 3))
{var inst_12796 = (state_12798[2]);var state_12798__$1 = state_12798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12798__$1,inst_12796);
} else
{if((state_val_12799 === 12))
{var inst_12777 = (state_12798[2]);var state_12798__$1 = state_12798;var statearr_12815_12854 = state_12798__$1;(statearr_12815_12854[2] = inst_12777);
(statearr_12815_12854[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 2))
{var state_12798__$1 = state_12798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12798__$1,4,ch);
} else
{if((state_val_12799 === 19))
{var inst_12786 = (state_12798[2]);var state_12798__$1 = state_12798;if(cljs.core.truth_(inst_12786))
{var statearr_12816_12855 = state_12798__$1;(statearr_12816_12855[1] = 20);
} else
{var statearr_12817_12856 = state_12798__$1;(statearr_12817_12856[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 11))
{var inst_12757 = (state_12798[9]);var inst_12743 = (state_12798[14]);var inst_12757__$1 = cljs.core.seq.call(null,inst_12743);var state_12798__$1 = (function (){var statearr_12818 = state_12798;(statearr_12818[9] = inst_12757__$1);
return statearr_12818;
})();if(inst_12757__$1)
{var statearr_12819_12857 = state_12798__$1;(statearr_12819_12857[1] = 13);
} else
{var statearr_12820_12858 = state_12798__$1;(statearr_12820_12858[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 9))
{var inst_12779 = (state_12798[2]);var state_12798__$1 = state_12798;var statearr_12821_12859 = state_12798__$1;(statearr_12821_12859[2] = inst_12779);
(statearr_12821_12859[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 5))
{var inst_12740 = cljs.core.deref.call(null,mults);var inst_12741 = cljs.core.vals.call(null,inst_12740);var inst_12742 = cljs.core.seq.call(null,inst_12741);var inst_12743 = inst_12742;var inst_12744 = null;var inst_12745 = 0;var inst_12746 = 0;var state_12798__$1 = (function (){var statearr_12822 = state_12798;(statearr_12822[12] = inst_12745);
(statearr_12822[13] = inst_12746);
(statearr_12822[14] = inst_12743);
(statearr_12822[15] = inst_12744);
return statearr_12822;
})();var statearr_12823_12860 = state_12798__$1;(statearr_12823_12860[2] = null);
(statearr_12823_12860[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 14))
{var state_12798__$1 = state_12798;var statearr_12827_12861 = state_12798__$1;(statearr_12827_12861[2] = null);
(statearr_12827_12861[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 16))
{var inst_12757 = (state_12798[9]);var inst_12761 = cljs.core.chunk_first.call(null,inst_12757);var inst_12762 = cljs.core.chunk_rest.call(null,inst_12757);var inst_12763 = cljs.core.count.call(null,inst_12761);var inst_12743 = inst_12762;var inst_12744 = inst_12761;var inst_12745 = inst_12763;var inst_12746 = 0;var state_12798__$1 = (function (){var statearr_12828 = state_12798;(statearr_12828[12] = inst_12745);
(statearr_12828[13] = inst_12746);
(statearr_12828[14] = inst_12743);
(statearr_12828[15] = inst_12744);
return statearr_12828;
})();var statearr_12829_12862 = state_12798__$1;(statearr_12829_12862[2] = null);
(statearr_12829_12862[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 10))
{var inst_12745 = (state_12798[12]);var inst_12746 = (state_12798[13]);var inst_12743 = (state_12798[14]);var inst_12744 = (state_12798[15]);var inst_12751 = cljs.core._nth.call(null,inst_12744,inst_12746);var inst_12752 = cljs.core.async.muxch_STAR_.call(null,inst_12751);var inst_12753 = cljs.core.async.close_BANG_.call(null,inst_12752);var inst_12754 = (inst_12746 + 1);var tmp12824 = inst_12745;var tmp12825 = inst_12743;var tmp12826 = inst_12744;var inst_12743__$1 = tmp12825;var inst_12744__$1 = tmp12826;var inst_12745__$1 = tmp12824;var inst_12746__$1 = inst_12754;var state_12798__$1 = (function (){var statearr_12830 = state_12798;(statearr_12830[12] = inst_12745__$1);
(statearr_12830[13] = inst_12746__$1);
(statearr_12830[14] = inst_12743__$1);
(statearr_12830[16] = inst_12753);
(statearr_12830[15] = inst_12744__$1);
return statearr_12830;
})();var statearr_12831_12863 = state_12798__$1;(statearr_12831_12863[2] = null);
(statearr_12831_12863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 18))
{var inst_12772 = (state_12798[2]);var state_12798__$1 = state_12798;var statearr_12832_12864 = state_12798__$1;(statearr_12832_12864[2] = inst_12772);
(statearr_12832_12864[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12799 === 8))
{var inst_12745 = (state_12798[12]);var inst_12746 = (state_12798[13]);var inst_12748 = (inst_12746 < inst_12745);var inst_12749 = inst_12748;var state_12798__$1 = state_12798;if(cljs.core.truth_(inst_12749))
{var statearr_12833_12865 = state_12798__$1;(statearr_12833_12865[1] = 10);
} else
{var statearr_12834_12866 = state_12798__$1;(statearr_12834_12866[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___12842,mults,ensure_mult,p))
;return ((function (switch__6404__auto__,c__6419__auto___12842,mults,ensure_mult,p){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_12838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12838[0] = state_machine__6405__auto__);
(statearr_12838[1] = 1);
return statearr_12838;
});
var state_machine__6405__auto____1 = (function (state_12798){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_12798);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e12839){if((e12839 instanceof Object))
{var ex__6408__auto__ = e12839;var statearr_12840_12867 = state_12798;(statearr_12840_12867[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12798);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12868 = state_12798;
state_12798 = G__12868;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_12798){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_12798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___12842,mults,ensure_mult,p))
})();var state__6421__auto__ = (function (){var statearr_12841 = f__6420__auto__.call(null);(statearr_12841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___12842);
return statearr_12841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___12842,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6419__auto___13005 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___13005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___13005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12975){var state_val_12976 = (state_12975[1]);if((state_val_12976 === 7))
{var state_12975__$1 = state_12975;var statearr_12977_13006 = state_12975__$1;(statearr_12977_13006[2] = null);
(statearr_12977_13006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 1))
{var state_12975__$1 = state_12975;var statearr_12978_13007 = state_12975__$1;(statearr_12978_13007[2] = null);
(statearr_12978_13007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 4))
{var inst_12939 = (state_12975[7]);var inst_12941 = (inst_12939 < cnt);var state_12975__$1 = state_12975;if(cljs.core.truth_(inst_12941))
{var statearr_12979_13008 = state_12975__$1;(statearr_12979_13008[1] = 6);
} else
{var statearr_12980_13009 = state_12975__$1;(statearr_12980_13009[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 15))
{var inst_12971 = (state_12975[2]);var state_12975__$1 = state_12975;var statearr_12981_13010 = state_12975__$1;(statearr_12981_13010[2] = inst_12971);
(statearr_12981_13010[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 13))
{var inst_12964 = cljs.core.async.close_BANG_.call(null,out);var state_12975__$1 = state_12975;var statearr_12982_13011 = state_12975__$1;(statearr_12982_13011[2] = inst_12964);
(statearr_12982_13011[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 6))
{var state_12975__$1 = state_12975;var statearr_12983_13012 = state_12975__$1;(statearr_12983_13012[2] = null);
(statearr_12983_13012[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 3))
{var inst_12973 = (state_12975[2]);var state_12975__$1 = state_12975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12975__$1,inst_12973);
} else
{if((state_val_12976 === 12))
{var inst_12961 = (state_12975[8]);var inst_12961__$1 = (state_12975[2]);var inst_12962 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12961__$1);var state_12975__$1 = (function (){var statearr_12984 = state_12975;(statearr_12984[8] = inst_12961__$1);
return statearr_12984;
})();if(cljs.core.truth_(inst_12962))
{var statearr_12985_13013 = state_12975__$1;(statearr_12985_13013[1] = 13);
} else
{var statearr_12986_13014 = state_12975__$1;(statearr_12986_13014[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 2))
{var inst_12938 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12939 = 0;var state_12975__$1 = (function (){var statearr_12987 = state_12975;(statearr_12987[9] = inst_12938);
(statearr_12987[7] = inst_12939);
return statearr_12987;
})();var statearr_12988_13015 = state_12975__$1;(statearr_12988_13015[2] = null);
(statearr_12988_13015[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 11))
{var inst_12939 = (state_12975[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12975,10,Object,null,9);var inst_12948 = chs__$1.call(null,inst_12939);var inst_12949 = done.call(null,inst_12939);var inst_12950 = cljs.core.async.take_BANG_.call(null,inst_12948,inst_12949);var state_12975__$1 = state_12975;var statearr_12989_13016 = state_12975__$1;(statearr_12989_13016[2] = inst_12950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12975__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 9))
{var inst_12939 = (state_12975[7]);var inst_12952 = (state_12975[2]);var inst_12953 = (inst_12939 + 1);var inst_12939__$1 = inst_12953;var state_12975__$1 = (function (){var statearr_12990 = state_12975;(statearr_12990[10] = inst_12952);
(statearr_12990[7] = inst_12939__$1);
return statearr_12990;
})();var statearr_12991_13017 = state_12975__$1;(statearr_12991_13017[2] = null);
(statearr_12991_13017[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 5))
{var inst_12959 = (state_12975[2]);var state_12975__$1 = (function (){var statearr_12992 = state_12975;(statearr_12992[11] = inst_12959);
return statearr_12992;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12975__$1,12,dchan);
} else
{if((state_val_12976 === 14))
{var inst_12961 = (state_12975[8]);var inst_12966 = cljs.core.apply.call(null,f,inst_12961);var state_12975__$1 = state_12975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12975__$1,16,out,inst_12966);
} else
{if((state_val_12976 === 16))
{var inst_12968 = (state_12975[2]);var state_12975__$1 = (function (){var statearr_12993 = state_12975;(statearr_12993[12] = inst_12968);
return statearr_12993;
})();var statearr_12994_13018 = state_12975__$1;(statearr_12994_13018[2] = null);
(statearr_12994_13018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 10))
{var inst_12943 = (state_12975[2]);var inst_12944 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12975__$1 = (function (){var statearr_12995 = state_12975;(statearr_12995[13] = inst_12943);
return statearr_12995;
})();var statearr_12996_13019 = state_12975__$1;(statearr_12996_13019[2] = inst_12944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12975__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12976 === 8))
{var inst_12957 = (state_12975[2]);var state_12975__$1 = state_12975;var statearr_12997_13020 = state_12975__$1;(statearr_12997_13020[2] = inst_12957);
(statearr_12997_13020[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___13005,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6404__auto__,c__6419__auto___13005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13001[0] = state_machine__6405__auto__);
(statearr_13001[1] = 1);
return statearr_13001;
});
var state_machine__6405__auto____1 = (function (state_12975){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_12975);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13002){if((e13002 instanceof Object))
{var ex__6408__auto__ = e13002;var statearr_13003_13021 = state_12975;(statearr_13003_13021[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13022 = state_12975;
state_12975 = G__13022;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_12975){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_12975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___13005,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6421__auto__ = (function (){var statearr_13004 = f__6420__auto__.call(null);(statearr_13004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___13005);
return statearr_13004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___13005,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6419__auto___13130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___13130,out){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___13130,out){
return (function (state_13106){var state_val_13107 = (state_13106[1]);if((state_val_13107 === 7))
{var inst_13086 = (state_13106[7]);var inst_13085 = (state_13106[8]);var inst_13085__$1 = (state_13106[2]);var inst_13086__$1 = cljs.core.nth.call(null,inst_13085__$1,0,null);var inst_13087 = cljs.core.nth.call(null,inst_13085__$1,1,null);var inst_13088 = (inst_13086__$1 == null);var state_13106__$1 = (function (){var statearr_13108 = state_13106;(statearr_13108[7] = inst_13086__$1);
(statearr_13108[9] = inst_13087);
(statearr_13108[8] = inst_13085__$1);
return statearr_13108;
})();if(cljs.core.truth_(inst_13088))
{var statearr_13109_13131 = state_13106__$1;(statearr_13109_13131[1] = 8);
} else
{var statearr_13110_13132 = state_13106__$1;(statearr_13110_13132[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 1))
{var inst_13077 = cljs.core.vec.call(null,chs);var inst_13078 = inst_13077;var state_13106__$1 = (function (){var statearr_13111 = state_13106;(statearr_13111[10] = inst_13078);
return statearr_13111;
})();var statearr_13112_13133 = state_13106__$1;(statearr_13112_13133[2] = null);
(statearr_13112_13133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 4))
{var inst_13078 = (state_13106[10]);var state_13106__$1 = state_13106;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13106__$1,7,inst_13078);
} else
{if((state_val_13107 === 6))
{var inst_13102 = (state_13106[2]);var state_13106__$1 = state_13106;var statearr_13113_13134 = state_13106__$1;(statearr_13113_13134[2] = inst_13102);
(statearr_13113_13134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 3))
{var inst_13104 = (state_13106[2]);var state_13106__$1 = state_13106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13106__$1,inst_13104);
} else
{if((state_val_13107 === 2))
{var inst_13078 = (state_13106[10]);var inst_13080 = cljs.core.count.call(null,inst_13078);var inst_13081 = (inst_13080 > 0);var state_13106__$1 = state_13106;if(cljs.core.truth_(inst_13081))
{var statearr_13115_13135 = state_13106__$1;(statearr_13115_13135[1] = 4);
} else
{var statearr_13116_13136 = state_13106__$1;(statearr_13116_13136[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 11))
{var inst_13078 = (state_13106[10]);var inst_13095 = (state_13106[2]);var tmp13114 = inst_13078;var inst_13078__$1 = tmp13114;var state_13106__$1 = (function (){var statearr_13117 = state_13106;(statearr_13117[11] = inst_13095);
(statearr_13117[10] = inst_13078__$1);
return statearr_13117;
})();var statearr_13118_13137 = state_13106__$1;(statearr_13118_13137[2] = null);
(statearr_13118_13137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 9))
{var inst_13086 = (state_13106[7]);var state_13106__$1 = state_13106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13106__$1,11,out,inst_13086);
} else
{if((state_val_13107 === 5))
{var inst_13100 = cljs.core.async.close_BANG_.call(null,out);var state_13106__$1 = state_13106;var statearr_13119_13138 = state_13106__$1;(statearr_13119_13138[2] = inst_13100);
(statearr_13119_13138[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 10))
{var inst_13098 = (state_13106[2]);var state_13106__$1 = state_13106;var statearr_13120_13139 = state_13106__$1;(statearr_13120_13139[2] = inst_13098);
(statearr_13120_13139[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13107 === 8))
{var inst_13086 = (state_13106[7]);var inst_13078 = (state_13106[10]);var inst_13087 = (state_13106[9]);var inst_13085 = (state_13106[8]);var inst_13090 = (function (){var c = inst_13087;var v = inst_13086;var vec__13083 = inst_13085;var cs = inst_13078;return ((function (c,v,vec__13083,cs,inst_13086,inst_13078,inst_13087,inst_13085,state_val_13107,c__6419__auto___13130,out){
return (function (p1__13023_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13023_SHARP_);
});
;})(c,v,vec__13083,cs,inst_13086,inst_13078,inst_13087,inst_13085,state_val_13107,c__6419__auto___13130,out))
})();var inst_13091 = cljs.core.filterv.call(null,inst_13090,inst_13078);var inst_13078__$1 = inst_13091;var state_13106__$1 = (function (){var statearr_13121 = state_13106;(statearr_13121[10] = inst_13078__$1);
return statearr_13121;
})();var statearr_13122_13140 = state_13106__$1;(statearr_13122_13140[2] = null);
(statearr_13122_13140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___13130,out))
;return ((function (switch__6404__auto__,c__6419__auto___13130,out){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13126 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13126[0] = state_machine__6405__auto__);
(statearr_13126[1] = 1);
return statearr_13126;
});
var state_machine__6405__auto____1 = (function (state_13106){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13106);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13127){if((e13127 instanceof Object))
{var ex__6408__auto__ = e13127;var statearr_13128_13141 = state_13106;(statearr_13128_13141[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13142 = state_13106;
state_13106 = G__13142;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13106){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___13130,out))
})();var state__6421__auto__ = (function (){var statearr_13129 = f__6420__auto__.call(null);(statearr_13129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___13130);
return statearr_13129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___13130,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6419__auto___13235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___13235,out){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___13235,out){
return (function (state_13212){var state_val_13213 = (state_13212[1]);if((state_val_13213 === 7))
{var inst_13194 = (state_13212[7]);var inst_13194__$1 = (state_13212[2]);var inst_13195 = (inst_13194__$1 == null);var inst_13196 = cljs.core.not.call(null,inst_13195);var state_13212__$1 = (function (){var statearr_13214 = state_13212;(statearr_13214[7] = inst_13194__$1);
return statearr_13214;
})();if(inst_13196)
{var statearr_13215_13236 = state_13212__$1;(statearr_13215_13236[1] = 8);
} else
{var statearr_13216_13237 = state_13212__$1;(statearr_13216_13237[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 1))
{var inst_13189 = 0;var state_13212__$1 = (function (){var statearr_13217 = state_13212;(statearr_13217[8] = inst_13189);
return statearr_13217;
})();var statearr_13218_13238 = state_13212__$1;(statearr_13218_13238[2] = null);
(statearr_13218_13238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 4))
{var state_13212__$1 = state_13212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13212__$1,7,ch);
} else
{if((state_val_13213 === 6))
{var inst_13207 = (state_13212[2]);var state_13212__$1 = state_13212;var statearr_13219_13239 = state_13212__$1;(statearr_13219_13239[2] = inst_13207);
(statearr_13219_13239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 3))
{var inst_13209 = (state_13212[2]);var inst_13210 = cljs.core.async.close_BANG_.call(null,out);var state_13212__$1 = (function (){var statearr_13220 = state_13212;(statearr_13220[9] = inst_13209);
return statearr_13220;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13212__$1,inst_13210);
} else
{if((state_val_13213 === 2))
{var inst_13189 = (state_13212[8]);var inst_13191 = (inst_13189 < n);var state_13212__$1 = state_13212;if(cljs.core.truth_(inst_13191))
{var statearr_13221_13240 = state_13212__$1;(statearr_13221_13240[1] = 4);
} else
{var statearr_13222_13241 = state_13212__$1;(statearr_13222_13241[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 11))
{var inst_13189 = (state_13212[8]);var inst_13199 = (state_13212[2]);var inst_13200 = (inst_13189 + 1);var inst_13189__$1 = inst_13200;var state_13212__$1 = (function (){var statearr_13223 = state_13212;(statearr_13223[8] = inst_13189__$1);
(statearr_13223[10] = inst_13199);
return statearr_13223;
})();var statearr_13224_13242 = state_13212__$1;(statearr_13224_13242[2] = null);
(statearr_13224_13242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 9))
{var state_13212__$1 = state_13212;var statearr_13225_13243 = state_13212__$1;(statearr_13225_13243[2] = null);
(statearr_13225_13243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 5))
{var state_13212__$1 = state_13212;var statearr_13226_13244 = state_13212__$1;(statearr_13226_13244[2] = null);
(statearr_13226_13244[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 10))
{var inst_13204 = (state_13212[2]);var state_13212__$1 = state_13212;var statearr_13227_13245 = state_13212__$1;(statearr_13227_13245[2] = inst_13204);
(statearr_13227_13245[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 8))
{var inst_13194 = (state_13212[7]);var state_13212__$1 = state_13212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13212__$1,11,out,inst_13194);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___13235,out))
;return ((function (switch__6404__auto__,c__6419__auto___13235,out){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13231 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13231[0] = state_machine__6405__auto__);
(statearr_13231[1] = 1);
return statearr_13231;
});
var state_machine__6405__auto____1 = (function (state_13212){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13212);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13232){if((e13232 instanceof Object))
{var ex__6408__auto__ = e13232;var statearr_13233_13246 = state_13212;(statearr_13233_13246[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13247 = state_13212;
state_13212 = G__13247;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13212){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___13235,out))
})();var state__6421__auto__ = (function (){var statearr_13234 = f__6420__auto__.call(null);(statearr_13234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___13235);
return statearr_13234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___13235,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6419__auto___13344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___13344,out){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___13344,out){
return (function (state_13319){var state_val_13320 = (state_13319[1]);if((state_val_13320 === 7))
{var inst_13314 = (state_13319[2]);var state_13319__$1 = state_13319;var statearr_13321_13345 = state_13319__$1;(statearr_13321_13345[2] = inst_13314);
(statearr_13321_13345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 1))
{var inst_13296 = null;var state_13319__$1 = (function (){var statearr_13322 = state_13319;(statearr_13322[7] = inst_13296);
return statearr_13322;
})();var statearr_13323_13346 = state_13319__$1;(statearr_13323_13346[2] = null);
(statearr_13323_13346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 4))
{var inst_13299 = (state_13319[8]);var inst_13299__$1 = (state_13319[2]);var inst_13300 = (inst_13299__$1 == null);var inst_13301 = cljs.core.not.call(null,inst_13300);var state_13319__$1 = (function (){var statearr_13324 = state_13319;(statearr_13324[8] = inst_13299__$1);
return statearr_13324;
})();if(inst_13301)
{var statearr_13325_13347 = state_13319__$1;(statearr_13325_13347[1] = 5);
} else
{var statearr_13326_13348 = state_13319__$1;(statearr_13326_13348[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 6))
{var state_13319__$1 = state_13319;var statearr_13327_13349 = state_13319__$1;(statearr_13327_13349[2] = null);
(statearr_13327_13349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 3))
{var inst_13316 = (state_13319[2]);var inst_13317 = cljs.core.async.close_BANG_.call(null,out);var state_13319__$1 = (function (){var statearr_13328 = state_13319;(statearr_13328[9] = inst_13316);
return statearr_13328;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13319__$1,inst_13317);
} else
{if((state_val_13320 === 2))
{var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13319__$1,4,ch);
} else
{if((state_val_13320 === 11))
{var inst_13299 = (state_13319[8]);var inst_13308 = (state_13319[2]);var inst_13296 = inst_13299;var state_13319__$1 = (function (){var statearr_13329 = state_13319;(statearr_13329[7] = inst_13296);
(statearr_13329[10] = inst_13308);
return statearr_13329;
})();var statearr_13330_13350 = state_13319__$1;(statearr_13330_13350[2] = null);
(statearr_13330_13350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 9))
{var inst_13299 = (state_13319[8]);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,11,out,inst_13299);
} else
{if((state_val_13320 === 5))
{var inst_13296 = (state_13319[7]);var inst_13299 = (state_13319[8]);var inst_13303 = cljs.core._EQ_.call(null,inst_13299,inst_13296);var state_13319__$1 = state_13319;if(inst_13303)
{var statearr_13332_13351 = state_13319__$1;(statearr_13332_13351[1] = 8);
} else
{var statearr_13333_13352 = state_13319__$1;(statearr_13333_13352[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 10))
{var inst_13311 = (state_13319[2]);var state_13319__$1 = state_13319;var statearr_13334_13353 = state_13319__$1;(statearr_13334_13353[2] = inst_13311);
(statearr_13334_13353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13320 === 8))
{var inst_13296 = (state_13319[7]);var tmp13331 = inst_13296;var inst_13296__$1 = tmp13331;var state_13319__$1 = (function (){var statearr_13335 = state_13319;(statearr_13335[7] = inst_13296__$1);
return statearr_13335;
})();var statearr_13336_13354 = state_13319__$1;(statearr_13336_13354[2] = null);
(statearr_13336_13354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___13344,out))
;return ((function (switch__6404__auto__,c__6419__auto___13344,out){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13340 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13340[0] = state_machine__6405__auto__);
(statearr_13340[1] = 1);
return statearr_13340;
});
var state_machine__6405__auto____1 = (function (state_13319){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13341){if((e13341 instanceof Object))
{var ex__6408__auto__ = e13341;var statearr_13342_13355 = state_13319;(statearr_13342_13355[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13356 = state_13319;
state_13319 = G__13356;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13319){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___13344,out))
})();var state__6421__auto__ = (function (){var statearr_13343 = f__6420__auto__.call(null);(statearr_13343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___13344);
return statearr_13343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___13344,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6419__auto___13491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___13491,out){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___13491,out){
return (function (state_13461){var state_val_13462 = (state_13461[1]);if((state_val_13462 === 7))
{var inst_13457 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13463_13492 = state_13461__$1;(statearr_13463_13492[2] = inst_13457);
(statearr_13463_13492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 1))
{var inst_13424 = (new Array(n));var inst_13425 = inst_13424;var inst_13426 = 0;var state_13461__$1 = (function (){var statearr_13464 = state_13461;(statearr_13464[7] = inst_13426);
(statearr_13464[8] = inst_13425);
return statearr_13464;
})();var statearr_13465_13493 = state_13461__$1;(statearr_13465_13493[2] = null);
(statearr_13465_13493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 4))
{var inst_13429 = (state_13461[9]);var inst_13429__$1 = (state_13461[2]);var inst_13430 = (inst_13429__$1 == null);var inst_13431 = cljs.core.not.call(null,inst_13430);var state_13461__$1 = (function (){var statearr_13466 = state_13461;(statearr_13466[9] = inst_13429__$1);
return statearr_13466;
})();if(inst_13431)
{var statearr_13467_13494 = state_13461__$1;(statearr_13467_13494[1] = 5);
} else
{var statearr_13468_13495 = state_13461__$1;(statearr_13468_13495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 15))
{var inst_13451 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13469_13496 = state_13461__$1;(statearr_13469_13496[2] = inst_13451);
(statearr_13469_13496[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 13))
{var state_13461__$1 = state_13461;var statearr_13470_13497 = state_13461__$1;(statearr_13470_13497[2] = null);
(statearr_13470_13497[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 6))
{var inst_13426 = (state_13461[7]);var inst_13447 = (inst_13426 > 0);var state_13461__$1 = state_13461;if(cljs.core.truth_(inst_13447))
{var statearr_13471_13498 = state_13461__$1;(statearr_13471_13498[1] = 12);
} else
{var statearr_13472_13499 = state_13461__$1;(statearr_13472_13499[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 3))
{var inst_13459 = (state_13461[2]);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13461__$1,inst_13459);
} else
{if((state_val_13462 === 12))
{var inst_13425 = (state_13461[8]);var inst_13449 = cljs.core.vec.call(null,inst_13425);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13461__$1,15,out,inst_13449);
} else
{if((state_val_13462 === 2))
{var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13461__$1,4,ch);
} else
{if((state_val_13462 === 11))
{var inst_13441 = (state_13461[2]);var inst_13442 = (new Array(n));var inst_13425 = inst_13442;var inst_13426 = 0;var state_13461__$1 = (function (){var statearr_13473 = state_13461;(statearr_13473[10] = inst_13441);
(statearr_13473[7] = inst_13426);
(statearr_13473[8] = inst_13425);
return statearr_13473;
})();var statearr_13474_13500 = state_13461__$1;(statearr_13474_13500[2] = null);
(statearr_13474_13500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 9))
{var inst_13425 = (state_13461[8]);var inst_13439 = cljs.core.vec.call(null,inst_13425);var state_13461__$1 = state_13461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13461__$1,11,out,inst_13439);
} else
{if((state_val_13462 === 5))
{var inst_13434 = (state_13461[11]);var inst_13429 = (state_13461[9]);var inst_13426 = (state_13461[7]);var inst_13425 = (state_13461[8]);var inst_13433 = (inst_13425[inst_13426] = inst_13429);var inst_13434__$1 = (inst_13426 + 1);var inst_13435 = (inst_13434__$1 < n);var state_13461__$1 = (function (){var statearr_13475 = state_13461;(statearr_13475[11] = inst_13434__$1);
(statearr_13475[12] = inst_13433);
return statearr_13475;
})();if(cljs.core.truth_(inst_13435))
{var statearr_13476_13501 = state_13461__$1;(statearr_13476_13501[1] = 8);
} else
{var statearr_13477_13502 = state_13461__$1;(statearr_13477_13502[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 14))
{var inst_13454 = (state_13461[2]);var inst_13455 = cljs.core.async.close_BANG_.call(null,out);var state_13461__$1 = (function (){var statearr_13479 = state_13461;(statearr_13479[13] = inst_13454);
return statearr_13479;
})();var statearr_13480_13503 = state_13461__$1;(statearr_13480_13503[2] = inst_13455);
(statearr_13480_13503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 10))
{var inst_13445 = (state_13461[2]);var state_13461__$1 = state_13461;var statearr_13481_13504 = state_13461__$1;(statearr_13481_13504[2] = inst_13445);
(statearr_13481_13504[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13462 === 8))
{var inst_13434 = (state_13461[11]);var inst_13425 = (state_13461[8]);var tmp13478 = inst_13425;var inst_13425__$1 = tmp13478;var inst_13426 = inst_13434;var state_13461__$1 = (function (){var statearr_13482 = state_13461;(statearr_13482[7] = inst_13426);
(statearr_13482[8] = inst_13425__$1);
return statearr_13482;
})();var statearr_13483_13505 = state_13461__$1;(statearr_13483_13505[2] = null);
(statearr_13483_13505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___13491,out))
;return ((function (switch__6404__auto__,c__6419__auto___13491,out){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13487[0] = state_machine__6405__auto__);
(statearr_13487[1] = 1);
return statearr_13487;
});
var state_machine__6405__auto____1 = (function (state_13461){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13488){if((e13488 instanceof Object))
{var ex__6408__auto__ = e13488;var statearr_13489_13506 = state_13461;(statearr_13489_13506[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13507 = state_13461;
state_13461 = G__13507;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13461){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___13491,out))
})();var state__6421__auto__ = (function (){var statearr_13490 = f__6420__auto__.call(null);(statearr_13490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___13491);
return statearr_13490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___13491,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6419__auto___13650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto___13650,out){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto___13650,out){
return (function (state_13620){var state_val_13621 = (state_13620[1]);if((state_val_13621 === 7))
{var inst_13616 = (state_13620[2]);var state_13620__$1 = state_13620;var statearr_13622_13651 = state_13620__$1;(statearr_13622_13651[2] = inst_13616);
(statearr_13622_13651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 1))
{var inst_13579 = [];var inst_13580 = inst_13579;var inst_13581 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13620__$1 = (function (){var statearr_13623 = state_13620;(statearr_13623[7] = inst_13581);
(statearr_13623[8] = inst_13580);
return statearr_13623;
})();var statearr_13624_13652 = state_13620__$1;(statearr_13624_13652[2] = null);
(statearr_13624_13652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 4))
{var inst_13584 = (state_13620[9]);var inst_13584__$1 = (state_13620[2]);var inst_13585 = (inst_13584__$1 == null);var inst_13586 = cljs.core.not.call(null,inst_13585);var state_13620__$1 = (function (){var statearr_13625 = state_13620;(statearr_13625[9] = inst_13584__$1);
return statearr_13625;
})();if(inst_13586)
{var statearr_13626_13653 = state_13620__$1;(statearr_13626_13653[1] = 5);
} else
{var statearr_13627_13654 = state_13620__$1;(statearr_13627_13654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 15))
{var inst_13610 = (state_13620[2]);var state_13620__$1 = state_13620;var statearr_13628_13655 = state_13620__$1;(statearr_13628_13655[2] = inst_13610);
(statearr_13628_13655[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 13))
{var state_13620__$1 = state_13620;var statearr_13629_13656 = state_13620__$1;(statearr_13629_13656[2] = null);
(statearr_13629_13656[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 6))
{var inst_13580 = (state_13620[8]);var inst_13605 = inst_13580.length;var inst_13606 = (inst_13605 > 0);var state_13620__$1 = state_13620;if(cljs.core.truth_(inst_13606))
{var statearr_13630_13657 = state_13620__$1;(statearr_13630_13657[1] = 12);
} else
{var statearr_13631_13658 = state_13620__$1;(statearr_13631_13658[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 3))
{var inst_13618 = (state_13620[2]);var state_13620__$1 = state_13620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13620__$1,inst_13618);
} else
{if((state_val_13621 === 12))
{var inst_13580 = (state_13620[8]);var inst_13608 = cljs.core.vec.call(null,inst_13580);var state_13620__$1 = state_13620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13620__$1,15,out,inst_13608);
} else
{if((state_val_13621 === 2))
{var state_13620__$1 = state_13620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13620__$1,4,ch);
} else
{if((state_val_13621 === 11))
{var inst_13584 = (state_13620[9]);var inst_13588 = (state_13620[10]);var inst_13598 = (state_13620[2]);var inst_13599 = [];var inst_13600 = inst_13599.push(inst_13584);var inst_13580 = inst_13599;var inst_13581 = inst_13588;var state_13620__$1 = (function (){var statearr_13632 = state_13620;(statearr_13632[7] = inst_13581);
(statearr_13632[8] = inst_13580);
(statearr_13632[11] = inst_13600);
(statearr_13632[12] = inst_13598);
return statearr_13632;
})();var statearr_13633_13659 = state_13620__$1;(statearr_13633_13659[2] = null);
(statearr_13633_13659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 9))
{var inst_13580 = (state_13620[8]);var inst_13596 = cljs.core.vec.call(null,inst_13580);var state_13620__$1 = state_13620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13620__$1,11,out,inst_13596);
} else
{if((state_val_13621 === 5))
{var inst_13584 = (state_13620[9]);var inst_13581 = (state_13620[7]);var inst_13588 = (state_13620[10]);var inst_13588__$1 = f.call(null,inst_13584);var inst_13589 = cljs.core._EQ_.call(null,inst_13588__$1,inst_13581);var inst_13590 = cljs.core.keyword_identical_QMARK_.call(null,inst_13581,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13591 = (inst_13589) || (inst_13590);var state_13620__$1 = (function (){var statearr_13634 = state_13620;(statearr_13634[10] = inst_13588__$1);
return statearr_13634;
})();if(cljs.core.truth_(inst_13591))
{var statearr_13635_13660 = state_13620__$1;(statearr_13635_13660[1] = 8);
} else
{var statearr_13636_13661 = state_13620__$1;(statearr_13636_13661[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 14))
{var inst_13613 = (state_13620[2]);var inst_13614 = cljs.core.async.close_BANG_.call(null,out);var state_13620__$1 = (function (){var statearr_13638 = state_13620;(statearr_13638[13] = inst_13613);
return statearr_13638;
})();var statearr_13639_13662 = state_13620__$1;(statearr_13639_13662[2] = inst_13614);
(statearr_13639_13662[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 10))
{var inst_13603 = (state_13620[2]);var state_13620__$1 = state_13620;var statearr_13640_13663 = state_13620__$1;(statearr_13640_13663[2] = inst_13603);
(statearr_13640_13663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13621 === 8))
{var inst_13584 = (state_13620[9]);var inst_13580 = (state_13620[8]);var inst_13588 = (state_13620[10]);var inst_13593 = inst_13580.push(inst_13584);var tmp13637 = inst_13580;var inst_13580__$1 = tmp13637;var inst_13581 = inst_13588;var state_13620__$1 = (function (){var statearr_13641 = state_13620;(statearr_13641[14] = inst_13593);
(statearr_13641[7] = inst_13581);
(statearr_13641[8] = inst_13580__$1);
return statearr_13641;
})();var statearr_13642_13664 = state_13620__$1;(statearr_13642_13664[2] = null);
(statearr_13642_13664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6419__auto___13650,out))
;return ((function (switch__6404__auto__,c__6419__auto___13650,out){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13646[0] = state_machine__6405__auto__);
(statearr_13646[1] = 1);
return statearr_13646;
});
var state_machine__6405__auto____1 = (function (state_13620){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13620);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13647){if((e13647 instanceof Object))
{var ex__6408__auto__ = e13647;var statearr_13648_13665 = state_13620;(statearr_13648_13665[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13666 = state_13620;
state_13620 = G__13666;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13620){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto___13650,out))
})();var state__6421__auto__ = (function (){var statearr_13649 = f__6420__auto__.call(null);(statearr_13649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto___13650);
return statearr_13649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto___13650,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map
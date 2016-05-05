Number.prototype['..']=function(to,step){
     var arr = [],from=this;
     while(from <= to){
        arr.push(from++);
     }
     return arr;
};
String.prototype.uncapitalize=function (all){
    if(all){
       return this.split(' ').map(function(e){return e.uncapitalize();}).join(' ');
    }else{
         return this.charAt(0).toLowerCase() + this.slice(1);
    }
}
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * abdennour
 */
/**
 *
 * @param {type} createIfNotExist
 * @returns {undefined}
 */
String.prototype.toLiteralObject = function() {
    var fn = window, all = this.split('.')
    all.forEach(function(e, i) {
        if (!fn[e]) {
            fn[e] = {};
            if (i < all.length - 1) {
                fn[e][all[i + 1]] = {}
            }
        }
        fn = fn[e]
    });
    return window[all[0]];
};
String.prototype.functionBuilder = function(fnc) {
    var fn = window, all = this.split('.'), toR = ''
    all.forEach(function(e, i) {
        if (!fn[e]) {
            fn[e] = {};
            if (i < all.length - 1) {
                fn[e][all[i + 1]] = {}
            } else {
                if(typeof fnc==='function'){
                    fn[e] = fnc;
                }else if(typeof fnc==='string'){
                    eval('fn[e]='+fnc);
                }else{
                    fn[e]=function() {
                    }
                }

                toR = fn[e];
            }
        }
        fn = fn[e]
    });
    return toR;
};


//---------------------
Object.equals = function(x, y) {
    if (x === y)
        return true;
    // if both x and y are null or undefined and exactly the same

    if (!(x instanceof Object) || !(y instanceof Object))
        return false;
    // if they are not strictly equal, they both need to be Objects
    if (x.valueOf() === y.valueOf())
        return true
    if (x.constructor !== y.constructor)
        return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

    for (var p in x) {
        if (!x.hasOwnProperty(p))
            continue;
        // other properties were tested using x.constructor === y.constructor

        if (!y.hasOwnProperty(p))
            return false;
        // allows to compare x[ p ] and y[ p ] when set to undefined

        if (x[ p ] === y[ p ])
            continue;
        // if they have the same strict value or identity then they are equal

        if (typeof (x[ p ]) !== "object")
            return false;
        // Numbers, Strings, Functions, Booleans must be strictly equal

        if (!Object.equals(x[ p ], y[ p ]))
            return false;
        // Objects and Arrays must be tested recursively
    }

    for (p in y) {
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
            return false;
        // allows x[ p ] to be set to undefined
    }
    return true;
}

/**
 *
 * @param {type} org = new Tree()
 * @param {type} children =[new Tree(),new Tree()]
 * @returns {undefined}
 */
jsdk.Tree = function(name) {
    this.name = name;
    this.nodes = [];
    return this;
};
jsdk.Tree.prototype.findAllBy=function(attr,val){
    var found=[];
    this.nodes.forEach(function(e){
        if(Object.equals(e[attr],val)){
            found.push(e)
        }
    });
    return found;
};
jsdk.Tree.prototype.findBy=function(attr,val){
    var found=this.findAllBy(attr,val);
    if(found.length){return found[0];}
}
jsdk.Tree.prototype.connect = function(){
    var that=this;
    this.nodes.forEach(function(e){
         if(!(e.parent instanceof jsdk.Node)){
        if(e.parent){
            e.parent=that.findBy('data',e.parent+'');
            if(e.parent){
                e.depth=e.parent.depth+1;
            }else{
                  e.depth=1;
            }

        }else{
            e.depth=1;
        }

         }



    });
    this.nodes.forEach(function(e){
       e.children=that.nodes.filter(function(nd){return (nd.parent) && (Object.equals(nd.parent.data,e.data))});

    });

    return this;
}
jsdk.Node = function(data, parent) {
    this.data = data;
    if (parent) {
        this.parent = parent;
        this.depth = this.parent.depth + 1;
    } else {
        this.depth = 0;
    }
    this.children = [];
    return this;
};
jsdk.Node.prototype.childExist = function(data) {
    return this.children.filter(function(e) {
        return Object.equals(e.data, data)
    }).length > 0
};
jsdk.Node.prototype.addChild = function(data, addIfExist) {
    if (addIfExist || !this.childExist(data)) {
        this.children.push(new jsdk.Node(data, this));
    }
    return this;
};
jsdk.Node.prototype.getChild = function(data) {
    var rest = this.children.filter(function(e) {
        return Object.equals(e.data, data)
    })
    if (rest.length) {
        return rest[0]
    }
    else {
        return null;
    }
};
jsdk.Node.prototype.grandChildren=function(){
    if(this.children && this.children.length){
        return this.children.map(function(ch){ return [ch,ch.grandChildren()]}).flatten(true);
    }else{
        return [];
    }

};

jsdk.Node.prototype.root = function() {
    var pr = this.parent;
    if (!pr) {
        return this;
    } else {
        while (pr.parent) {
            pr = pr.parent;
        }
        return pr;
    }
};
jsdk.Node.prototype.siblings = function(includeMe) {

    if (!this.parent) {
        if (includeMe) {
            return [this]
        } else {
            return []
        }

    } else {
        var that = this
        if (includeMe) {
            return this.parent.children
        }
        else {
            return this.parent.children.filter(function(e) {
                return !Object.equals(e.data, that.data)
            })
        }
    }
};

jsdk.Node.prototype.index = function() {
    if (!this.parent) {
        return 0
    }
    return this.parent.children.map(function(e) {
        return e.data
    }).indexOf(this.data)
};
Function.prototype.bodyWihoutChildrenfunctions=function(){
        var reducer=this.toString().reduceWhiteSpace();
   // console.log(reducer)
  this.childrenfunctionsNames().map(function(e,i){
        var posFName=reducer.indexOf('function '+e)+('function '+e).length;
        var from=reducer.indexOf('function '+e);
        var indexFeteh=reducer.indexOf('{',posFName);
        var indexCloser=appContext.utils.closeddiama(indexFeteh,reducer,1);
        //var openerArgs=reducer.indexOf('(',posFName);
       // var closerArgs=appContext.utils.closeddiama(openerArgs,reducer,1);
        // console.log(indexFeteh);
        //console.log(indexCloser);

        reducer=reducer.replaceAll(reducer.substr(from,indexCloser-from+1),'')
        return {from:reducer.indexOf('function '+e),to:indexCloser}
        //return  {name:e,body:reducer.substring(indexFeteh+1,indexCloser),args:reducer.substring(openerArgs+1,closerArgs)}
  });
  return reducer;
};
/**
 * @depends on appContext rabeeJS
 * @returns {Function.prototype@call;childrenfunctionsNames@call;map}
 */
Function.prototype.childrenfunctionsBodies=function(){
    var reducer=this.toString().reduceWhiteSpace();
   // console.log(reducer)
  return this.childrenfunctionsNames().map(function(e,i){
        var posFName=reducer.indexOf('function '+e)+('function '+e).length;
        var indexFeteh=reducer.indexOf('{',posFName);

        var indexCloser=appContext.utils.closeddiama(indexFeteh,reducer,1);
        var openerArgs=reducer.indexOf('(',posFName);
        var closerArgs=appContext.utils.closeddiama(openerArgs,reducer,1);
        // console.log(indexFeteh);
        //console.log(indexCloser);
        return  {name:e,body:reducer.substring(indexFeteh+1,indexCloser),args:reducer.substring(openerArgs+1,closerArgs)}
  });

};
Function.prototype.childrenfunctionsNames = function(nested) {
    function tokenize(code) {
        var code = code.split(/\\./).join(''),
                regex = /\bfunction\b|\(|\)|\{|\}|\/\*|\*\/|\/\/|"|'|\n|\s+/mg,
                tokens = [],
                pos = 0;

        for (var matches; matches = regex.exec(code); pos = regex.lastIndex) {
            var match = matches[0],
                    matchStart = regex.lastIndex - match.length;

            if (pos < matchStart)
                tokens.push(code.substring(pos, matchStart));

            tokens.push(match);
        }

        if (pos < code.length)
            tokens.push(code.substring(pos));

        return tokens;
    }

    var separators = {
        '/*': '*/',
        '//': '\n',
        '"': '"',
        '\'': '\''
    };

    function extractInnerFunctionNames(func, nested) {
        var names = [],
                tokens = tokenize(func.toString()),
                level = 0;

        for (var i = 0; i < tokens.length; ++i) {
            var token = tokens[i];

            switch (token) {
                case '{':
                    ++level;
                    break;

                case '}':
                    --level;
                    break;

                case '/*':
                case '//':
                case '"':
                case '\'':
                    var sep = separators[token];
                    while (++i < tokens.length && tokens[i] !== sep)
                        ;
                    break;

                case 'function':
                    if (level === 1 || (nested && level)) {
                        while (++i < tokens.length) {
                            token = tokens[i];

                            if (token === '(')
                                break;

                            if (/^\s+$/.test(token))
                                continue;

                            if (token === '/*' || token === '//') {
                                var sep = separators[token];
                                while (++i < tokens.length && tokens[i] !== sep)
                                    ;
                                continue;
                            }

                            names.push(token);
                            break;
                        }
                    }
                    break;
            }
        }

        return names;
    };
    return extractInnerFunctionNames(this,nested);
};

jsdk.applyToConstructor=function(constructor, argArray) {
    var args = [null].concat(argArray);
    var factoryFunction = constructor.bind.apply(constructor, args);
    return new factoryFunction();
};

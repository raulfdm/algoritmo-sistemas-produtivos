if(typeof jsdk ==='undefined')
    jsdk={};
(function(api,_w){
     _w.masfufa_class=function(o){
        this.dt=o.data || [];
        this.fm=o.dim || o.dimensions || '1x'+this.dt.length;
        if(!this.checkFormat()){
          this.fm='1x'+this.dt.length;
        }
        this.get=this.restruct();
        return this;
     };
      _w.masfufa_class.prototype.restruct=function(){
          var rr=[],realfm=this.buildformat();
          (1)[".."](realfm[0]).forEach(function(){
              rr.push([]);
          });
          this.dt.forEach(function(e,i){
              rr[parseInt(i/realfm[1])][i%realfm[1]]=e;
          });
          return rr;
      }
     _w.masfufa_class.prototype.buildformat=function(){
         return this.fm.split('x').map(function(e){return parseInt(e)});
     }
     _w.masfufa_class.prototype.checkFormat=function(){
        var fm=this.buildformat();
        return fm[0]*fm[1] === this.dt.length;
     };
     _w.masfufa_class.prototype.multiple=function(m){

     };
    var mapper=function(i,row){

       return
    };
    var reducer=function(list){
      return
    };


})(jsdk,window);

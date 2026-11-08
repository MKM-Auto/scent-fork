'use strict';
class Colony {
  constructor(seed=73) {
    this.rng=seed>>>0; this.w=96; this.h=60; this.tick=0; this.delivered=0;
    this.nest={x:18,y:30};
    this.food=[{x:68,y:16,amount:600},{x:78,y:46,amount:600}];
    this.scent=new Float64Array(this.w*this.h);
    this.ants=Array.from({length:180},()=>({x:18,y:30,angle:this.random()*Math.PI*2,loaded:false}));
  }
  random(){this.rng=(Math.imul(this.rng,1664525)+1013904223)>>>0;return this.rng/4294967296;}
  clone(){const c=Object.create(Colony.prototype);Object.assign(c,JSON.parse(JSON.stringify(this)));c.scent=new Float64Array(this.scent);return c;}
  at(x,y){return Math.max(0,Math.min(this.h-1,Math.floor(y)))*this.w+Math.max(0,Math.min(this.w-1,Math.floor(x)));}
  erase(x,y,radius=8){
    for(let yy=0;yy<this.h;yy++)for(let xx=0;xx<this.w;xx++)
      if(Math.hypot(xx-x,yy-y)<=radius)this.scent[yy*this.w+xx]=0;
  }
  relocateFood(){
    // Move only remaining ground food; carried food and stale scent stay put.
    const positions=[[42,8],[48,52]];
    this.food.forEach((f,i)=>{[f.x,f.y]=positions[i];});
  }
  step(){
    this.tick++;
    for(let i=0;i<this.scent.length;i++)this.scent[i]*=.995;
    for(const a of this.ants){
      if(a.loaded){
        this.scent[this.at(a.x,a.y)]=Math.min(25,this.scent[this.at(a.x,a.y)]+2);
        a.angle=Math.atan2(this.nest.y-a.y,this.nest.x-a.x)+(this.random()-.5)*.6;
        if(Math.hypot(a.x-this.nest.x,a.y-this.nest.y)<2){this.delivered++;a.loaded=false;a.angle+=Math.PI;}
      }else{
        for(const f of this.food)if(f.amount>0 && Math.hypot(a.x-f.x,a.y-f.y)<3){f.amount--;a.loaded=true;a.angle+=Math.PI;break;}
        if(!a.loaded){
          const turns=[-.65,0,.65];
          const weights=turns.map(t=>1+this.scent[this.at(a.x+Math.cos(a.angle+t)*3,a.y+Math.sin(a.angle+t)*3)]*3);
          let r=this.random()*weights.reduce((s,v)=>s+v,0),k=0;
          while(k<2 && (r-=weights[k])>0)k++;
          a.angle+=turns[k]+(this.random()-.5)*.45;
        }
      }
      a.x+=Math.cos(a.angle)*.75;a.y+=Math.sin(a.angle)*.75;
      if(a.x<1||a.x>this.w-2){a.angle=Math.PI-a.angle;a.x=Math.max(1,Math.min(this.w-2,a.x));}
      if(a.y<1||a.y>this.h-2){a.angle=-a.angle;a.y=Math.max(1,Math.min(this.h-2,a.y));}
    }
  }
}
if(typeof module!=='undefined')module.exports={Colony};

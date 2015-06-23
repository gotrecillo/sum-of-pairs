var sum_pairs=function(ints, s){
   var max = ints.length;
   var left = -1;
   var tried = [];
   while(0 < max){
      var number = ints[0];
      if(tried.indexOf(number) == -1){
        tried.push(number);
        var complement = ints.indexOf(s-number,1);
        if(complement != -1){
          left = number;
          max = complement;
          ints = ints.slice(0,complement);
        }
      }
      max--;
      ints.splice(0,1);
    }
    return (left == -1) ? undefined: [left,s-left];
}

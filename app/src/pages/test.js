
  function filterData(day){
    var current;
    const ret = [];
    data.sort(function(a,b){
      return a.TimeStamp-b.TimeStamp;
    })
    for (var i = 0; i < data.length; i++) {
      if (data.TimeStamp.getDay() == day) {
        current = data[i].TimeStamp;
        break;
      }
    }
    const arr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    for (var i = 0; i < arr.length; i ++) {
      var length = 0;
      for (var j = 0; j < data.length; j++) {
        if (data[j].TimeStamp == current && data[j].TimeStamp.getHours() == arr[i]) {
          if (data[j].QueueLength > length) {
            length = data.QueueLength;
          }
        }
      }
      ret.push({"Hour": "" + arr[i],"QueueLength": length});
      console.log("In filter data:" + ret)
    }
    return ret;
  }

    
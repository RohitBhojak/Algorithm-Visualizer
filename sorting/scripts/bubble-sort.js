function bubbleSort(){
    const size = document.querySelector("#size");
    for(var i = 0; i < size-1; i++){
        for(var j = 0; j < size - i - 1; j++){
            if(bar_height[j]<bar_height[j+1])
                var temp = bar_height[j];
                bar_height[j] = bar_height[j+1];
                bar_height[j+1] = temp;
        }
    }
}
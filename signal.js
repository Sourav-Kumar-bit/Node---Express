const signalOne = [1,2,3,4,5,6,7]
const signalTwo = [1,2,3,4,5,5,7]

function UpdateTimes(signalOne, signalTwo) {
    var maxEqual = 0
    var signal = 0

    if (signalOne.length  < signalTwo.length) {
        signal = signalOne.length
    }
    else {
        signal = signalTwo.length
    }
    for (let i=0 ; i<signal ; i++) {
        if (signalOne[i] == signalTwo[i]) {
            if (signalOne[i] > maxEqual) {
                maxEqual++
            }
        }
    }
    return maxEqual
}

result = UpdateTimes(signalOne, signalTwo)
console.log(result);